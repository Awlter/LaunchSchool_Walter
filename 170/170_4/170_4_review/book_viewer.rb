require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

before do
  @contents = File.readlines("data/toc.txt")
end

helpers do
  def in_paragraphs(chapter)
    chapter.split("\n\n").each_with_index.map {|para, index| "<p id=#{index + 1}>#{para}</p>" }.join
  end

  def highlight(chapter, term)
    chapter.gsub(term, %(<strong>#{term}</strong>))
  end
end

not_found do
  redirect '/'
end

get "/" do
  @title = "The Adventures of Sherlock Holmes"
  erb :home
end

get "/chapters/:number" do
  number = params[:number].to_i
  chapter_name = @contents[number - 1]
  @title = "Chapter #{number}: #{chapter_name}"

  @chapter = File.read("data/chp#{number}.txt")

  erb :chapter
end

def each_chapter
  @contents.each_with_index do |name, index|
    number = index + 1
    content = File.read("data/chp#{number}.txt")
    yield number, name, content
  end
end

def chapters_matching(query)
  results = []

  return results unless query

  each_chapter do |number, name, content|
    matches = {}

    content.split("\n\n").each_with_index do |paragraph, id|
      matches[id + 1] = paragraph if paragraph.include? query
    end

    results << { number: number, name: name, matches: matches } if matches.any?
  end

  results
end

get "/search" do
  @results = chapters_matching(params[:query])
  erb :search
end