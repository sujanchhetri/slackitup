import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyARTN-s3twqgqWHIFxPh9NKE5koLNfaHng",
    authDomain: "slackitupbro.firebaseapp.com",
    databaseURL: "https://slackitupbro.firebaseio.com",
    projectId: "slackitupbro",
    storageBucket: "slackitupbro.appspot.com",
    messagingSenderId: "751893517212",
    appId: "1:751893517212:web:b8bd346394891c8d55ae59",
    measurementId: "G-P46NX62BGG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;