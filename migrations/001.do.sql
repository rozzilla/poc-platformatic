CREATE SCHEMA IF NOT EXISTS "myschema";

CREATE TABLE IF NOT EXISTS "myschema"."template" (
    "id" uuid NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "myschema"."mytable" (
    "id" int4 NOT NULL,
    "template_id" uuid,
    CONSTRAINT "mytable_template" FOREIGN KEY ("template_id") REFERENCES "myschema"."template"("id"),
    PRIMARY KEY ("id")
);