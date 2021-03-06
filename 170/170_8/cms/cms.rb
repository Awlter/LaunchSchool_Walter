require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "redcarpet"
require 'yaml'
require 'bcrypt'

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def render_markdown(text)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(text)
end

def load_file(path)
  text = File.read(path)
  case File.extname(path)
  when '.txt'
    headers["Content-Type"] = "text/plain"
    text
  when '.md'
    erb render_markdown(text)
  end
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path('../test/data', __FILE__ )
  else
    File.expand_path('../data', __FILE__)
  end
end

def user_signed_in?
  session.key?(:username)
end

def require_signed_in_user
  unless user_signed_in?
    session[:message] = "You must be signed in to do that."
    redirect '/'
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == 'test'
    File.expand_path("../test/users.yaml", __FILE__)
  else
    File.expand_path("../users.yaml", __FILE__)
  end
  YAML.load_file(credentials_path)
end

def credential_valid?(username, password)
  credentials = load_user_credentials

  return false unless credentials.key?(username)

  bcrypt_password = BCrypt::Password.new(credentials[username])
  bcrypt_password == password
end

get '/' do
  pattern = File.join(data_path, '*')
  @files = Dir.glob(pattern).map { |file| File.basename(file) }

  erb :index
end

get "/new" do
  require_signed_in_user

  erb :new
end

get "/:filename" do
  filename = params[:filename]
  file_path = File.join(data_path, filename)

  if File.file? file_path
    load_file(file_path)
  else
    session[:message] = "#{filename} does not exist."
    redirect '/'
  end
end

get "/:filename/edit" do
  require_signed_in_user

  @filename = params[:filename]
  file_path = File.join(data_path, @filename)

  @content = File.read(file_path)

  erb :edit
end

get "/users/signin" do
  erb :signin
end

post "/create" do
  require_signed_in_user

  filename = params[:filename]

  if filename.empty?
    session[:message] = "A name is required."

    status 422

    erb :new
  elsif filename.split('.').size != 2
    session[:message] = "The file is invalid."

    erb :new
  else
    file_path = File.join(data_path, filename)

    File.write(file_path, '')

    session[:message] = "#{filename} was created."
    redirect "/"
  end
end

post "/:filename/delete" do
  require_signed_in_user

  filename = params[:filename]
  file_path = File.join(data_path, filename)

  File.delete(file_path)
  session[:message] = "#{filename} was deleted."

  redirect '/'
end

post "/users/signin" do
  username = params[:username]

  if credential_valid?(username, params[:password])
    session[:message] = 'Welcome!'
    session[:username] = username

    redirect '/'
  else
    session[:message] = "Invalid Credential!"
    status 422
    erb :signin
  end
end

post "/users/signout" do
  session.delete(:username)
  session[:message] = "You have been signed out."

  redirect '/'
end
post "/:filename" do
  require_signed_in_user

  filename = params[:filename]
  file_path = File.join(data_path, filename)

  File.write(file_path, params[:content])

  session[:message] = "#{params[:filename]} was updated."
  redirect "/"
end
