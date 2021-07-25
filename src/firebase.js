
import firebase from'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNQDE7rcWg6tr20K9S_Yy3NDdDsdzkXmg",
    authDomain: "jayendras-youtub-clone.firebaseapp.com",
    projectId: "jayendras-youtub-clone",
    storageBucket: "jayendras-youtub-clone.appspot.com",
    messagingSenderId: "844412868278",
    appId: "1:844412868278:web:281ed57fe2911c52b1b817"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()