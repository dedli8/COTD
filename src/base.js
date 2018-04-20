import Rebase from 're-base';
import  firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABm98X0yivvxU_937__3MCRCKHFixvB9w",
    authDomain: "catch-of-the-day-e9a35.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e9a35.firebaseio.com"});

const base = Rebase.createClass(firebaseApp.database());


export { firebaseApp };

export default base;