<?php
//Nombre del archivo: tareas.php
//Fichero encargado de las funciones relativas a las tareas y su interaccion con la BD
//Autor: Jesús López Rodríguez
//Se definen las funciones necesarias en php

Header('Access-Control-Allow-Origin: *');

require 'connection.php';
function insertarTarea($idTarea, $descripcion){
    $conn = createConnection();
    $sql = "INSERT INTO tarea VALUES ($idTarea, $descripcion)";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
      mysqli_commit($conn);
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  
    closeConnection($conn);
}

function modificarTarea(){

}

function eliminarTarea(){

}

function leerTarea($idTarea){
    $conn = createConnection();
    $sql = "SELECT * FROM tarea WHERE idTarea=$idTarea";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";

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

function asignarTarea($idTarea, $idResponsable, $fecha){
    $conn = createConnection();
    $sql = "INSERT INTO responsable VALUES ($idResponsable, $idTarea, $fecha)";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
      mysqli_commit($conn);
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  
    closeConnection($conn);
}

function listaTareas(){
    $conn = createConnection();
    $sql = "SELECT * FROM tarea";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";

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

$opcion = $_GET["opcion"];

switch ($opcion) {
  case '1':
    echo listaTareas();
    break;
}

?>