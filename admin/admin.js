import { dashDisplay } from "../admin/dashboard.js"
const adminDetails = document.querySelector("#adminDetails")
const sideNav = document.querySelector(".side-navigation")

dashDisplay()


export const closeNav = () => {
    sideNav.style.width = "0px"
    adminDetails.style.marginLeft = "0px"
}

export const openNav = () => {
    sideNav.style.width = "250px"
    adminDetails.style.marginLeft = "250px";
}