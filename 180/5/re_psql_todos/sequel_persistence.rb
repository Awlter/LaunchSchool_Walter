require 'sequel'

DB = Sequel.connect("postgres://localhost/todos")

class SequelPersistence
  def initialize(logger)
    DB.logger = logger
  end

  def find_list(id)
    all_list.where(lists__id: id).first
  end

  def all_list
    DB[:lists].left_join(:todos, list_id: :id)
               .select do
                [lists.*,
                 count(todos__id).as(todos_count),
                 count(nullif(completed, true)).as(todos_remaining_count)]
               end
               .group(:lists__id)
               .order(:lists__id)
  end

  def create_new_list(new_name)
    DB[:lists].insert(name: new_name)
  end

  def delete_list(id)
    DB[:todos].where(list_id: id).delete
    DB[:lists].where(id: id).delete
  end

  def update_list_name(id, new_name)
    DB[:lists].where(id: id).update(name: new_name)
  end

  def create_new_todo(list_id, todo_name)
    DB[:todos].insert(list_id: list_id, name: todo_name)
  end

  def delete_todo_from_list(list_id, todo_id)
    DB[:todos].where(list_id: list_id, id: todo_id).delete
  end

  def update_todo_status(list_id, todo_id, new_status)
    DB[:todos].where(list_id: list_id, id: todo_id).update(completed: new_status)
  end

  def mark_all_todos_as_complete(list_id)
    DB[:todos].where(list_id: list_id).update(completed: true)
  end

  def find_todos_for_list(list_id)
    DB[:todos].where(list_id: list_id).order(:id)
  end
end