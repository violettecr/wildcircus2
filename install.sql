DROP DATABASE IF EXISTS wildcircus2;
CREATE DATABASE IF NOT EXISTS wildcircus2;
USE wildcircus2;

DROP TABLE IF EXISTS category, gallery, shows;

CREATE TABLE category (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE gallery (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  date VARCHAR(10) NOT NULL,
  picture_name VARCHAR(100) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO category (name) 
  VALUES 
  ('Clown'),
  ('Animals'), 
  ('Magic'), 
  ('Artists');

CREATE TABLE shows (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date VARCHAR(10) NOT NULL,
  compagny_name VARCHAR(100) NOT NULL
);
