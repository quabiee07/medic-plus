export const view_doctor = document.querySelectorAll("#view-doctor")
for (let i = 0; i < view_doctor.length; i++) {
    view_doctor[i].addEventListener("click", e => {
        e.preventDefault()

        view_doctors()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}

const view_doctors = () => {
    return patientDetails.innerHTML = `
<section class="container p-md-5">
<div class="d-flex flex-wrap justify-content-center">

<div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
<div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
 <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
     <p class="text-secondary">Welcome back</p>
 </div>

</div>

   <div class="col">

   <ul class="prescription d-flex">
   <li>doctor</li>
   <li>Specialization</li>
   <li>Username</li>
  
   </ul>

   <ul class="prescription d-flex">
   <li id="name">Jonas Dubbie</li>
   <li id='date'>Dentist</li>
   <li id="time">jonasdub</li>
   </ul>

   <ul class="prescription d-flex">
   <li id="name">Farma Damas</li>
   <li id='date'>pharmacist</li>
   <li id="time">fardam</li>
   </ul>

   <ul class="prescription d-flex">
   <li id="name">Greg Fibs</li>
   <li id='date'>surgeon</li>
   <li id="time">fibsGee</li>
   </ul>



  
   </div>

</section>
`
}