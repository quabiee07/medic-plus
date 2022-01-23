// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, get, onValue } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
// import { firebase } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
import { errHandler } from "../login_pages/input_handler.js";

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXCJyjWJHFqDG_QLOeh7Q9kfbqMa-m4fk",
    authDomain: "hospital-management-a54d3.firebaseapp.com",
    databaseURL: "https://hospital-management-a54d3-default-rtdb.firebaseio.com",
    projectId: "hospital-management-a54d3",
    storageBucket: "hospital-management-a54d3.appspot.com",
    messagingSenderId: "99199313558",
    appId: "1:99199313558:web:50adf36abcce0088f104b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const currentUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                console.log(user.uid);
                getPatientDetails(user.uid)
                getDoctorDetails(user.uid)

                document.querySelector("#home").style.display = "none"
                document.querySelector("#logout").style.display = "block"

            } else {
                // User is signed out
                // ...
                // const patientDetails = document.querySelector("#patientDetails")
                if (patientDetails) {
                    patientDetails.innerHTML = ` <h2 class="text-center">you are not logged in please go back and login<h2>`
                    document.querySelector("#home").style.display = "block"
                    document.querySelector("#logout").style.display = "none"
                    console.log(user)
                }

            }
        });
    }
    // currentUser()



// authentication
// CREATING PATIENT
const creatingUser = (email, password, name, contact, gender, username) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                patientsProfile(email, password, name, contact, gender, username, user.uid)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;;
                console.log(errorMessage)
                    // ..
            });
    }
    // CREATING DOCTOR
const creatingDoc = (name, specialization, email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            doctorsProfile(name, specialization, email, password, username, user.uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;;
            console.log(errorMessage)
                // ..
        });
}



// storing all patient details
const patientsProfile = (email, password, name, contact, gender, username, userID) => {
        set(ref(db, 'patients' + userID), {
                email,
                password,
                name,
                contact,
                gender,
                username,
                userID
            }).then(() => alert("data saved"))
            .catch(e => {
                console.log(e.message)
            })
    }
    // storing all Doctors details
const doctorsProfile = (name, specialization, email, password, username, userID) => {
    set(ref(db, 'Doctors' + userID), {
            name,
            specialization,
            email,
            password,
            username,
            userID
        }).then(() => alert("data saved"))
        .catch(e => {
            console.log(e.message)
        })
}

// getting all patient details
const db = getDatabase()
const getPatientDetails = (id) => {
        const dbRef = ref(db);
        get(child(dbRef, `patients${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const helloName = document.querySelector("#helloName");
                helloName.innerHTML = snapshot.val() ? snapshot.val().name : "";
            } else {
                console.log("No data available");
            }
            // return (snapshot.val().name);
        }).catch((error) => {
            console.error(error.message);
        });

    }
    // get all doctors 
const getDoctorDetails = (id) => {
        const dbRef = ref(db);
        get(child(dbRef, `Doctors${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const helloName = document.querySelector("#helloName");

                helloName.innerHTML = snapshot.val() ? snapshot.val().name : "";

            } else {
                console.log("No data available");
            }
            // return (snapshot.val().name);
        }).catch((error) => {
            // console.error(error.message);
        });

    }
    // sign in users
const signInUser = (email, password, redirect) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            errHandler(email, password, redirect)
                // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal({ title: "Error", text: "wrong details or account does not exist", icon: "error" })
        });
}

const signoutUser = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signed out")
    }).catch((error) => {
        // An error happened.
    });
}

export {
    currentUser,
    signoutUser,
    signInUser,
    creatingUser,
    creatingDoc
}