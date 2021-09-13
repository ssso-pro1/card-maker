import firebase from 'firebase';
import firebaseApp from './firebase';

// 어플에 사용자가 로그인, 로그아웃하는 authentication 관련 일 하는 클래스
// 클래스 안 : 로그인하는 함수
// providerName 받아와서 여기에 맞춰서 로그인
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;

/*
import { initializeApp } from './firebase';
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(config);
class AuthService {
  login(providerName) {
    let provider;
    if (providerName === 'Google') provider = new GoogleAuthProvider();
    if (providerName === 'Github') provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }
}

export default AuthService;
*/
