DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger(
  id INT
  AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(80),
  isEaten BOOLEAN
);


INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 0);
INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 0);
INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 0);
INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 0);
INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 0);
INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 0);
INSERT INTO burger (name, isEaten) VALUES ('Bacon Cheese Burger', 1);