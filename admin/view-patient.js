import { getPatients } from "./firebase.js"

export const view_patient = document.querySelectorAll("#view-patient")
for (let i = 0; i < view_patient.length; i++) {
    view_patient[i].addEventListener("click", e => {
        e.preventDefault()

        view_patients()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}

const view_patients = () => {
    patientDetails.innerHTML = `
<section class="container p-md-5">
<div class="d-flex flex-wrap justify-content-center">

<div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
<div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
 <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
     <p class="text-secondary">Welcome back</p>
 </div>

</div>

   <div class="col patients">

   <ul class="prescription d-flex">
   <li>Patient name</li>
   <li>gender</li>
   <li>phone no.</li>
   <li>username</li>
  
   </ul>



  
   </div>

</section>
`

    getPatients("Patients")
}

export { view_patients}