import './assets/main.css'
import router from '../router/routes'
import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB0DWZYXsk7cngMRDPdUkBIJ3kVtFKZws",
  authDomain: "movies-db403.firebaseapp.com",
  projectId: "movies-db403",
  storageBucket: "movies-db403.appspot.com",
  messagingSenderId: "1094468064604",
  appId: "1:1094468064604:web:4e99d7d036b965d5a65d99"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')