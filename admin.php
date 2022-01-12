<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@600&display=swap" rel="stylesheet">

</head>

<body style="background-color: #FCECEF;">
    <nav class="top-nav d-block d-md-none navbar navbar-expand-lg " style="background-color: #333D7B;">

        <div class="container ">

            <a href="index.html" class="navbar-brand ">
                <header class="d-flex justify-content-between align-items-end ">

                    <div class="col-2"> <img class="img-fluid" src="images/Vector.png" alt=""></div>

                    <div>
                        <img class="img-fluid col-7" src="images/MedicPlus.png" alt="">
                    </div>

                </header>
            </a>

            <button class="navbar-toggler  mt-2" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ccc" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
            </button>

        
        </div>

    </nav>
    <nav class="side-navigation ">
        <a href="#" id="close-btn" class="fs-1 ms-2 h1 text-light d-block d-md-none">&times;</a>
        <header class="d-flex justify-content-center pt-4  flex-wrap">
            <div> <img src="images/Vector.png" alt=""></div>
            <div class="col-12 d-flex justify-content-center mt-3">
                <img src="images/MedicPlus.png" alt="">
            </div>
        </header>
        <ul class="navigate mt-5  p-3">

            <li class="my-3 " id="dashboard" style="font-size:15px">
                <a href="#"> <img src="images/dashboard.png" class="me-3" alt=""> dashboard</a>
            </li>
            <li class="my-3" style="font-size:15px" id="book-appointment">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">View Doctor</a>
            </li>
            <li class="my-3" id="appointment" style="font-size:15px">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">View Patient</a>
            </li>
            <li class="my-3" id="appointment" style="font-size:15px">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">Appointments</a>
            </li>
            <li class="my-3 " id="prescription" style="font-size:15px">
                <a href="#"> <img src="images/prescription.png" class="me-3" alt="">Prescription List</a>
            </li>
            <li class="my-3" style="font-size:15px" id="book-appointment">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">Add Doctor</a>
            </li>
            <li class="my-3" id="appointment" style="font-size:15px">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">Add Patient</a>
            </li>
            <li class="my-3" id="appointment" style="font-size:15px">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">Remove Doctor</a>
            </li>
            <li class="my-3" id="appointment" style="font-size:15px">
                <a href="#"> <img src="images/appointment.png" class="me-3" alt="">Queries</a>
            </li>

            <li class="ms-1-0" id="home" style="font-size:15px">
                <a href="index.html" class="d-flex">
                    <div> <i class="me-4 fs-2 bi bi-house-door-fill" alt=""></i></div>
                    <p class="mt-2">Home</p>
                </a>
            </li>

        </ul>
    </nav>

    <main id="patientDetails">


    </main>



</body>
</html>