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
    user VARCHAR2,
    idTarea INTEGER,
    fecha DATE,

    PRIMARY KEY (idTarea, fecha)
    FOREIGN KEY user REFERENCES alumno (user),
    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
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
    idTarea PRIMARY KEY,

    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
);

CREATE TABLE solicita(

);

CREATE TABLE comedor(
    idTarea PRIMARY KEY,

    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
);

CREATE TABLE externas(
    idTarea PRIMARY KEY,
    ubicacion VARCHAR2,

    FOREIGN KEY idTarea REFERENCES tarea (idTarea)
);

CREATE TABLE menu(
    idMenu INTEGER PRIMARY KEY,
    primerPlato 
    segundoPlato
    postre
);

CREATE TABLE alergenos(
    tipo VARCHAR2 PRIMARY KEY
);

CREATE TABLE contiene(
    menu INTEGER,
    alergeno VARCHAR2,

    PRIMARY KEY (menu, alergeno),
    FOREIGN KEY (menu) REFERENCES menu(idMenu) 
    FOREIGN KEY (alergeno) REFERENCES alergenos (tipo)
);

CREATE TABLE alergia(
    alumno VARCHAR2,
    alergeno VARCHAR2,

    PRIMARY KEY (alumno, alergeno)

);

CREATE TABLE plato(
    idPlato INTEGER PRIMARY KEY,
    nombre VARCHAR2,
    descripcion TEXT
);

CREATE TABLE tiene(
    menu INTEGER,
    plato INTEGER,
    
    PRIMARY KEY (menu,plato),
    FOREIGN KEY (menu) REFERENCES menu(idMenu),
    FOREIGN KEY (plato) REFERENCES plato (idPlato)
);


