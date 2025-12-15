// Substitua pelos dados do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBM_bNfuzZ8C7lfvvmpw-ARq0AjhZ4nWJk",
  authDomain: "visionboard-app-d5098.firebaseapp.com",
  projectId: "visionboard-app-d5098",
  storageBucket: "visionboard-app-d5098.appspot.com",
  messagingSenderId: "980916499306",
  appId: "1:980916499306:web:d5bc71ec966975c25e2b13"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
