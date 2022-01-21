export const dashboard = document.querySelectorAll("#dashboard")


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
    <section class="container mt-5">
                <div class="d-flex flex-wrap justify-content-center">



                    <div class="col-12 d-lg-flex  flex-wrap  mt-5  justify-content-between">


                        <div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0  ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  background-color: #333D7B;font-size:24px">
                            <a href ="../ad">    
                                <div class="card-body h4 d-flex flex-wrap">

                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

                                    <p class="align-self-end h4 fw-bold col-12 ">Doctor List</p>
                                </div>
                            </a>
                            </div>
                        
                        </div>

                        <div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0  ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  background-color: #333D7B;font-size:24px">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

                                    <p class="align-self-end h4 fw-bold col-12 ">Patient List</p>
                                </div>

                            </div>
                            </div>

                        <div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0  ">
                            <div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  background-color: #333D7B;font-size:24px">
                                <div class="card-body h4 d-flex flex-wrap">
                                    <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

                                  <p class="align-self-end h4 fw-bold col-12 ">Appointment Details</p>
                                </div>


                            </div>
                            </div>
<div class="d-lg-flex col-12 mt-lg-5 justify-content-center">
<div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0  ">
<div class=" card text-light mt-4 mt-lg-0 m-auto  m-lg-0" style="height: 250px;  background-color: #333D7B;font-size:24px">
    <div class="card-body h4 d-flex flex-wrap">
        <div class="card-img col-12"><img src="../images/appointment.png" alt=""></div>

        <p class="align-self-end h4 fw-bold col-12 ">Prescription List</p>
    </div>

</div>
</div>




<div class="col col-md-6 col-lg-4 px-3  m-auto m-lg-0  ">
<div class=" card  mt-4 mt-lg-0 m-auto bg-light hover-card m-lg-0" style="height: 250px;  background-color: #FFFFFF;font-size:24px">
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
}