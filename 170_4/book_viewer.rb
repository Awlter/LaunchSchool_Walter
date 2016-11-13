require 'pry'
require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

before do
  @contents = File.readlines("data/toc.txt")  
end

get "/" do
  @title = "The Adventures of Sherlock Holmes"

  erb :home
end

get "/chapters/:number" do
  number = params[:number]
  @title = @contents[number.to_i - 1]
  @chapter = File.read("data/chp#{number}.txt")

  erb :chapter
end

def each_chapter
  @contents.each_with_index do |name, index|
    number = index + 1
    contents = File.read("data/chp#{number}.txt")
    yield number, name, contents
  end
end

def chapters_matching(key_word)
  results = []

  each_chapter do |number, name, contents|
    paragrahs = {}
    contents.split(/\n\n/).each_with_index do |paragrah, indx|
      paragrahs[indx] = paragrah if paragrah.scan(/\w+/).include? key_word
    end 
    results << { number: number, name: name, paragrahs: paragrahs } unless paragrahs.empty?
  end

  results
end

get "/search" do
  @results = chapters_matching(params[:query])
  erb :search
end

get "/show/:name" do
  params[:name]
end

helpers do
  def in_paragraphs(contents)
    contents.split(/\n\n/)
  end

  def high_light(paragrah)
    paragrah.gsub(params[:query], "<strong>#{params[:query]}</strong>")
  end
end

not_found do
  redirect "/"
end