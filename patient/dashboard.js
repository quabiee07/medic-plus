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
                        <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
                            <p class="text-secondary">Welcome back</p>
                        </div>
    
                    </div>
    
                    <div class="col-12 d-lg-flex  flex-wrap  mt-5  justify-content-between">
                        <div class="m-auto col col-md-6 col-lg-4 pe-lg-3  m-lg-0  ">
                            <div class="card mt-4 mt-lg-0 m-auto text-light m-lg-0 " style="height: 250px;   background-color: #333D7B;font-size:24px">
    
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/book-appoinment.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold col-12 fs-5 ">Book Appointment</p>
                                </div>
    
                            </div>
                            <div class="text-center text-lg-start"> <a href="#" class=" text-center text-decoration-underline text-capitalize" style="color: #9CC2D5;">book-appointment</a></div>
                            </div>
    
                        <div class="col col-md-6 col-lg-4 px-lg-2  m-auto m-lg-0 ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  background-color: #333D7B;font-size:24px">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold col-12 fs-5  ">Appointments</p>
                                </div>
    
                            </div>
                            <div class="text-center text-lg-start"> <a href="#" class=" text-center text-decoration-underline text-capitalize" style="color: #9CC2D5;">appointment</a></div>
                            </div>
    
                        <div class="col col-md-6 col-lg-4 ps-lg-3  m-auto m-lg-0">
                            <div class="card mt-4 mt-lg-0  m-auto m-lg-0" style="height: 250px; ">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/prescription-purple.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold col-12 fs-5  " style="font-size:24px">Prescription</p>
                                </div>
    
                            </div>
                           <div class="text-center text-lg-start"> <a href="#" class=" text-center text-decoration-underline text-capitalize" style="color: #9CC2D5;">view prescription</a></div>
                        </div>
    
                    </div>
                </div>
            </section>
    `
}