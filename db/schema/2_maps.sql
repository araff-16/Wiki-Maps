DROP TABLE IF EXISTS maps CASCADE;

CREATE TABLE maps (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
pic_URL VARCHAR(255) NOT NULL,
category VARCHAR(255) NOT NULL,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);