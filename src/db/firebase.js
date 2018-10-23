import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAlxLVtW47nyTRH893USoW3f__C1djNgww",
    authDomain: "chatclient-de81b.firebaseapp.com",
    databaseURL: "https://chatclient-de81b.firebaseio.com",
    projectId: "chatclient-de81b",
    storageBucket: "chatclient-de81b.appspot.com",
    messagingSenderId: "240221355672"
  };
  firebase.initializeApp(config);

export default firebase;
