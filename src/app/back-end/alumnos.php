<?php
//Nombre del archivo: alumnos.php
//Fichero encargado de definir las funciones relacionadas con los alumnos
//Autor: Jesús López Rodríguez
//Se definen las funciones necesarias en php

Header('Access-Control-Allow-Origin: *');

require 'connection.php'; // Tener cuidado, puede que sea sin .php 
//require 'connection';
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

function borrarAlumno($usuario){
    

}

function modificarAlumno($usuario, $nombre, $apellidos, $discapacidad){
    

}

function listaAlumnos(){
    $conn = createConnection();
    $sql = "SELECT * FROM alumno";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    /*if (mysqli_query($conn, $sql)){
        echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        echo "Dentro else";
        $salida = "Error al insertar";
    }*/

    if (mysqli_num_rows($result) > 0) {
    $array = array();
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array_map('utf8_encode', $row);
        //$lectura = $lectura. "\nUser: " . $row["usuario"]. " - Name: " . $row["nombre"]. " " . $row["apellidos"]. " Discapacidad: ". $row["discapacidad"];
    }
    $lectura = json_encode($array, JSON_NUMERIC_CHECK);
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function leerAlumno($usuario){
    $conn = createConnection();
    $sql = "SELECT * FROM alumno WHERE usuario='$usuario'";
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

$opcion = $_GET["opcion"];

switch ($opcion) {
  case '1':
    echo listaAlumnos();
    break;
}

?>
