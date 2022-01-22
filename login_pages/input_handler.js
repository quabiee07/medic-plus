export const errHandler = (email, password, redirect) => {
    email && password ? window.location.href = redirect :
        swal({
            title: "Blank Fields",
            text: "please fill all fields",
            icon: "error"
        });

}