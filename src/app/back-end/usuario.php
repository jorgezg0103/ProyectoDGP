<!--Nombre del archivo: usuario.php-->
<!--Fichero encargado de definir las funciones relacionadas con los usuarios-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php

function insertarUsuario($user, $password){
    require 'connection.php';
    $conn = createConnection();
    $sql = "INSERT INTO usuario VALUES ('$user', '$password')"
    $salida
    if ($conn->execute($sql)){
        $salida = "Insertado con exito";
    }
    else {
        $salida = "Error al insertar";
    }

    closeConnection($conn);
    return $salida
}

function eliminarUsuario($user){
    require 'connection.php';
    $conn = createConnection();
    $sql = "DELETE FROM usuario WHERE user='$user'"
    $salida
    if ($conn->execute($sql)){
        $salida = "Borrado con exito";
    }
    else {
        $salida = "Error al borrar";
    }

    closeConnection($conn);
    return $salida

}

function modificarUsuario(){
    //Revisar
    require 'connection.php';
    $conn = createConnection();
    $sql = "UPDATE INTO usuario VALUES ('$user', '$password')"
    $salida
    if ($conn->execute($sql)){
        $salida = "Insertado con exito";
    }
    else {
        $salida = "Error al insertar";
    }

    closeConnection($conn);
    return $salida
}


?>