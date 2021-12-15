<?php
//Nombre del archivo: profesores.php
//Fichero encargado de definir las funciones relacionadas con los profesores
//Autor: Jesús López Rodríguez
//Se definen las funciones necesarias en php
Header('Access-Control-Allow-Origin: *');
Header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'connection.php';
function insertarProfesor($usuario, $dni, $nombre, $apellidos, $email){
    $conn = createConnection();
    $sql = "INSERT INTO profesor VALUES ('$usuario', '$dni', '$nombre', '$apellidos', '$email')";
    $mensaje = "";

    if (mysqli_query($conn, $sql)) {
      $mensaje = "New record created successfully";
      //echo $mensaje;
      $mensaje = json_encode($mensaje, JSON_NUMERIC_CHECK);
      //mysqli_commit($conn);
    } else {
      $mensaje = "Error: " . $sql . "<br>" . mysqli_error($conn);
      echo $mensaje;
      $mensaje = json_encode($mensaje, JSON_NUMERIC_CHECK);
      //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  /**/

    return $mensaje;
    
}

function borrarProfesor(){

}

function modificarProfesor(){
    
}

function listaProfesores(){
    $conn = createConnection();
    $sql = "SELECT * FROM profesor";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";

    if (mysqli_num_rows($result) > 0) {
    $array = array();
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array_map('utf8_encode', $row);
        //$lectura = $lectura. "\nID: " . $row["idTutorial"]. " - Tipo: " . $row["tipo"]. " Nombre: ". $row["nombre"]. " Descripcion: ". $row["recurso"];
    }
    $lectura = json_encode($array, JSON_NUMERIC_CHECK);
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;

}

function leerProfesor($user){

}

$opcion = $_GET["opcion"];

switch ($opcion) {
  case '1':
    echo listaProfesores();
    break;
case '2':
    $usuario = utf8_decode($_GET["usuario"]);
    $dni = utf8_decode($_GET["dni"]);
    $nombre = utf8_decode($_GET["nombre"]);
    $apellidos = utf8_decode($_GET["apellidos"]);
    $email = utf8_decode($_GET["email"]);
    insertarProfesor($usuario, $dni, $nombre, $apellidos, $email);
    break;
}

?>