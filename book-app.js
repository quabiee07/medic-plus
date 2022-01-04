const bookAppointment = document.querySelectorAll("#book-appointment")
for (let i = 0; i < bookAppointment.length; i++) {
    bookAppointment[i].addEventListener("click", e => {

        bookApp()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}


const bookApp = () => {
    return patientDetails.innerHTML = `
<section class="container p-md-5 ">
        <div class="d-flex flex-wrap justify-content-center">

        <div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
        <div class="p-3 col-3  col-lg-2 m-auto"> <img src="images/profile.svg" class="img-fluid " alt=""></div> 
          <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
              <p class="text-secondary">Welcome back</p>
          </div>

      </div>
            <div class="col-12 col-lg-10  p-4 mt-5 bg-light">
                <h4 class="fw-bold text-center" style=" text-transform:capitalize; color: #333D7B;">
                book an appointment
                </h4>

            <form class="mt-5">

         <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
           <label for="specialization" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">Specialization</label>
            <div class="col-12 col-lg-8">
            <select type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="specialization">
            <option value="pharmacist" id="0"></option>
            <option value="pharmacist" id="1">pharmacist</option>
            <option value="pharmacist" id="2">pharmacist</option>
            <option value="pharmacist" id="3">pharmacist</option>
            </select>
            </div>
        </div>
                            
        <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
        <label for="doctor" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">doctor</label>
         <div class="col-12 col-lg-8">
         <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="doctor">
         </div>
     </div>

     <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
     <label for="appointment-date" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">appointment date</label>
      <div class="col-12 col-lg-8">
      <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="appointment-date">
      </div>
  </div>

  <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
  <label for="appointment-time" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">appointment time</label>
   <div class="col-12 col-lg-8">
   <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="appointment-time">
   </div>
</div>


<div class="d-flex justify-content-center col-12 mt-5"> <button class="btn m-auto  text-center btn-success" style="background-color:#333D7B; border-radius: 10px;">Create Entry</button></div>
                </form>
            </div>
        
        </div>
    </section>
`


}