import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyCkzl1usjgwsix50isaXlR4BpEi0Zc8tBE',
    authDomain: 'unichat-a2ab6.firebaseapp.com',
    projectId: 'unichat-a2ab6',
    storageBucket: 'unichat-a2ab6.appspot.com',
    messagingSenderId: '56528464848',
    appId: '1:56528464848:web:2b326b79772bd662e9e7d5',
  })
  .auth();
