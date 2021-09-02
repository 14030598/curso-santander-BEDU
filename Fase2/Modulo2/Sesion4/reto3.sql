--Creación de la base de datos en SQL para Adoptapet.

--Define la base de datos para AdoptaPet
--Define las tablas que representan las entidades de esta base de datos usando el modelo relacional del reto anterior.

/*id, username, nombre, apellido, email, password, tipo*/
CREATE DATABASE adoptapet;
USE adoptapet;

/* Usuarios */
CREATE TABLE usuarios(
    id int not null AUTO_INCREMENT,
    username varchar(20),
    nombre varchar(30),
    apellido varchar(30),
    email varchar(30),
    password varchar(40),
    tipo varchar(20),
    CONSTRAINT idusuariosPK PRIMARY KEY (id)
);

INSERT (username, nombre, apellido, email, password, tipo) INTO usuarios VALUES(
    "juancho", "Juan", "Garza", "juancho@gmail.com", MD5('123'), "normal"
);


/* Mascotas */
CREATE TABLE mascotas(
    id int not null AUTO_INCREMENT,
    nombre varchar(30),
    categoria varchar(20),
    fotos varchar(50),
    descripcion varchar(70),
    anunciante varchar(40),
    ubicacion varchar(40),
    CONSTRAINT idusuariosPK PRIMARY KEY (id)
);

/* Solicitudes (id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) */
CREATE TABLE solicitudes(
    id int not null AUTO_INCREMENT,
    mascota varchar(30),
    fechaDeCreacion date(20),
    idUsuarioAnunciante int not null AUTO_INCREMENT,
    idUsuarioSolicitante int not null AUTO_INCREMENT,
    estado varchar(40),
    CONSTRAINT idusuariosPK PRIMARY KEY (id),
    CONSTRAINT idUsuariosanuncianteFK FOREING KEY (idUsuarioAnunciante) REFERENCES usuarios (id),
    CONSTRAINT idusuariossolicitanteFK FOREING KEY (idUsuarioSolicitante) REFERENCES usuarios (id),
);