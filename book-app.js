const bookAppointment = document.querySelectorAll("#book-appointment")
for (let i = 0; i < bookAppointment.length; i++) {
    bookAppointment[i].addEventListener("click", e => {

        patientDetails.innerHTML = `
        <section class="container p-md-5 ">
                <div class="d-flex flex-wrap justify-content-center">
    
                    <div style="overflow-x:hidden " class="col-12 col-lg-10 d-flex align-items-center p-2 bg-light mt-5">
                    <div class="p-2 col-2"> <img src="images/profile.svg" class="img-fluid " alt=""></div> 
                        <div class="col mx-3"> <span class="fw-bold h4">Hello, William Kpenkelemense</span>
                            <p class="text-secondary">Welcome back</p>
                        </div>
    
                    </div>
                    <div class="col-12 col-lg-10  p-4 mt-5 bg-light">
                        <h4 class="fw-bold text-center" style=" text-transform:capitalize; color: #333D7B;">
                        book an appointment
                        </h4>
    
                    <form class="mt-5">
    
                 <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
                   <label for="specialization" class="col-lg-4 col-12 col-form-label">Specialization</label>
                    <div class="col-12 col-lg-8">
                    <input type="text" class="form-control" style="background-color:#FCECEF80" id="specialization">
                    </div>
                </div>
                                    
                <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
                <label for="doctor" class="col-lg-4 col-12 col-form-label">doctor</label>
                 <div class="col-12 col-lg-8">
                 <input type="text" class="form-control" style="background-color:#FCECEF80" id="doctor">
                 </div>
             </div>
    
             <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
             <label for="appointment-date" class="col-lg-4 col-12 col-form-label">appointment date</label>
              <div class="col-12 col-lg-8">
              <input type="text" class="form-control" style="background-color:#FCECEF80" id="appointment-date">
              </div>
          </div>
    
          <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
          <label for="appointment-time" class="col-lg-4 col-12 col-form-label">appointment time</label>
           <div class="col-12 col-lg-8">
           <input type="text" class="form-control" style="background-color:#FCECEF80" id="appointment-time">
           </div>
       </div>
    
                     <div class="d-flex mt-5">   <button class="btn m-auto btn-lg text-center btn-success rounded" style="background-color:#333D7B;">Create Entry</button></div>
                        </form>
                    </div>
                
                </div>
            </section>
        `

        sideNav.style.width = "0px"
        main.style.marginLeft = "0px"
    })
}




main.addEventListener("click", e => {
    sideNav.style.width = "0px"
    main.style.marginLeft = "0px"


})