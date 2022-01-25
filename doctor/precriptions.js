import { getAllpatients } from "../patient/patient.js";
const prescription = document.querySelectorAll("#prescription");
for (let i = 0; i < prescription.length; i++) {
    prescription[i].addEventListener("click", (e) => {
        e.preventDefault();

        prescribe();
        // sideNav.style.width = "0px"
        // main.style.marginLeft = "0px"
    });
}

const prescribe = () => {
    patientDetails.innerHTML = `
<section class="container p-md-5">
<div class="d-flex flex-wrap justify-content-center">

<div style="overflow-x:hidden " class="col-12 d-flex flex-wrap align-items-center p-2 bg-light mt-5">
<div class="p-3 col-3  col-lg-2 m-auto"> <img src="../images/profile.svg" class="img-fluid " alt=""></div> 
  <div class="col-10 col-md m-auto p-md-3 text-center text-md-start"> <p class="h4 m-auto" id="greeting">Hello, <span id="helloName"></span></p>
      <p class="text-secondary">Welcome back</p>
  </div>

</div>

    <div class="col" id="prescriptions">

    <ul class="appointment d-flex">
    <li>#</li>
    <li>doctor</li>
   <li>disease</li>
    <li>status</li>
    <li>prescribed</li>
    </ul>
    </div>
  <div class="col-12 d-flex"> <button class="btn btn-lg btn-success m-auto" id="prescribe-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">prescribe</button></div> 
</section>

`;
    const prescribed = document.querySelector("#prescribed-btn");

    const prescriptions = document.querySelector("#prescriptions");
    const confirm_id = document.querySelector("#confirm-id");
    const doc_prescription = document.querySelector("#prescription-field");
    getAllpatients().then((res) => {
        res.map((patient, index) => {
            prescriptions.innerHTML += `
                <ul class="appointment d-flex">
                <li id=patient-id>${patient.id}</li>
                <li id="name">${patient.patientName}</li>
                <li id="disease">${patient.disease}</li>
                <li id=status>Active</li>
                <li class="prescribe">${patient.prescription}</li>
                </ul>
                `;
        });

        const patientsName = res.map((patientName) => ({
            patientName: patientName.patientName,
            id: patientName.id,
        }));
        // const patientNames2=document.querySelectorAll("#name")

        console.log(patientsName);
        const pres_btn = document.querySelectorAll("#prescribe-btn");
        const pid = document.querySelectorAll("#patient-id")
        const pname = document.querySelectorAll("#name")
        const disease = document.querySelector("#disease-field")
            // console.log(disease)
        prescribed.addEventListener("click", e => {
            console.log(doc_prescription.value)
            for (let i = 0; i < pname.length; i++) {
                // console.log(pname[i].textContent);
                if (confirm_id.value == pid[i].textContent) {
                    // console.log(pname[i].textContent,pname[i].previousElementSibling)
                    const prescription = doc_prescription.value
                        //   console.log(prescription);
                    updateUserPrescription(confirm_id.value, prescription, disease.value)
                }
            }


        })


    });
};
const fetchPatient = async(id) => {
    const res = await fetch(`https://medic-db-v1.herokuapp.com/patients/${id}`)
    const data = await res.json()
    return data
}

const updateUserPrescription = async(id, prescription, disease) => {
    const singlePatient = await fetchPatient(id)
    const update = {...singlePatient, prescription, disease }
    const res = await fetch(`https://medic-db-v1.herokuapp.com/patients/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(update)

    })
    const data = await res.json()
    console.log(data)
}

export { prescribe }