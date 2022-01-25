import { appointments } from "./appointments.js"
import { view_doctors } from "./view-doctor.js"
import { view_patients } from "./view-patient.js"
import { prescribeList } from "./prescription-list.js"
import { addDoctorForm } from "./add-doctor.js"

const dashboard = document.querySelectorAll("#dashboard")

for (let i = 0; i < dashboard.length; i++) {
    dashboard[i].addEventListener("click", e => {
        e.preventDefault()
        dashDisplay()
        console.log("hello")
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}
export const dashDisplay = () => {
    patientDetails.innerHTML = `
    <section class="container mt-5">
                <div class="d-flex flex-wrap justify-content-center">



                    <div class="col-12 d-lg-flex  flex-wrap  mt-5  justify-content-between">


                        <div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0 doctor-list ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  font-size:24px">    
                                <div class="card-body h4 d-flex flex-wrap">

                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

                                    <p class="align-self-end h4 fw-bold col-12 ">Doctor List</p>
                                </div>
                            
                            </div>
                        
                        </div>

                        <div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0 patient-list ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  font-size:24px">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

                                    <p class="align-self-end h4 fw-bold col-12 ">Patient List</p>
                                </div>

                            </div>
                            </div>

                        <div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0 appt-dets  ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  font-size:24px">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

                                  <p class="align-self-end h4 fw-bold col-12 ">Appointment Details</p>
                                </div>


                            </div>
                            </div>
<div class="d-lg-flex col-12 mt-lg-5 justify-content-center">
<div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0 pres-list ">
<div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  font-size:24px">
    <div class="card-body h4 d-flex flex-wrap">
        <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

        <p class="align-self-end h4 fw-bold col-12 ">Prescription List</p>
    </div>

</div>
</div>


<div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0 ">
<div class="card mt-4 mt-lg-0 m-auto manage-doc m-lg-0" style="height: 250px;  font-size:24px">
    <div class="card-body h4 d-flex flex-wrap">
        <div class="card-img col-12"><img src="../images/prescription-purple.png" alt=""></div>

        <p class="align-self-end h4 fw-bold col-12 ">Manage Doctor</p>
    </div>

</div>
</div>
</div>


                    </div>
                </div>
            </section>
    `

    const doctor_list = document.querySelector(".doctor-list")
    doctor_list.addEventListener("click", e => {
        view_doctors()
    })

    const patient_list = document.querySelector(".patient-list")
    patient_list.addEventListener("click", e => {
        view_patients()
    })

    const appt_dets = document.querySelector(".appt-dets")
    appt_dets.addEventListener("click", e => {
        appointments()
    })
    const prescribe_list = document.querySelector(".pres-list")
    prescribe_list.addEventListener("click", e => {
        prescribeList()
    })

    const manage_doctor = document.querySelector(".manage-doc")
    manage_doctor.addEventListener("click", e => {
        addDoctorForm()
    })

}