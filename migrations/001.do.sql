CREATE SCHEMA IF NOT EXISTS "standard_file_exports";

CREATE TABLE IF NOT EXISTS "standard_file_exports"."platformatic_test" (
    "id" uuid NOT NULL,
    "status" varchar(255) NOT NULL,
    "version" int4 NOT NULL,
    "error" jsonb,
    "created_at" timestamptz NOT NULL,
    PRIMARY KEY ("id","version")
);