document.addEventListener("DOMContentLoaded", () => {
    let selectDrop = document.querySelector("#countries");
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let output = "";

        data.forEach((country) => {
          console.log(country.name.common);
          output += `<option class="form-control-new">${country.name.common}<option>`;
        });
        selectDrop.innerHTML = output;
      })
      .catch((err) => {
        console.log(err);
      });
  });

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMTXJwxRJyw_FGdk_t1H97cBNmbsdRJUw",
//   authDomain: "binary-675cb.firebaseapp.com",
//   projectId: "binary-675cb",
//   storageBucket: "binary-675cb.appspot.com",
//   messagingSenderId: "1069173000484",
//   appId: "1:1069173000484:web:2304629b7b4ae848108bb1",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import {
//   getDatabase,
//   set,
//   get,
//   update,
//   remove,
//   ref,
// } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-database.js";

// const db = getDatabase();

// let name = document.querySelector('#name');
// let username = document.querySelector('#username');
// let email = document.querySelector('#email');
// let contact = document.querySelector('#contact');
// let password = document.querySelector('#msg_subject');
// let confirmPassword = document.querySelector('#cmsg_subject');

// let submitBtn = document.querySelector('#submit');

// function registerUser() {
//     set(ref(db, "Users"), {
//         Name: name.value,
//         Username: username.value,
//         Email: email.value,
//         Contact: contact.value,
//         Password: password.value,
//         ConfirmPassword: confirmPassword.value
//     })
//     .then(() => {
//         alert("User sucessfully registered!");
//     })
//     .catch((error) => {
//         alert(error);
//     })
// }

// submitBtn.addEventListener('click', registerUser);