<?php
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
        $lectura = $lectura. "\nID: " . $row["idPrimero"]. " - Name: " . $row["nombre"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function leerPrimerPlato($idPlato){
    $conn = createConnection();
    $sql = "SELECT * FROM primerPlato WHERE idPrimero='".$idPlato."'";
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
        $lectura = $lectura. "\nID: " . $row["idPrimero"]. " - Name: " . $row["nombre"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function insertarSegundoPlato(){

}

function listaSegundoPlato(){
    $conn = createConnection();
    $sql = "SELECT * FROM segundoPlato";
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
        $lectura = $lectura. "\nID: " . $row["idSegundo"]. " - Name: " . $row["nombre"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function leerSegundoPlato($idPlato){
    $conn = createConnection();
    $sql = "SELECT * FROM segundoPlato WHERE idSegundo='".$idPlato."'";
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
        $lectura = $lectura. "\nID: " . $row["idSegundo"]. " - Name: " . $row["nombre"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function insertarPostrePlato(){

}

function listaPostre(){
    $conn = createConnection();
    $sql = "SELECT * FROM postre";
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
        $lectura = $lectura. "\nID: " . $row["idPostre"]. " - Name: " . $row["nombre"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;

}

function leerPostre($idPlato){
    $conn = createConnection();
    $sql = "SELECT * FROM postre WHERE idPostre='".$idPlato."'";
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
        $lectura = $lectura. "\nID: " . $row["idPostre"]. " - Name: " . $row["nombre"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
    
}

function insertarComanda(){

}

function listaComanda(){
    $conn = createConnection();
    $sql = "SELECT * FROM comanda";
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
        $lectura = $lectura. "\nID: " . $row["idComanda"]. " - Primero: " . $row["idPrimero"]. " - Segundo: " . $row["idSegundo"]. " - Postre: " . $row["idPostre"]. " - Usuario: " . $row["usuario"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function leerComanda(){
    
}





?>