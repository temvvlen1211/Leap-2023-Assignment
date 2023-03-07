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
create table todoCategory(  
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY key (id));

create table todo(
  id int unsigned AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  isDone boolean DEFAULT 0 ,
  todoCategoryId int unsigned,
  PRIMARY key (id),
  foreign key (todoCategoryId) references todoCategory(id)
  );
  insert into todoCategory values(null,'just do ');


  insert into todo values(null,'kakakaka',0,1)


  -- mydatabases user 


  CREATE TABLE user(  
    userId VARCHAR(255) NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    birthDate DATE,
    email varchar(255) UNIQUE,
    emailConfirmed boolean DEFAULT false,
    phone INT UNIQUE NOT NULL,
    phoneConfirmed boolean DEFAULT false,
    password VARCHAR(255) NOT NULL,
    imageUrl varchar(1000),
    isAdmin boolean DEFAULT false,
    created VARCHAR(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,
    PRIMARY KEY(userId),
    FOREIGN KEY(created) REFERENCES user(userId) ON UPDATE CASCADE,
    FOREIGN KEY(updated) REFERENCES user(userId) ON UPDATE CASCADE
);

-- mydatabases product

CREATE TABLE product(  
    productId VARCHAR(255),
    categoryId INT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    imageUrl VARCHAR(1000),
    text TEXT,
    price INT,
    discountPrice INT,
    remaining INT DEFAULT 0,
    readCount INT DEFAULT 0,
    rating DECIMAL(2,1),
    created VARCHAR(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,   
    PRIMARY KEY(productId, categoryId),
);

-- mydatabases category 
CREATE TABLE category (  
    categoryId VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    productCount INT DEFAULT 0,
    parent_id VARCHAR(255),
    created varchar(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,
    PRIMARY KEY(categoryId)
);