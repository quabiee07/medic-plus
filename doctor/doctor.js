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