import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCz6MMEpX0N3cUsw9dKGZwujStTkI8rALE",
        authDomain: "clone-e1086.firebaseapp.com",
        databaseURL: "https://clone-e1086.firebaseio.com",
        projectId: "clone-e1086",
        storageBucket: "clone-e1086.appspot.com",
    messagingSenderId: "348342526252",
    appId: "1:348342526252:web:579ab32ed4ed134a118c89",
    measurementId: "G-65KXPBE3R2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};