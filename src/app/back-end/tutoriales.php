<?php
//Nombre del archivo: tutoriales.php
//Fichero encargado de la gestión del almacenamiento de los tutoriales
//Autor: Jesús López Rodríguez-->
//Se definen las funciones necesarias en php

Header('Access-Control-Allow-Origin: *');
Header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'connection.php';
function insertarTutorial($idTutorial, $tipo, $nombre, $recurso){
    $conn = createConnection();
    $sql = "INSERT INTO tutoriales
    VALUES ($idTutorial, '$tipo', '$nombre', '$recurso')";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
      //mysqli_commit($conn);
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  
}

function modificarTutorial(){

}

function eliminarTutorial(){
echo "aaaaaaaaaaaaaaaaaaaa";
}

function leerTutorial($idTutorial){
    $conn = createConnection();
    $sql = "SELECT * FROM tutoriales WHERE idTutorial='".$idTutorial."'";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
    // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $lectura = $lectura. "\nID: " . $row["idTutorial"]. " - Tipo: " . $row["tipo"]. " Nombre: ". $row["nombre"]. " Descripcion: ". $row["recurso"];
        }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function listaTutoriales(){
   /* $conn = createConnection();
    $sql = "SELECT * FROM tutoriales";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
    // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $lectura = $lectura. "\nID: " . $row["idTutorial"]. " - Tipo: " . $row["tipo"]. " Nombre: ". $row["nombre"];
        }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;*/
    $conn = createConnection();
    $sql = "SELECT * FROM tutoriales";
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
    echo listaTutoriales();
    break;
  case '2':
    $idTutorial = $_POST["idTutorial"];
    $tipo = utf8_decode($_POST["tipo"]);
    $nombre = utf8_decode($_POST["nombre"]);
    $recurso = utf8_decode($_POST["recurso"]);
    insertarTutorial($idTutorial, $tipo, $nombre, $recurso);
    break;  
}

?>