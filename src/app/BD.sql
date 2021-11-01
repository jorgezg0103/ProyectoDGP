CREATE TABLE totr_legal(
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
    dni VARCHAR2(10) PRIMARY KEY,
    nombre VARCHAR2(20),
    apellidos VARCHAR2(40),
    telefono VARCHAR2(13),
    discapacidad VARCHAR2 (20)
);

CREATE TABLE admin (
    
);
