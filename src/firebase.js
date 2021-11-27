import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDDxPw2ge7auSblxZwMdFcRy6xD9xECqhU",
    authDomain: "linkedin-clone-aca77.firebaseapp.com",
    projectId: "linkedin-clone-aca77",
    storageBucket: "linkedin-clone-aca77.appspot.com",
    messagingSenderId: "1095469389079",
    appId: "1:1095469389079:web:77b4df6aeea2fef0225352"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;

