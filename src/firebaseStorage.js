import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBMQfXCjny4y2CClfe-1wR4Z6os7Kw6iRk",
    authDomain: "memes-vue.firebaseapp.com",
    databaseURL: "https://memes-vue.firebaseio.com",
    projectId: "memes-vue",
    storageBucket: "memes-vue.appspot.com",
    messagingSenderId: "597419462850",
    appId: "1:597419462850:web:b00dc3691bc3a2669c2b5b",
    measurementId: "G-4VVDMZTH39"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;