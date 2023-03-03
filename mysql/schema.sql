create database category

CREATE TABLE category (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  slug varchar(255) DEFAULT NULL,
  imageUrl varchar(200) DEFAULT NULL,
  description text DEFAULT NULL,
  productCount int(10) unsigned DEFAULT 0,
  createdDate datetime DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY slug (slug)
)
create database product
CREATE TABLE product (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  price double(10,2) DEFAULT NULL,
  slug varchar(255) DEFAULT NULL,
  imageUrl varchar(200) DEFAULT NULL,
  description text DEFAULT NULL,
  productCount int(10) unsigned DEFAULT 0,
  createdDate datetime DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY slug (slug)
)