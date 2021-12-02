DROP TABLE IF EXISTS pois CASCADE;

CREATE TABLE pois (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255),
description TEXT,
price INTEGER,
map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
latitude NUMERIC,
longitude NUMERIC,
created_at TIMESTAMP,
custom_order INTEGER
);

