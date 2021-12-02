<!--Nombre del archivo: BD.php-->
<!--Fichero encargado de definir las funciones relacionadas con la creacion y borrado de las tablas en la BD-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php
require 'connection.php';
function createBD(){
    $myfile = fopen("BD_funcionalidad.sql", "r") or die("Unable to open file!");
    $output = fread($myfile,filesize("BD.sql"));
    fclose($myfile);
    return $output;
}

function dropBD(){
    $myfile = fopen("DROP_BD_funcionalidad.sql", "r") or die("Unable to open file!");
    $output = fread($myfile,filesize("DROP.sql"));
    fclose($myfile);
    return $output;
}
?> 

<!--$query = file_get_contents ('queries.sql');

if ($conn->query($query) === TRUE) {
    echo "all tables created successfully <br/>";
} else {
    echo "Error creating tables: " . $conn->error;
}-->