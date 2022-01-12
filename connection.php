<?php
$server ='localhost';
$username = 'ebuka';
$password = '123';
$database ='user_registration';

 session_start();

//connect to database
$con = mysqli_connect($server,$username,$password,$database) or die("Database connection Failed!");

?>