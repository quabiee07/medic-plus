import { creatingUser } from "./firebase.js"
export const addPatient = document.querySelectorAll("#add-patient")

// console.log(addPatient)
for (let i = 0; i < addPatient.length; i++) {
    addPatient[i].addEventListener("click", e => {
        e.preventDefault()
        addPatientForm()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}
const addPatientForm = () => {
    console.log("hello")
    patientDetails.innerHTML = `
<section class="container  ">
    <div class="d-flex flex-wrap justify-content-center">

    <div style="" class="col-12 d-flex flex-wrap align-items-center p-2  mt-5">
    <div class="p-3 col-3  col-lg-2 m-auto d-none"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
      <div class="col-12 col-md m-auto  text-md-start"> <p class="h4 m-auto text-center" id="greeting">Hello, Admin</p>

      </div>

  </div>
        <div class="col-12 col-lg-10  p-4 mt-5 bg-light">
            <h4 class="fw-bold text-center" style=" text-transform:capitalize; color: #333D7B;">
        patient form
            </h4>

        <form class="mt-5" action="#">
        <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
        <label for="name" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">name</label>
         <div class="col-12 col-lg-8">
         <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="patient-name">
         </div>
     </div>
        <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
        <label for="gender" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">gender</label>
         <div class="col-12 col-lg-8">
         <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="gender">
         </div>
     </div>





 <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
 <label for="phone" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">phone</label>
  <div class="col-12 col-lg-8">
  <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="phone">
  </div>
</div>

<div class="my-lg-5 my-3 row flex-wrap justify-content-between">
<label for="email" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">email</label>
 <div class="col-12 col-lg-8">
 <input type="email" class="w-100" style="background-color:#FCECEF80;border: none;" id="email">
 </div>
</div>

<div class="my-lg-5 my-3 row flex-wrap justify-content-between">
<label for="username" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">username</label>
<div class="col-12 col-lg-8">
<input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="username">
</div>
</div>

<div class="my-lg-5 my-3 row flex-wrap justify-content-between">
<label for="password" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">password</label>
<div class="col-12 col-lg-8">
<input type="password" class="w-100" style="background-color:#FCECEF80;border: none;" id="password">
</div>
</div>

<div class="d-flex justify-content-center col-12 mt-5"> <button class="btn btn-lg m-auto  text-center btn-success" style="background-color:#333D7B; border-radius: 10px;" id="addPatient">add patient</button></div>
            </form>
        </div>

    </div>
</section>
`
    const patient_name = document.querySelector("#patient-name")
    const patient_password = document.querySelector("#password")
    const patient_gender = document.querySelector("#gender")
    const patient_username = document.querySelector("#username")
    const patient_email = document.querySelector("#email")
    const addPatientBtn = document.querySelector("#addPatient")
    const patient_contact = document.querySelector("#phone")

    addPatientBtn.addEventListener("click",
        e => {
            e.preventDefault()
                // console.log(patient_name.value, patient_contact.value, patient_email.value, patient_gender.value, patient_password.value, patient_username.value)
            creatingUser(patient_email.value, patient_password.value, patient_name.value, patient_contact.value, patient_gender.value, patient_username.value)

        })
}