<!--Nombre del archivo: alumnos.php-->
<!--Fichero encargado de definir las funciones relacionadas con los alumnos-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php
require 'connection.php';
function insertarAlumno($usuario, $nombre, $apellidos, $discapacidad){
    
    $conn = createConnection();
    $sql = "INSERT INTO alumno VALUES ('$usuario', '$nombre','$apellidos', '$discapacidad')";
    $salida = "";
    if (mysqli_query($conn, $sql)){
        $salida = "Insertado con exito";
    }
    else {
        $salida = "Error al insertar";
    }

    closeConnection($conn);
    return $salida;
}

function borrarAlumno(){
    

}

function modificarAlumno(){
    

}

function listaAlumnos(){
    $conn = createConnection();
    $sql = "SELECT * FROM alumno";
    $salida = "";
    if (mysqli_query($conn, $sql)){
        $salida = "Insertado con exito";
    }
    else {
        $salida = "Error al insertar";
    }

    closeConnection($conn);
    return $salida;
}

function leerAlumno($usuario){
    $conn = createConnection();
    $sql = "SELECT * FROM alumno WHERE user='$usuario'";
    $salida = "";
    if (mysqli_query($conn, $sql)){
        $salida = "Insertado con exito";
    }
    else {
        $salida = "Error al insertar";
    }

    closeConnection($conn);
    return $salida;
}

?>