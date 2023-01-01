CREATE SCHEMA IF NOT EXISTS myschema;

CREATE TABLE IF NOT EXISTS myschema.table1 (
  id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS myschema.table2 (
  id INTEGER NOT NULL,
  fk_id INTEGER NOT NULL,
  CONSTRAINT table1_fk_id FOREIGN KEY (fk_id) REFERENCES myschema.table1 (id),
  PRIMARY KEY (id)
);