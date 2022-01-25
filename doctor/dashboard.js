import { currentUser } from "../admin/firebase.js"
import { appointments } from "./appointment.js"
import { prescribe } from "./precriptions.js"

const dashboard = document.querySelectorAll("#dashboard")


for (let i = 0; i < dashboard.length; i++) {
    dashboard[i].addEventListener("click", e => {
        e.preventDefault()
        dashDisplay()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}

export const dashDisplay = () => {
    patientDetails.innerHTML = `
    <section class="container p-md-5">
                <div class="d-flex flex-wrap justify-content-center">
    
                    <div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
                      <div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
                        <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, <span id="helloName"></span></p>
                            <p class="text-secondary">Welcome back</p>
                        </div>
    
                    </div>
    
                    <div class="col-12 d-lg-flex  flex-wrap  mt-5  justify-content-between">
                      
    
                        <div class="col col-md-6 col-lg-3 m-auto m-lg-0 appt-card ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  font-size:24px">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold ">Appointments</p>
                                </div>
    
                            </div>
                            </div>
    
                        <div class="col col-md-6 col-lg-3 m-auto m-lg-0 prescribe-card">
                            <div class="card prescribe-card mt-4 mt-lg-0  m-auto m-lg-0" style="height: 250px; ">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/prescription-purple.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold " style="font-size:24px">Prescription</p>
                                </div>
    
                            </div>
                          </div>
    
                    </div>
                </div>
            </section>
    `
        // currentUser()

    const appt_card = document.querySelector(".appt-card")
    appt_card.addEventListener("click", e => {
        appointments()
    })

    const prescribe_card = document.querySelector(".prescribe-card")
    prescribe_card.addEventListener("click", e => {
        prescribe()
    })


}