const patientDetails = document.querySelector("#patientDetails")
dashDisplay()


const closeNav = () => {
    sideNav.style.width = "0px"
    patientDetails.style.marginLeft = "0px"
}

const openNav = () => {
    sideNav.style.width = "250px"
    patientDetails.style.marginLeft = "250px";
}

const addPatients = async(info) => {
    const res = await fetch("http://localhost:5000/patients", {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(info)
    });
    const data = await res.json()

    console.log(data)

}