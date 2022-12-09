CREATE SCHEMA IF NOT EXISTS "myschema";

CREATE TABLE IF NOT EXISTS "myschema"."template" (
    "id" uuid NOT NULL,
    "name" varchar(255) NOT NULL,
    "date_format" varchar(10) NOT NULL,
    "include_header_row" bool NOT NULL,
    "archived_at" timestamptz,
    "columns" jsonb,
    "_created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "_updated_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "language" varchar(2) NOT NULL DEFAULT 'en'::character varying,
    "other" varchar,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS myschema.mytable_id_seq;

CREATE TABLE IF NOT EXISTS "myschema"."mytable" (
    "id" int4 NOT NULL DEFAULT nextval('myschema.mytable_id_seq'::regclass),
    "template_id" uuid,
    "_created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "mytable_template_" FOREIGN KEY ("template_id") REFERENCES "myschema"."template"("id"),
    PRIMARY KEY ("id")
);