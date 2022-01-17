import { getAllpatients } from "../patient/patient.js"
const appointment = document.querySelectorAll("#appointment")

for (let i = 0; i < appointment.length; i++) {
    appointment[i].addEventListener("click", e => {
        e.preventDefault()

        appointments()
            //  sideNav.style.width = "0px"
            //  main.style.marginLeft = "0px"
    })


}


const appointments = () => {
    patientDetails.innerHTML = `
<section class="container p-md-5">
      <div class="d-flex flex-wrap justify-content-center">

      <div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
      <div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
        <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, William Kpenkelemense</p>
            <p class="text-secondary">Welcome back</p>
        </div>

    </div>

          <div class="col-12" id="appt-info">

          <ul class="appointment d-flex">
          <li>#</li>
          <li>doctor</li>
          <li>date</li>
          <li>time</li>
          <li>status</li>
          <li>action</li>
          </ul>

         
          </div>
       
  </section>
`
        //  console.log(apptInfo)
    const apptInfo = document.querySelector("#appt-info")

    getAllpatients()
        .then(res => {
            //  console.log(apptInfo)
            console.log(res)

            res.map(patient => {

                apptInfo.innerHTML += `
               <ul class="appointment d-flex">
               <li id="order">${patient.id}</li>
               <li id="name">${patient.patientName}</li>
               <li id='date'>${patient.apptDate}</li>
               <li id="time">${patient.apptTime}</li>
               <li id="stat">Active</li>
               <li class="modify">
                <span class="edit"><img class="img-fluid" style="width:15px" src="../images/pen.png"></span>
               <span class="delete"><img class="img-fluid mx-3" style="width:15px"  src="../images/garbage.png"></span>
               </li>
               </ul>
    
               `
            })

        })
}


/* <table class="" style="width:100%">

               <tr>
               <th>#</th>
               <th>doctor</th>
               <th>date</th>
               <th>time</th>
               <th>statue</th>
               <th>action</th>
               </tr>

               <tr>
               <td>1</td>
               <td>Jonas Dubbie</td>
               <td/>09/07/2021</td>
               <td>9:30:00</td>
               <td>Active</td>
              
               <td>
               <span><img class="img-fluid" style="width:15px" src="../images/pen.png"></span>
               <span><img class="img-fluid " style="width:15px"  src="images/garbage.png"></span>
               <td>
               </tr>

               </table> */