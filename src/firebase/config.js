import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDFt3bUQx63OEt5mDBX4OcDBS-fdFfDtQk",
    authDomain: "fir-99a26.firebaseapp.com",
    projectId: "fir-99a26",
    storageBucket: "fir-99a26.appspot.com",
    messagingSenderId: "410573281430",
    appId: "1:410573281430:web:f1f90609ca04fae798cab7",
    measurementId: "G-YF38XTL1HG"
  };

export default firebase.initializeApp(firebaseConfig)