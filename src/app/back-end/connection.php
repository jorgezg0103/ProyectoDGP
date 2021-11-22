<html>
   <head>
      <title>Connecting MySQL Server</title>
   </head>
   <body>
      <?php
         $dbhost = 'remotemysql.com:3306';
         $dbuser = 'helloworlddgp@gmail.com';
         $dbpass = 'dgphelloworld';
         $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
         
        
        if (!$conn) {
          die("Connection failed: " . mysqli_connect_error());
        }
         echo 'Connected successfully';
         mysqli_close($conn);
      ?>
   </body>
</html>