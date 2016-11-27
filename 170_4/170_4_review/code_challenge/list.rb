require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @files = Dir.glob('public/*').map { |path| File.basename(path) }.sort
  @files.reverse! if params[:sort] == 'desc'
  erb :list
end