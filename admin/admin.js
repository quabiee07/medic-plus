import { dashDisplay } from "./dashboard.js"
const patientDetails = document.querySelector("#patientDetails")
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