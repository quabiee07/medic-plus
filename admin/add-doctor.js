import { creatingDoc } from "./firebase.js"
export const addDoctor = document.querySelectorAll("#add-doctor")


for (let i = 0; i < addDoctor.length; i++) {
    addDoctor[i].addEventListener("click", e => {
        e.preventDefault()
        addDoctorForm()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}


const addDoctorForm = () => {
    console.log("hello")
    patientDetails.innerHTML = `
<section class="container  ">
    <div class="d-flex flex-wrap justify-content-center">

    <div style="" class="col-12 d-flex flex-wrap align-items-center p-2  mt-5">
    <div class="p-3 col-3  col-lg-2 m-auto d-none"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
      <div class="col-12 col-md m-auto  text-md-start"> <p class="h4 m-auto text-center" id="greeting">Hello, Adminstrator</p>

      </div>

  </div>
        <div class="col-12 col-lg-10  p-4 mt-5 bg-light">
            <h4 class="fw-bold text-center" style=" text-transform:capitalize; color: #333D7B;">
        doctor form
            </h4>

        <form class="mt-5" action="#">
        <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
        <label for="doctor-name" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">Doctor name</label>
         <div class="col-12 col-lg-8">
         <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="doctor-name">
         </div>
     </div>
    

     <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
           <label for="specialization" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">Specialization</label>
            <div class="col-12 col-lg-8">
            <select type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="specialization">
       
            <option value="" id="0"></option>
            <option value="surgeon" id="1">surgeon</option>
            <option value="pharmacist" id="2">pharmacist</option>
            <option value="neurosurgeon" id="3">neurosurgeon</option>
            <option value="dentist" id="4">dentist</option>
            <option value="gynaecologist" id="5">gynaecologist</option>
            <option value="optician" id="6">optician</option>
            </select>
            </div>
        </div>

        <div class="my-lg-5 my-3 row flex-wrap justify-content-between">
        <label for="email" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">email</label>
        <div class="col-12 col-lg-8">
        <input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="email">
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

<div class="d-flex justify-content-center col-12 mt-5"> <button class="btn btn-lg m-auto  text-center btn-success" style="background-color:#333D7B; border-radius: 10px;" id="addDoctor">add doctor</button></div>
            </form>
        </div>

    </div>
</section>
`
    const addDoctor = document.querySelector("#addDoctor")
    const doc_name = document.querySelector("#doctor-name")
    const specialization = document.querySelector("#specialization")
    const password = document.querySelector("#password")
    const username = document.querySelector("#username")
    const email = document.querySelector("#email")

    addDoctor.addEventListener("click", e => {
        e.preventDefault()
        console.log(doc_name.value, specialization.value, email.value, password.value, username.value);
        creatingDoc(doc_name.value, specialization.value, email.value, password.value, username.value)
    })
}
export { addDoctorForm }