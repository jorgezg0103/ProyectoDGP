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