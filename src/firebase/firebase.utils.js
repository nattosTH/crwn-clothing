import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCYDlI8NszAmT4meKvOh__IjRqYkBX8ZeQ',
  authDomain: 'crwm-db-d0167.firebaseapp.com',
  databaseURL: 'https://crwm-db-d0167.firebaseio.com',
  projectId: 'crwm-db-d0167',
  storageBucket: 'crwm-db-d0167.appspot.com',
  messagingSenderId: '557306733904',
  appId: '1:557306733904:web:7b6341b8a6420759ddb855',
  measurementId: 'G-QH6FKJ0E1P'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
