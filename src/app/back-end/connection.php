<!--Nombre del archivo: connection.php-->
<!--Fichero encargado de comprobar la conexion con la BD-->
<!--Autor: Jesús López Rodríguez-->
<!--Se definen las funciones necesarias en php-->
<!--<html>
   <head>
      <title>Connecting MySQL Server</title>
   </head>
   <body>
      <?php
         /*
         $dbhost = 'remotemysql.com:3306';
         $dbuser = 'AVzOphS8yY';
         $dbpass = 'BJojxLnXQN';
         $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
         
        
         if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
         }
         echo 'Connected successfully';
         mysqli_close($conn);
         */

         
         function createConnection(){
            $dbhost = 'remotemysql.com:3306';
            $dbuser = 'AVzOphS8yY';
            $dbpass = 'BJojxLnXQN';
            $dbname = 'AVzOphS8yY';
            $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
            //mysqli_autocommit($conn, FALSE);
                  
            if (!$conn) {
               die("Connection failed: " . mysqli_connect_error());
            }
            else {
               return $conn;
            }
         }

         function createConnectionPruebas(){
            $dbhost = 'remotemysql.com:3306';
            $dbuser = 'pHHWLMHc4L';
            $dbpass = 'gRGT6SwYzX';
            $dbname = 'pHHWLMHc4L';
            $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                  
            if (!$conn) {
               die("Connection failed: " . mysqli_connect_error());
            }
            else {
               return $conn;
            }
         }

         function closeConnection($conn){
            mysqli_close($conn);
         }
      ?>
   </body>
</html>-->