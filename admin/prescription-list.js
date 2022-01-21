export const prescription_list = document.querySelectorAll("#prescription-list")
for (let i = 0; i < prescription_list.length; i++) {
    prescription_list[i].addEventListener("click", e => {
        e.preventDefault()

        prescribeList()
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
}

const prescribeList = () => {
    return patientDetails.innerHTML = `
<section class="container p-md-5">
<div class="d-flex flex-wrap justify-content-center">

<div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
<div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
 <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
     <p class="text-secondary">Welcome back</p>
 </div>

</div>

   <div class="col">

   <ul class="prescription d-flex">
   <li>doctor</li>
   <li>patient</li>
   <li>disease</li>
   <li>allergy</li>
   <li>prescription</li>
  
   </ul>

   <ul class="prescription d-flex">
   <li id="name">Jonas Dubbie</li>
   <li id='date'>09/07/2021</li>
   <li id="time">9:30</li>
   <li id="disease">Malaria & Typhoid</li>
   <li class="allergy"> Nii </li>
   <li class="prescribe"> Lonart Ds </li>
   </ul>

   <ul class="prescription d-flex">
   <li id="name">Jonas Dubbie</li>
   <li id='date'>09/07/2021</li>
   <li id="time">9:30</li>
   <li id="disease">Malaria & Typhoid</li>
   <li class="allergy"> Nii </li>
   <li class="prescribe"> Lonart Ds </li>
   </ul>

   <ul class="prescription d-flex">
   <li id="name">Jonas Dubbie</li>
   <li id='date'>09/07/2021</li>
   <li id="time">9:30</li>
   <li id="disease">Malaria & Typhoid</li>
   <li class="allergy"> Nii </li>
   <li class="prescribe"> Lonart Ds </li>
   </ul>

  
   </div>

</section>
`
}