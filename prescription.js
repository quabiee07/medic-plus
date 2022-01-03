const prescription = document.querySelectorAll("#prescription")
for (let i = 0; i < prescription.length; i++) {
    prescription[i].addEventListener("click", e => {
        e.preventDefault()
        patientDetails.innerHTML = `
        <section class="container p-md-5">
        <div class="d-flex flex-wrap justify-content-center">
    
            <div style="overflow-x:hidden " class="col-12 d-flex align-items-center p-2 bg-light mt-5">
            <div class="p-2 col-2"> <img src="images/profile.svg" class="img-fluid " alt=""></div> 
            <div class="col mx-3"> <span class="fw-bold h4">Hello, William Kpenkelemense</span>
                <p class="text-secondary">Welcome back</p>
            </div>
    
            </div>
    
            <div class="col">
    
            <ul class="prescription d-flex">
            <li>doctor</li>
            <li>date</li>
            <li>time</li>
            <li>disease</li>
            <li>allergies</li>
            <li>prescribe</li>
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
        sideNav.style.width = "0px"
        main.style.marginLeft = "0px"
    })
}