import firebase from 'firebase';

// 어플에 사용자가 로그인, 로그아웃하는 authentication 관련 일 하는 클래스
// 클래스 안 : 로그인하는 함수
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
