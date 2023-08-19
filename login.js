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

const login = document.getElementById("loginform");

login.addEventListener("click", function () {



    // function loginHandle() {
    let email = document.getElementById("logemail");
    let password = document.getElementById("logpassword");

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            //   onValue(ref(db, `users/${user.uid}`), (data) => {
            //     if(data.val() == null){
            //         alert("null")
            //     }
            //   });

            // const dbRef = ref(getDatabase());
            // get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
            //     console.log(snapshot.val())
            // }).catch((error) => {
            //     console.error(error);
            // });

            alert("User is successfully logged in! Diverting you to the Dashboard page...")
            setTimeout(() => {
                window.location.href = "./dashboard.html"
            }, 1000);


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
    }
    );


