import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyAXNJsZibctqYhFV1XXbr9nYNPzaVk6KYg',
  authDomain: 'vuegram-33ce4.firebaseapp.com',
  projectId: 'vuegram-33ce4',
  storageBucket: 'vuegram-33ce4.appspot.com',
  messagingSenderId: '473568585359',
  appId: '1:473568585359:web:279cf68c391ea36aa3b2fa',
  measurementId: 'G-S0WEP4TYDB',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
// collection references
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

// export utils/refs
export { db, auth, usersCollection, postsCollection, commentsCollection, likesCollection };
