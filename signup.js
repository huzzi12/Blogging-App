import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsAdRtlk-KWYzSgoAhb5AZVuUZgPFO1Eo",
    authDomain: "blogs-5c9d6.firebaseapp.com",
    projectId: "blogs-5c9d6",
    storageBucket: "blogs-5c9d6.appspot.com",
    messagingSenderId: "881550849003",
    appId: "1:881550849003:web:70f8de26499673be63dfae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();


let signup = document.getElementById("signup");

signup.addEventListener("click", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let cpassword = document.getElementById("cpassword");
    let firstName = document.getElementById("Fname");
    let lastName = document.getElementById("Lname");
    const error = document.getElementById("error")



    if (!firstName.value || !lastName.value || !email.value || !password.value || !cpassword.value) {
        error.innerText = "* All fields are required!"
    } else if (password.value.length < 6) {
        error.innerText = "* Password should be at least 6 characters!"
    } else if (password.value !== cpassword.value) {
        error.innerText = "* Password doesnot match match!"
    } else if (!password.value.length > 8) {
        error.innerHTML = "* Password must be atleast 7 characters"
    } else if (!firstName.value.length > 3) {
        error.innerText = "* First name must be atleast 3 characters"
    } else{
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, `user/${user.uid}`), {
                email: email.value,
                password: password.value,
                firstName: firstName.value,
                lastName: lastName.value,
            });
            
    
                alert("User is successfully registered! Diverting you to the login page...")
                setTimeout(() => {
                    window.location.href = "./login.html"
                }, 1000);
    
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = "Email already in use";
                alert(errorMessage)
            });
    }

    
});

