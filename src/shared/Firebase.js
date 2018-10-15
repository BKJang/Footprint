import * as firebase from 'firebase'
let database;
let config = {
    apiKey: "",
    authDomain: "footprint-a164a.firebaseapp.com",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
  database = firebase.database()
}
export const getFireDB = () => {
    return database.ref('/').once('value')
}