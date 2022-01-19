import { dashDisplay } from "../doctor/dashboard.js"
const patientDetails = document.querySelector("#adminDetails")
const sideNav = document.querySelector(".side-navigation")
dashDisplay()


export const closeNav = () => {
    sideNav.style.width = "0px"
    patientDetails.style.marginLeft = "0px"
}

export const openNav = () => {
    sideNav.style.width = "250px"
    patientDetails.style.marginLeft = "250px";
}

export const getAllpatients = async() => {
    const res = await fetch("https://medic-db-v1.herokuapp.com/patients")

    const data = await res.json()

    return data
}


export const addPatients = async(info) => {
    const res = await fetch("https://medic-db-v1.herokuapp.com/patients", {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(info)
    });
    const data = await res.json()

    return data
}




// async function fetchPatients() {
//     const res = await fetch("https://medic-db-v1.herokuapp.com/users")

//     const data = await res.json()

//     console.log(data)
// }