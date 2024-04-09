CREATE DATABASE bdproductos;

USE bdproductos;

CREATE TABLE producto (
    codigo int (11) NOT NULL AUTO_INCREMENT,
    nombre varchar (120) DEFAULT NULL,
    precio decimal (6,2) DEFAULT NULL,
    PRIMARY KEY (codigo)
);

INSERT INTO producto VALUES (1, 'aceite', 1800.78);
INSERT INTO producto VALUES (2, 'pasta', 3570.52);