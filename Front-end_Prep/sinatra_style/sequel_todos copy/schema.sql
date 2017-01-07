CREATE TABLE lists (
id serial PRIMARY KEY,
name varchar(100) NOT NULL UNIQUE
);

CREATE TABLE todos (
todo_id serial PRIMARY KEY,
name varchar(100) NOT NULL,
completed boolean NOT NULL DEFAULT false,
list_id integer NOT NULL REFERENCES lists (id)
);