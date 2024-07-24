// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwEQLKGPOdXAGccWPdibmQ-kWQljGxa4c",
  authDomain: "book-store-486f1.firebaseapp.com",
  projectId: "book-store-486f1",
  storageBucket: "book-store-486f1.appspot.com",
  messagingSenderId: "488950318956",
  appId: "1:488950318956:web:bc6f1fde84ce81bf36d549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app