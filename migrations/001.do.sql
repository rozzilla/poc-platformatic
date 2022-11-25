CREATE SCHEMA IF NOT EXISTS "my_schema";
CREATE TABLE "my_schema"."export" (
    "id" uuid NOT NULL,
    "other_id" varchar(255) NOT NULL,
    "payload" jsonb NOT NULL,
    "status" varchar(255) NOT NULL,
    "version" int4 NOT NULL,
    "error" jsonb,
    "size" int4,
    "media" varchar(255),
    "bucket" varchar(255),
    "key" varchar(255),
    "created_at" timestamptz NOT NULL,
    PRIMARY KEY ("id", "version")
);
