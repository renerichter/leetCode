/* create new datatype */
create type yes_no AS enum ('Y','N');

/* create table */
CREATE TABLE if NOT EXISTS Products(product_id INT, low_fats yes_no, recyclable yes_no);
INSERT INTO Products (product_id, low_fats, recyclable) values (0, 'Y', 'N');
INSERT INTO Products (product_id, low_fats, recyclable) values (1, 'Y', 'Y');
INSERT INTO Products (product_id, low_fats, recyclable) values (2, 'N', 'Y');
INSERT INTO Products (product_id, low_fats, recyclable) values (3, 'Y', 'Y');
INSERT INTO Products (product_id, low_fats, recyclable) values (4, 'N', 'N');

/* run query */
SELECT product_id from Products WHERE low_fats='Y' AND recyclable='Y';