// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYrEpx73O6qIX8PNYs7DVhU0PHrcS5gGI",
    authDomain: "codewithamin-portfolio.firebaseapp.com",
    projectId: "codewithamin-portfolio",
    storageBucket: "codewithamin-portfolio.appspot.com",
    messagingSenderId: "588707916364",
    appId: "1:588707916364:web:ea79abe411479defe6a2e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;