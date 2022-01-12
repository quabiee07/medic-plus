<?php
include "connection.php";

if (isset($_POST['btn-registration'])){
    $name = mysqli_real_escape_string($con, $_POST['user']);
    $password = mysqli_real_escape_string($con,$_POST['password']);
    $cPassword = mysqli_real_escape_string($con,$_POST['cpassword']);

    if(empty($name) || empty($password) || empty($cPassword) ){  
        echo "Fill in the Blanks!";
    } else if($password != $cPassword){
        echo "Password not Matched!";
    } else {

        $pass = md5($password);
        $sql = "INSERT INTO `usertable`(`user`,`passsword`) VALUES ('$name','$password')";
        $result = mysqli_query($con, $sql);
       
        if($result){
            echo "Registration Successful";
        } elseif(!$result){
            echo "Check Query";
        }

    }
}



?>