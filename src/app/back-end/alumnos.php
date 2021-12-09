<!--Nombre del archivo: alumnos.php-->
<!--Fichero encargado de definir las funciones relacionadas con los alumnos-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php
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

function borrarAlumno(){
    

}

function modificarAlumno(){
    

}

function listaAlumnos(){
    $conn = createConnection();
    $sql = "SELECT * FROM alumno";
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
        $lectura = $lectura. "\nUser: " . $row["user"]. " - Name: " . $row["nombre"]. " " . $row["apellidos"]. " Discapacidad: ". $row["discapacidad"];
    }
    } else {
    echo "0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;
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