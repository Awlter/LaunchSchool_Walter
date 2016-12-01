# def compare(string)
#   puts "Before: #{string}"
#   string = yield(string)
#   puts "After: #{string}"
# end

# compare('hi') { |word| word.upcase }
# def select(array)
#   counter = 0
#   result = []

#   while counter < array.size
#     result << array[counter] if yield(array[counter])
#     counter += 1
#   end

#   result
# end

# array = [1, 2, 3, 4, 5]

# p select(array) { |num| num.odd? }      # => [1, 3, 5]
# p select(array) { |num| puts num }      # => [], because "puts num" returns nil and evaluates to false
# puts select(array) { |num| num + 1 }

#
# def reduce(array, acc = array.first)
#   counter = 1
#   counter = 0 unless acc.equal? array.first

#   while counter < array.size
#     acc = yield(acc, array[counter])
#     counter += 1
#   end

#   acc
# end

# array = [1, 2, 3, 4, 5]

# p reduce(array) { |acc, num| acc + num }                    # => 15
# p reduce(array, 10) { |acc, num| acc + num }                # => 25
# p reduce(array) { |acc, num| acc + num if num.odd? }  

#
class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end
end

class TodoList
  attr_accessor :title

  def initialize(title)
    @title
    @todos = []
  end

  def add(todo)
    raise TypeError, "Can only add Todo objects" unless todo.instance_of? Todo
    @todos << todo
  end
  alias_method :<<, :add

  def size
    @todos.size
  end

  def first
    @todos.first
  end

  def last
    @todos.last
  end

  def item_at(indx)
    @todos.fetch(indx)
  end

  def find_by_title(name)
    to_do = nil
    each { |todo| to_do = todo if todo.title == name }
    to_do
  end

  def mark_done_at(indx)
    item_at(indx).done!
  end

  def mark_undone_at(indx)
    item_at(indx).undone!
  end

  def done?
    @todos.all? { |todo| todo.done? }
  end

  def done!
    @todos.each { |todo| todo.done! }
  end

  def each
    @todos.each { |todo| yield(todo) }
    self
  end

  def select
    #1 return an array
    # @todos.select { |todo| yield(todo) }

    #2 
    # result = []
    # each { |todo| result << todo if yield(todo) }
    # result

    #3
    list = TodoList.new(title)
    each { |todo| list.add(todo) if yield(todo) }
    list
  end

  def mark_done(name)
    each { |todo| todo.done! if todo.title == name }
  end

  def all_done
    select { |todo| todo.done? }
  end

  def all_not_done
    select { |todo| !todo.done? }
  end

  def shift
    @todos.shift
  end

  def pop
    @todos.pop
  end

  def remove_at(indx)
    @todos.delete(item_at(indx))
  end

  def to_s
    text = "---- #{title} ----\n"
    text << @todos.map(&:to_s).join("\n")
    text
  end

  def to_a
    @todos
  end
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")

list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list.add(todo3)

p list.find_by_title("Buy milk")















