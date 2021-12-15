<?php
//Nombre del archivo: comandas.php
//Fichero encargado de la gestión del almacenamiento de las comandas
//Autor: Jesús López Rodríguez
//Se definen las funciones necesarias en php

Header('Access-Control-Allow-Origin: *');
require 'connection.php';

function insertarPrimerPlato(){

}

function listaPrimerPlato(){
    $conn = createConnection();
    $sql = "SELECT * FROM primerPlato";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        // echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        // echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
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
    // echo $salida;
    return $lectura;
}

function leerPrimerPlato($idPlato){
    $conn = createConnection();
    $sql = "SELECT * FROM primerPlato WHERE idPrimero='".$idPlato."'";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        // echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        // echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
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
    // echo $salida;
    return $lectura;
}

function insertarSegundoPlato($nombre,$idImagen){
  // $conn = createConnection();
  // $sql = "INSERT INTO segundoPlato VALUES ('$id', '$nombre')";
  //
  // if (mysqli_query($conn, $sql)) {
  //   //echo "New record created successfully";
  //   mysqli_commit($conn);
  // } else {
  //   echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  // }
  // closeConnection($conn);
}

function listaSegundoPlato(){
    $conn = createConnection();
    $sql = "SELECT * FROM segundoPlato";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        // echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        // echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
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
    // echo $salida;
    return $lectura;
}

function leerSegundoPlato($idPlato){
    $conn = createConnection();
    $sql = "SELECT * FROM segundoPlato WHERE idSegundo='".$idPlato."'";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        // echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        // echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
        $array = array();
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $array[] = array_map('utf8_encode', $row);
            //$lectura = $lectura. "\nUser: " . $row["usuario"]. " - Name: " . $row["nombre"]. " " . $row["apellidos"]. " Discapacidad: ". $row["discapacidad"];
        }
        $lectura = json_encode($array, JSON_NUMERIC_CHECK);
    } else {
    // echo "0 results";
    }

    closeConnection($conn);
    // echo $salida;
    return $lectura;
}

function insertarPostre(){

}

function listaPostre(){
    $conn = createConnection();
    $sql = "SELECT * FROM postre";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        //echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        //echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
    // output data of each row
      $array = array();
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
          $array[] = array_map('utf8_encode', $row);
          //$lectura = $lectura. "\nUser: " . $row["usuario"]. " - Name: " . $row["nombre"]. " " . $row["apellidos"]. " Discapacidad: ". $row["discapacidad"];
      }
      $lectura = json_encode($array, JSON_NUMERIC_CHECK);
    } else {
    //echo "0 results";
    }

    closeConnection($conn);
    // $lectura = json_encode($lectura, JSON_NUMERIC_CHECK);
    //echo $salida;
    return $lectura;

}

function leerPostre($idPlato){
    $conn = createConnection();
    $sql = "SELECT * FROM postre WHERE idPostre='".$idPlato."'";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        // echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        // echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
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
    // echo $salida;
    return $lectura;

}

function insertarComanda($primero, $segundo, $postre, $alumno){
    $conn = createConnection();
    $sql = "INSERT INTO comanda (usuario,primero, segundo, postre)
    VALUES ('$alumno',$primero, $segundo, $postre)";

    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
      mysqli_commit($conn);
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    closeConnection($conn);

}

function listaComanda(){
    $conn = createConnection();
    $sql = "SELECT * FROM comanda";
    $salida = "";
    $result = mysqli_query($conn, $sql);
    $lectura = "";
    if (mysqli_query($conn, $sql)){
        // echo "\nDentro if";
        $salida = "\nLeido con exito";
    }
    else {
        // echo "Dentro else";
        $salida = "Error al insertar";
    }

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
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
    // echo $salida;
    return $lectura;
}

function leerComanda($conn,$idComanda){
    //$conn = createConnection();
    $sql = "SELECT * FROM comanda WHERE idComanda='".$idComanda."'";
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
        $lectura = $lectura. "\nID: " . $row["idComanda"]. " - Primero: " . $row["primero"]. " - Segundo: " . $row["segundo"]. " - Postre: " . $row["postre"]. " - Usuario: " . $row["usuario"];
    }
    } else {
    echo "0 results";
    }

    //closeConnection($conn);
    echo $salida;
    return $lectura;
}

$opcion = $_GET["opcion"];

switch ($opcion) {
  case '0':
    $primero = $_GET["primero"];
    $segundo = $_GET["segundo"];
    $postre = $_GET["postre"];
    $alumno = utf8_decode($_GET["alumno"]);

    insertarComanda($primero,$segundo,$postre,$alumno);
    break;
  case '1':
    echo listaPrimerPlato();
  break;
  case '2':
    echo listaSegundoPlato();
  break;
  case '3':
    echo listaPostre();
    break;
  case '4':
    echo listaComanda();
    break;
  case '5':
    $primero=$_GET["idprimero"];
    echo leerPrimerPlato($primero);
    break;
  case '6':
    $segundo=$_GET["idsegundo"];
    echo leerSegundoPlato($segundo);
    break;
  case '7':
    $postre=$_GET["idpostre"];
    echo leerPostre($postre);
    break;
}

?>
