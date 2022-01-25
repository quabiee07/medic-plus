const deleteDoctor = document.querySelectorAll("#delete-doctor");

for (let i = 0; i < deleteDoctor.length; i++) {
    deleteDoctor[i].addEventListener("click", e => {
        deleteDoc()
    })
}


const deleteDoc = () => {
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
            delete doctor 
            </h4>


<div class="my-lg-5 my-3 row flex-wrap justify-content-between">
<label for="username" class="col-lg-4 col-12 col-form-label" style="font-weight:500;">username</label>
<div class="col-12 col-lg-8">
<input type="text" class="w-100" style="background-color:#FCECEF80;border: none;" id="username">
</div>
</div>

<div class="d-flex justify-content-center col-12 mt-5"> <button class="btn btn-lg m-auto  text-center btn-success" style="background-color:#333D7B; border-radius: 10px;" id="addDoctor">delete doctor</button></div>
            </form>
        </div>

    </div>
</section>
`

}