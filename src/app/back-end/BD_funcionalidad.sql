--Nombre de archivo: BD_funcionalidad.sql
--Fichero encargado de crear las tablas de la base de datos relativas a la funcionalidad a implementar
--Autor: Jesús López Rodríguez
--Define el scrip sql encargado de crear las tablas pertinentes

CREATE TABLE alumno(
    usuario VARCHAR2(20) PRIMARY KEY,
    nombre VARCHAR2(20),
    apellidos VARCHAR2(40),
    discapacidad VARCHAR2 (20)
);

CREATE TABLE profesor (
    usuario VARCHAR2(20) PRIMARY KEY,
    dni VARCHAR2(10),
    nombre VARCHAR2(20),
    apellidos VARCHAR2(40),
    email VARCHAR2
);



CREATE TABLE tarea (
    idTarea INTEGER PRIMARY KEY,
    descripcion TEXT,
);

CREATE TABLE responsable(
    usuario VARCHAR2,
    idTarea INTEGER,
    fecha DATE,

    PRIMARY KEY (idTarea, fecha)
    FOREIGN KEY usuario REFERENCES alumno (usuario),
    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
);

CREATE TABLE tutoriales (
    idTutorial INTEGER PRIMARY KEY,
    tipo VARCHAR2,
    nombre VARCHAR2,
    recurso TEXT
);

CREATE TABLE explica (
    idTarea INTEGER PRIMARY KEY,
    idTutorial INTEGER PRIMARY KEY,

    PRIMARY KEY (idTarea, idTutorial)
);
