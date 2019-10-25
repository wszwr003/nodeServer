DROP DATABASE IF EXISTS `grandway_product_db`;
CREATE DATABASE `grandway_product_db`;
USE `grandway_product_db`;
DROP TABLE IF EXISTS `product_inf`;
CREATE TABLE `product_inf`(
	`product_id`   int(11) NOT NULL auto_increment,
	`product_name` char(20) NOT NULL,
	`product_model` char(20) NOT NULL UNIQUE, 
	`product_description` varchar(100),
	PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='';
