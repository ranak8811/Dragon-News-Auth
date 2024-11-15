// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCYOj4MBIYNl6H4361hQwcZABQtRNlVsF0",
  // authDomain: "dragon-news-c1247.firebaseapp.com",
  // projectId: "dragon-news-c1247",
  // storageBucket: "dragon-news-c1247.firebasestorage.app",
  // messagingSenderId: "681236033675",
  // appId: "1:681236033675:web:7d68b42d80a8116077648e",
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
