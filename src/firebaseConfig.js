// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA6AqNUlSgwM2SsVpdB_-nIeOXjINRJqKw",
	authDomain: "vue-3-firebase-pinia.firebaseapp.com",
	projectId: "vue-3-firebase-pinia",
	storageBucket: "vue-3-firebase-pinia.appspot.com",
	messagingSenderId: "485819966220",
	appId: "1:485819966220:web:eee14724e7402473fa9f29",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
