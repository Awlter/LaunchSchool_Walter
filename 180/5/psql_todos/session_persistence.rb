class SessionPersistence
  def initialize(session)
    @session = session
    @session[:lists] ||= []
  end

  def find_list(id)
    @session[:lists].find{ |list| list[:id] == id }
  end

  def all_lists
    @session[:lists]
  end

  def create_list(list_name)
    id = next_element_id(@session[:lists])
    @session[:lists] << { id: id, name: list_name, todos: [] }
  end

  def update_list(list, list_name)
    list[:name] = list_name
  end

  def delete_list(id)
    @session[:lists].reject! { |list| list[:id] == id }
  end

  def create_todo(list, text)
    id = next_element_id(list[:todos])
    list[:todos] << { id: id, name: text, completed: false }
  end

  def delete_todo(list, todo_id)
    list[:todos].reject! { |todo| todo[:id] == todo_id }
  end

  def update_todo_status(list, todo_id, is_completed)
    todo = list[:todos].find { |todo| todo[:id] == todo_id }
    todo[:completed] = is_completed
  end

  def mark_all_complete(list)
    list[:todos].each do |todo|
      todo[:completed] = true
    end
  end

  private

  def next_element_id(elements)
    max = elements.map { |todo| todo[:id] }.max || 0
    max + 1
  end
end