const form = document.querySelector("form")

form.addEventListener("submit", e => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    e.preventDefault()
    errHandler(email, password, "/admin/admin.html")
})