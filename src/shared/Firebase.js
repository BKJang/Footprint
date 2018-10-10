import * as firebase from 'firebase'
let database;
let config = {
    apiKey: "AIzaSyBa1yFvsl0j1k3SNDPX-DcW5xtXjQPtPEg",
    authDomain: "footprint-a164a.firebaseapp.com",
    databaseURL: "https://footprint-a164a.firebaseio.com",
    projectId: "footprint-a164a",
    storageBucket: "footprint-a164a.appspot.com",
    messagingSenderId: "632771076490"
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