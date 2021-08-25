CREATE TABLE "kv" (
"k"  TEXT,
"v"  TEXT
);
CREATE UNIQUE INDEX "idx_k"
ON "kv" ("k" ASC);

CREATE INDEX "idx_v"
ON "kv" ("v" ASC);

CREATE TABLE "rss" (
"id"  INTEGER PRIMARY KEY AUTOINCREMENT,
"url"  TEXT
);

CREATE TABLE "article" (
"id"  INTEGER PRIMARY KEY AUTOINCREMENT,
"rss" TEXT,
"guid"  TEXT,
"pubDate" TEXT,
"pubTime" INTEGER,
"author" TEXT,
"content" TEXT,
"link" TEXT,
"readed" INTEGER,
"title" TEXT
);

