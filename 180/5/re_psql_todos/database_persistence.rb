require 'pg'
require 'pry'

class DatabasePersistence
  def initialize(logger)
    @db = PG.connect(dbname:'todos')
    @logger = logger
  end

  def find_list(id)
    list_sql = <<~SQL
      SELECT lists.*,
        COUNT(todos.id) AS todos_count,
        COUNT(NULLIF(completed, true)) AS todos_remaining_count
        FROM lists LEFT JOIN todos ON todos.list_id = lists.id
        GROUP BY lists.id
        HAVING (lists.id = $1)
    SQL

    list = query(list_sql, id).first

    to_hash(list)
  end

  def all_list
    sql = <<~SQL
      SELECT lists.*,
        COUNT(todos.id) AS todos_count,
        COUNT(NULLIF(completed, true)) AS todos_remaining_count
        FROM lists LEFT JOIN todos ON todos.list_id = lists.id
        GROUP BY lists.id
        ORDER BY lists.id;
    SQL

    result = query(sql)

    result.map do |list|
      to_hash(list)
    end
  end

  def create_new_list(new_name)
    sql = "INSERT INTO lists (name) VALUES ($1);"
    query(sql,new_name)
  end

  def delete_list(id)
    query("DELETE FROM todos WHERE list_id = $1", id)
    query("DELETE FROM lists WHERE id = $1", id)
  end

  def update_list_name(id, new_name)
    sql = "UPDATE lists SET name = $1 WHERE id = $2"
    query(sql, new_name, id)
  end

  def create_new_todo(list_id, todo_name)
    sql = "INSERT INTO todos (list_id, name) VALUES ($1, $2)"
    query(sql, list_id, todo_name)
  end

  def delete_todo_from_list(list_id, todo_id)
    sql = "DELETE FROM todos WHERE list_id = $1 AND id = $2"
    query(sql, list_id, todo_id)
  end

  def update_todo_status(list_id, todo_id, new_status)
    sql = "UPDATE todos SET completed = $3 WHERE list_id = $1 AND id = $2"
    query(sql, list_id, todo_id, new_status)
  end

  def mark_all_todos_as_complete(list_id)
    sql = "UPDATE todos SET completed = true WHERE list_id = $1"
    query(sql, list_id)
  end

  def query(statment, *params)
    @logger.info "#{statment}: #{params}"

    @db.exec_params(statment, params)
  end

  def find_todos_for_list(list_id)
    todo_sql = "SELECT * FROM todos WHERE list_id = $1 ORDER BY id"
    todos_result = query(todo_sql, list_id)

    todos_result.map do |todo|
      { id: todo["id"].to_i,
        name: todo["name"],
        completed: todo["completed"] == 't' }
    end
  end

  private

  def to_hash(list)
    { id: list["id"].to_i,
      name: list["name"],
      todos_count: list["todos_count"].to_i,
      todos_remaining_count: list["todos_remaining_count"].to_i}
  end

end