<?php
require 'connection.php';
function insertarImagen($idImagen, $titulo){
    $conn = createConnection();
    $sql = "INSERT INTO images
    VALUES ($idImagen, '$titulo')";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
      //mysqli_commit($conn);
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  
}

function leerListaImagenes(){
    $conn = createConnection();
    $sql = "SELECT * FROM images";
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
        $lectura = $lectura. "\nID: " . $row["idImage"]. " - Name: " . $row["titulo"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

function leerImagen($titulo){
    $conn = createConnection();
    $sql = "SELECT * FROM images WHERE titulo='$titulo'";
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
        $lectura = $lectura. "\nID: " . $row["idImage"]. " - Name: " . $row["titulo"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
}

?>