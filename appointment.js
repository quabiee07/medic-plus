 const appointment = document.querySelectorAll("#appointment")
 for (let i = 0; i < appointment.length; i++) {
     appointment[i].addEventListener("click", e => {
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
    
                   <div class="col-12">
   
                   <ul class="appointment d-flex">
                   <li>#</li>
                   <li>doctor</li>
                   <li>date</li>
                   <li>time</li>
                   <li>status</li>
                   <li>action</li>
                   </ul>
   
                   <ul class="appointment d-flex">
                   <li id="order">1</li>
                   <li id="name">Jonas Dubbie</li>
                   <li id='date'>09/07/2021</li>
                   <li id="time">9:30:00</li>
                   <li id="stat">Active</li>
                   <li class="modify">
                    <span class="edit"><img class="img-fluid" style="width:15px" src="images/pen.png"></span>
                   <span class="delete"><img class="img-fluid mx-2" style="width:15px"  src="images/garbage.png"></span>
                   </li>
                   </ul>
   
                   <ul class="appointment d-flex">
                   <li id="order">2</li>
                   <li id="name">Jonas Dubbie</li>
                   <li id='date'>09/07/2021</li>
                   <li id="time">9:30:00</li>
                   <li id="stat">Active</li>
                   <li class="modify">
                    <span class="edit"><img class="img-fluid" style="width:15px" src="images/pen.png"></span>
                   <span class="delete"><img class="img-fluid mx-2" style="width:15px"  src="images/garbage.png"></span>
                   </li>
                   </ul>
   
                   <ul class="appointment d-flex">
                   <li id="order">3</li>
                   <li id="name">Jonas Dubbie</li>
                   <li id='date'>09/07/2021</li>
                   <li id="time">9:30:00</li>
                   <li id="stat">Active</li>
                   <li class="modify">
                    <span class="edit"><img class="img-fluid" style="width:15px" src="images/pen.png"></span>
                   <span class="delete"><img class="img-fluid mx-2" style="width:15px"  src="images/garbage.png"></span>
                   </li>
                   </ul>
   
                  
                   </div>
                
           </section>
        `

         sideNav.style.width = "0px"
         main.style.marginLeft = "0px"
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
                <span><img class="img-fluid" style="width:15px" src="images/pen.png"></span>
                <span><img class="img-fluid " style="width:15px"  src="images/garbage.png"></span>
                <td>
                </tr>

                </table> */