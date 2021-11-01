CREATE TABLE tutor_legal(
    dni VARCHAR2(10) PRIMARY KEY,
    nombre VARCHAR2(20),
    apellidos VARCHAR2(40),
    telefono VARCHAR2(13),
    contactado ???
);

CREATE TABLE usuario (
    user VARCHAR2(20) PRIMARY KEY,
    pass VARCHAR2(10)    
);

CREATE TABLE alumno(
    user VARCHAR2(20) PRIMARY KEY,
    dni VARCHAR2(10),
    nombre VARCHAR2(20),
    apellidos VARCHAR2(40),
    telefono VARCHAR2(13),
    discapacidad VARCHAR2 (20)
    tutor_legal VARCHAR2(10) FOREIGN KEY REFERENCES tutor_legal(dni)
    pro_tutor VARCHAR2(20) FOREIGN KEY REFERENCES profesor(user)

    FOREIGN KEY (user) REFERENCES usuario(user)
);

CREATE TABLE admin (
    user VARCHAR2(20) PRIMARY KEY,

    FOREIGN KEY (user) REFERENCES usuario(user)
);

CREATE TABLE profesor (
    user VARCHAR2(20) PRIMARY KEY,
    dni VARCHAR2(10),
    nombre VARCHAR2(20),
    apellidos VARCHAR2(40),
    telefono VARCHAR2(13),
    email VARCHAR2,

    FOREIGN KEY (user) REFERENCES usuario(user)
);

CREATE TABLE tarea (
    idTarea INTEGER PRIMARY KEY,
    descripcion TEXT,
);

CREATE TABLE responsable(

);

CREATE TABLE tutoriales (
    idTutorial INTEGER PRIMARY KEY,
    tipo VARCHAR2,
    recurso VARCHAR2
);

CREATE TABLE explica (
    idTarea INTEGER PRIMARY KEY,
    idTutorial INTEGER PRIMARY KEY,

    PRIMARY KEY (idTarea, idTutorial)
);

CREATE TABLE inventario(

);

CREATE TABLE solicita(

);

CREATE TABLE comedor(

);

CREATE TABLE externas(

);

CREATE TABLE menu(

);

CREATE TABLE alergenos(

);

CREATE TABLE contiene(

);

CREATE TABLE alergia(

);

CREATE TABLE plato(

);

CREATE TABLE tiene(

);


