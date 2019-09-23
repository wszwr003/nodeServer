DROP DATABASE IF EXISTS `product_db`;
CREATE DATABASE `product_db`;
USE `product_db`;
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`(
	`id`   int(11) NOT NULL auto_increment,
	`project` char(20) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='';

DROP DATABASE IF EXISTS `user_db`;
CREATE DATABASE `user_db`;
USE `user_db`;
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`(
	`id`   int(11) NOT NULL auto_increment,
	`project` char(20) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='';

DROP DATABASE IF EXISTS `data_db`;
CREATE DATABASE `data_db`;
USE `data_db`;
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`(
	`id`   int(11) NOT NULL auto_increment,
	`project` char(20) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='';