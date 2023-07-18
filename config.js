import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyBESMQ5hzB_lIGmi1RONCrP3zFzuztS7nw",
  authDomain: "projeto-71-3a238.firebaseapp.com",
  projectId: "projeto-71-3a238",
  storageBucket: "projeto-71-3a238.appspot.com",
  messagingSenderId: "672908066046",
  appId: "1:672908066046:web:057ac89381538933c179af"
};
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
