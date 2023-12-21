// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey ,
  authDomain: import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId ,
}; */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdSMYhcMg2N6v8KKieQWWKtDEX-Fh0wMs",
  authDomain: "task-hub-d7947.firebaseapp.com",
  projectId: "task-hub-d7947",
  storageBucket: "task-hub-d7947.appspot.com",
  messagingSenderId: "938872392065",
  appId: "1:938872392065:web:1cb85d45f6cf9be3a4c080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;