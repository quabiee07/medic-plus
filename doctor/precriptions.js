import { getAllpatients } from "../patient/patient.js"
const prescription = document.querySelectorAll("#prescription")
for (let i = 0; i < prescription.length; i++) {
    prescription[i].addEventListener("click", e => {
        e.preventDefault()

        prescribe()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}

const prescribe = () => {
        patientDetails.innerHTML = `
<section class="container p-md-5">
<div class="d-flex flex-wrap justify-content-center">

<div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
<div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
  <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
      <p class="text-secondary">Welcome back</p>
  </div>

</div>

    <div class="col" id="prescriptions">

    <ul class="appointment d-flex">
    <li>#</li>
    <li>doctor</li>
   <li>disease</li>
    <li>status</li>
    <li>action</li>
    </ul>
   
    </div>
 
</section>
`
        const prescribed = document.querySelector("#prescribed-btn")

        const prescriptions = document.querySelector("#prescriptions")
        const confirm_name = document.querySelector("#confirm-patient")
        getAllpatients()
            .then(res => {
                    res.map(patient => {
                                prescriptions.innerHTML += `
                <ul class="appointment d-flex">
                <li id=${patient.id}>${patient.id}</li>
                <li id="name">${patient.patientName?`${patient.patientName}`:"John dubbie"}</li>
                <li id="disease">Malaria & Typhoid</li>
                <li id=status>Active</li>
                <li class="prescribe"><button class="btn btn-success" id="prescribe-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">prescribe</button></li>
                </ul>
                ` 
            })
            const pres_btn=document.querySelectorAll("#prescribe-btn")
            const patientName=document.querySelectorAll("#name")
           
// patientDetails.addEventListener("click",e=>{
//    if(e.target.id=="prescribed-btn"){
//        console.log
//    }
// })

            for(let i=0;i<pres_btn.length;i++){
                pres_btn[i].addEventListener("click", e => {
          
    console.log(patientName[i].textContent)
                })
                         
            //    prescribed.addEventListener("click",e=>{
            //     console.log(patientName[i].textContent)

            //    })
            }
              
        })

}