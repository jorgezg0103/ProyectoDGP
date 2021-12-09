--Nombre de archivo: BD_funcionalidad.sql
--Fichero encargado de crear las tablas de la base de datos relativas a la funcionalidad a implementar
--Autor: Jesús López Rodríguez
--Define el scrip sql encargado de crear las tablas pertinentes

CREATE TABLE alumno(
    usuario VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(20),
    apellidos VARCHAR(40),
    discapacidad VARCHAR (20)
);

CREATE TABLE profesor (
    usuario VARCHAR(20) PRIMARY KEY,
    dni VARCHAR(10),
    nombre VARCHAR(20),
    apellidos VARCHAR(40),
    email VARCHAR (40)
);


CREATE TABLE tarea (
    idTarea INTEGER PRIMARY KEY,
    descripcion TEXT,
);

CREATE TABLE responsable(
    usuario VARCHAR (20),
    idTarea INTEGER,
    fecha DATE,

    PRIMARY KEY (idTarea, fecha)
    FOREIGN KEY usuario REFERENCES alumno (usuario),
    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
);

CREATE TABLE tutoriales (
    idTutorial INTEGER PRIMARY KEY,
    tipo VARCHAR (20),
    nombre VARCHAR(20),
    recurso TEXT
);

CREATE TABLE explica (
    idTarea INTEGER,
    idTutorial INTEGER,

    PRIMARY KEY (idTarea, idTutorial),
    FOREIGN KEY idTarea REFERENCES  tarea(idTarea),
    FOREIGN KEY idTutorial REFERENCES tutoriales(idTutorial)
);


CREATE TABLE primerPlato(
    idPrimero INTEGER PRIMARY KEY,
    nombre VARCHAR (20)
);

CREATE TABLE segundoPlato(
    idSegundo INTEGER PRIMARY KEY,
    nombre VARCHAR (20)
);

CREATE TABLE postre(
    idPostre INTEGER PRIMARY KEY,
    nombre VARCHAR (20)
);



CREATE TABLE comanda(
    usuario VARCHAR (20),
    primero INTEGER,
    segundo INTEGER,
    postre INTEGER,
    idComanda INTEGER AUTO_INCREMENT,
    PRIMARY KEY (idComanda),
    FOREIGN KEY usuario REFERENCES alumno(usuario),
    FOREIGN KEY primero REFERENCES primerPlato(idPrimero),
    FOREIGN KEY segundo REFERENCES segundoPlato(idSegundo),
    FOREIGN KEY postre REFERENCES postre(idPostre)
);