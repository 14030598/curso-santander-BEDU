--Creación de la base de datos en SQL para Adoptapet.

--Define la base de datos para AdoptaPet
--Define las tablas que representan las entidades de esta base de datos usando el modelo relacional del reto anterior.

/*id, username, nombre, apellido, email, password, tipo*/
CREATE DATABASE adoptapet;
USE adoptapet;

/* Usuarios */
CREATE TABLE usuarios(
    id int not null AUTOINCREMENT,
    username varchar(20),
    nombre varchar(30),
    apellido varchar(30),
    email varchar(30),
    password varchar(40),
    tipo varchar(20)
);

INSERT (username, nombre, apellido, email, password, tipo) INTO usuarios VALUES(
    "juancho", "Juan", "Garza", "juancho@gmail.com", MD5('123'), "normal"
);


/* Mascotas */
/* Solicitudes */