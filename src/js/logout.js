import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Firebase configuration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then(() => {
      window.location.href = "index.html";
      alert("You have successfully logged out");
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
});
