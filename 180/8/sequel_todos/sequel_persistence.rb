require "sequel"

DB = Sequel.connect("postgres://localhost/todos")

class SequelPersistence
  def initialize(logger)
    DB.logger = logger
  end

  def find_list(id)
    all_lists.first(lists__id: id)
  end

  def all_lists
    DB[:lists].left_join(:todos, list_id: :id).
    select_all(:lists).
    select_append do
      [ count(todos__id).as(todos_count),
        count(nullif(completed, true)).as(todos_remaining_count) ]
    end.
    group(:lists__id).
    order(:lists__id)
  end

  def create_list(list_name)
    DB[:lists].insert(name: list_name)
  end

  def update_list(id, new_name)
    DB[:lists].where(id: id).update(name: new_name)
  end

  def delete_list(id)
    DB[:todos].where(list_id: id).delete
    DB[:lists].where(id: id).delete
  end

  def create_todo(id, content)
    DB[:todos].insert([:name, :list_id], [content, id])
  end

  def delete_todo(list_id, todo_id)
    DB[:todos].where(id: todo_id, list_id: list_id).delete
  end

  def update_todo_status(list_id, todo_id, is_completed)
    DB[:todos].where(id: todo_id, list_id: list_id).update(completed: is_completed)
  end

  def mark_all_complete(id)
    DB[:todos].where(list_id: id).update(completed: true)
  end

  def find_todos_for_list(list_id)
    DB[:todos].where(list_id: list_id).order(:id)
  end
end