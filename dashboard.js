const dashboard = document.querySelectorAll("#dashboard")


for (let i = 0; i < dashboard.length; i++) {
    dashboard[i].addEventListener("click", e => {
        e.preventDefault()
        dashDisplay()
        sideNav.style.width = "0px"
        main.style.marginLeft = "0px"
    })
}

const dashDisplay = () => {
    patientDetails.innerHTML = `
    <section class="container p-md-5">
                <div class="d-flex flex-wrap justify-content-center">
    
                    <div style="overflow-x:hidden " class="col-12 d-flex align-items-center p-2 bg-light mt-5">
                        <img src="images/Account.png" alt="">
                        <div> <span class="fw-bold h4">Hello, William Kpenkelemense</span>
                            <p class="text-secondary">Welcome back</p>
                        </div>
    
                    </div>
    
                    <div class="col-12 d-lg-flex  flex-wrap  mt-5  justify-content-between">
                        <div class="m-auto col col-md-6 col-lg-3 m-lg-0  text-center text-lg-start">
                            <div class="card mt-4 mt-lg-0 m-auto text-light m-lg-0 text-light" style="height: 250px;   background-color: #333D7B;">
    
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="images/book-appoinment.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold">Book Appointment</p>
                                </div>
    
                            </div>
                            <a href="" class="text-decoration-underline text-capitalize" style="color: #9CC2D5;">book appointment</a>
                        </div>
    
                        <div class="col col-md-6 col-lg-3 m-auto m-lg-0  text-center text-lg-start">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  background-color: #333D7B;">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="images/appointment.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold">Appointments</p>
                                </div>
    
                            </div>
                            <a href="#" class=" text-decoration-underline text-capitalize" style="color: #9CC2D5;">appointment history</a>
                        </div>
    
                        <div class="col col-md-6 col-lg-3 m-auto m-lg-0 text-center text-lg-start">
                            <div class="card mt-4 mt-lg-0  m-auto m-lg-0" style="height: 250px; ">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="images/prescription-purple.png" alt=""></div>
    
                                    <p class="align-self-end h4 fw-bold">Prescription</p>
                                </div>
    
                            </div>
                            <a href="#" class="text-decoration-underline text-capitalize" style="color: #9CC2D5;">view prescription</a>
                        </div>
    
                    </div>
                </div>
            </section>
    `
}