--Nombre de archivo: BD_funcionalidad.sql
--Fichero encargado de crear las tablas de la base de datos relativas a la funcionalidad a implementar
--Autor: Jesús López Rodríguez
--Define el scrip sql encargado de crear las tablas pertinentes

CREATE TABLE alumno(
<<<<<<< HEAD
    user VARCHAR(20) PRIMARY KEY,
=======
    usuario VARCHAR(20) PRIMARY KEY,
>>>>>>> d11070802911755824508b94e11df7daf6a9c567
    nombre VARCHAR(20),
    apellidos VARCHAR(40),
    discapacidad VARCHAR (20)
);

CREATE TABLE profesor (
<<<<<<< HEAD
    user VARCHAR(20) PRIMARY KEY,
=======
    usuario VARCHAR(20) PRIMARY KEY,
>>>>>>> d11070802911755824508b94e11df7daf6a9c567
    dni VARCHAR(10),
    nombre VARCHAR(20),
    apellidos VARCHAR(40),
    email VARCHAR
);


CREATE TABLE tarea (
    idTarea INTEGER PRIMARY KEY,
    descripcion TEXT,
);

CREATE TABLE responsable(
<<<<<<< HEAD
    user VARCHAR (20),
=======
    usuario VARCHAR (20),
>>>>>>> d11070802911755824508b94e11df7daf6a9c567
    idTarea INTEGER,
    fecha DATE,

    PRIMARY KEY (idTarea, fecha)
    FOREIGN KEY usuario REFERENCES alumno (usuario),
    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
);

CREATE TABLE tutoriales (
    idTutorial INTEGER PRIMARY KEY,
    tipo VARCHAR (20),
<<<<<<< HEAD
=======
    nombre VARCHAR(20),
>>>>>>> d11070802911755824508b94e11df7daf6a9c567
    recurso TEXT
);

CREATE TABLE explica (
    idTarea INTEGER,
    idTutorial INTEGER,

    PRIMARY KEY (idTarea, idTutorial),
    FOREIGN KEY idTarea REFERENCES  tarea(idTarea),
    FOREIGN KEY idTutorial REFERENCES tutoriales(idTutorial)

<<<<<<< HEAD
    PRIMARY KEY (idTarea, idTutorial),
    FOREIGN KEY idTarea REFERENCES  tarea(idTarea),
    FOREIGN KEY idTutorial REFERENCES tutoriales(idTutorial)

=======
>>>>>>> d11070802911755824508b94e11df7daf6a9c567
);
