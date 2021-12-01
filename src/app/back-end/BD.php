<!--Nombre del archivo: BD.php-->
<!--Fichero encargado de definir las funciones relacionadas con la creacion y borrado de las tablas en la BD-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->

<?php
function createBD(){
    $myfile = fopen("BD.sql", "r") or die("Unable to open file!");
    $output = fread($myfile,filesize("BD.sql"));
    fclose($myfile);
    return $output;
}

function dropBD(){
    $myfile = fopen("DROP.sql", "r") or die("Unable to open file!");
    $output = fread($myfile,filesize("DROP.sql"));
    fclose($myfile);
    return $output;
}
?> 