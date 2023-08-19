import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
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

const logout = document.getElementById("logout");
logout.addEventListener('click' , function () {
    signOut(auth).then(() => {
        alert("User is successfully Signout! Diverting you to the login page...")
            setTimeout(() => {
                window.location.href = "./login.html"
            }, 1000);
      }).catch((error) => {
        console.log(error)
      });
})
    