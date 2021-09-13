import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: 'business-card-maker-965e1.appspot.com',
  // messagingSenderId: '735095063971',
  // appId: '1:735095063971:web:e8ceb9fa03753eb28ec616',
  // measurementId: 'G-0MXE1LVSLH',
};

console.log();
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
