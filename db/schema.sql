CREATE DATABASE burger_db;

USE burger_db;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(45) NOT NULL,
	devoured boolean,
	PRIMARY KEY (id)
);


-- CREATE TABLE `burgers` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `burger_name` VARCHAR(45) NULL,
--   `date` TIMESTAMP(6) NULL,
--   PRIMARY KEY (`id`));
