<!--Nombre del archivo: tutoriales.php-->
<!--Fichero encargado de la gestión del almacenamiento de los tutoriales-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php
require 'connection.php';
function insertarTutorial($idTutorial, $tipo, $nombre, $recurso){
    $conn = createConnection();
    $sql = "INSERT INTO tutoriales
    VALUES ($idtutorial, '$tipo', '$nombre', '$recurso')";
    
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
    $conn = createConnection();
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
    return $lectura;
}

?>