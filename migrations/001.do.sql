CREATE SCHEMA test1;
CREATE SCHEMA test2;
CREATE SCHEMA test3;
CREATE SCHEMA test4;

CREATE TABLE test1.authors (
  id INTEGER PRIMARY KEY,
  name VARCHAR(42)
);

CREATE TABLE test2.books (
  id INTEGER PRIMARY KEY,
  title VARCHAR(42),
  author_id INTEGER
);

CREATE TABLE test3.authors (
  id INTEGER PRIMARY KEY,
  name VARCHAR(42)
);

CREATE TABLE test4.books (
  id INTEGER PRIMARY KEY,
  title VARCHAR(42),
  author_id INTEGER
);

ALTER TABLE ONLY test2.books
  ADD CONSTRAINT authors_fkey FOREIGN KEY (author_id) REFERENCES test1.authors(id);

ALTER TABLE ONLY test4.books
  ADD CONSTRAINT authors_fkey FOREIGN KEY (author_id) REFERENCES test3.authors(id);