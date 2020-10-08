  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyADsA40TFj3bgkzbW5kHH3VZSaOPz2mseo",
        authDomain: "instagram-clone-59f91.firebaseapp.com",
        databaseURL: "https://instagram-clone-59f91.firebaseio.com",
        projectId: "instagram-clone-59f91",
        storageBucket: "instagram-clone-59f91.appspot.com",
        messagingSenderId: "621121524899",
        appId: "1:621121524899:web:2f307c549b3001f6949b16",
        measurementId: "G-ES2K72QKME"
      
  });

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage  = firebaseApp.storage();

  export {db,auth,storage};