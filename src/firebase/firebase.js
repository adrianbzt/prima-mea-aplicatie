import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEj-6buWnO9yGCwYqWItMfGmSgUsIlG04",
  authDomain: "prima-mea-aplicatie.firebaseapp.com",
  databaseURL: "https://prima-mea-aplicatie.firebaseio.com",
  projectId: "prima-mea-aplicatie",
  storageBucket: "prima-mea-aplicatie.appspot.com",
  messagingSenderId: "506603976345"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
