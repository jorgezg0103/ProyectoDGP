<!--Nombre del archivo: profesores.php-->
<!--Fichero encargado de definir las funciones relacionadas con los profesores-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php
require 'connection.php';
function insertarProfesor(){

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
            $lectura = $lectura. "\nUser: " . $row["usuario"]. " - Name: " . $row["nombre"]. " " . $row["apellidos"]. " DNI: ". $row["dni"]. "Email: ". $row["email"];
        }
    } else {
        echo "\n0 results";
    }

    closeConnection($conn);
    echo $salida;
    return $lectura;

}

function leerProfesor($user){

}

?>