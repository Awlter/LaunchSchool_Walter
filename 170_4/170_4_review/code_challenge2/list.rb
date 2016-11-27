require "sinatra"
require "sinatra/reloader"
require 'yaml'
require 'tilt/erubis'

helpers do
  def users_number
    @users.size
  end

  def interests_number
    count = 0

    @users.each do |_, info|
      count += info[:interests].size
    end

    count
  end
end

before do
  @users = YAML.load_file("users.yaml")
end

get '/' do
  redirect '/users'
end

get '/users' do
  erb :users
end

get '/:user' do
  user = params[:user].to_sym
  @user = @users[user]
  @other_users = @users.reject { |name, _| name == user }

  erb :user
end