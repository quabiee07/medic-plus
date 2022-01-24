// import { getAllPatientDetails } from "./firebase.js"
import { getAllpatients } from "../patient/patient.js"
// import { appointments as patientAppt } from "./firebase.js"
export const appointment = document.querySelectorAll("#appointment-details")
for (let i = 0; i < appointment.length; i++) {
    appointment[i].addEventListener("click", e => {
        e.preventDefault()

        appointments()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}

const appointments = () => {
    patientDetails.innerHTML = `
<section class="container p-md-5">
<div class="d-flex flex-wrap justify-content-center">

<div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
<div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
 <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, Administrator</p>
     <p class="text-secondary">Welcome back</p>
 </div>

</div>

   <div class="col patients">

   <ul class="prescription d-flex">
   <li>patient</li>
   <li>doctor</li>
   <li>date</li>
   <li>time</li>
   <li>status</li>

   </ul>





   </div>

</section>
`
    const patients = document.querySelector(".patients")

    getAllpatients()
        .then(data => {
            patients.innerHTML += data.map(patient => `
                    <ul class="prescription d-flex">
                    <li>${patient.patientName}</li>
                    <li>${patient.doctor}</li>
                    <li>${patient.apptDate}</li>
                    <li>${patient.apptTime}</li>
                    <li>active</li>

                </ul>
                `)
        })

    // getAllPatientDetails()
}