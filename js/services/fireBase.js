const FireBase = (function () {

    const config = {
        apiKey: "AIzaSyCJrUT-fAbYtYjXkXE4sxWlbNtVQp7rq5U",
        authDomain: "projects-970ea.firebaseapp.com",
        databaseURL: "https://projects-970ea.firebaseio.com",
        projectId: "projects-970ea",
        storageBucket: "projects-970ea.appspot.com",
        messagingSenderId: "295841238926"
    };

    firebase.initializeApp(config);

    const db = firebase.firestore();

    let instance;

    const getDb = function () {
        return db;
    };

    const createInstance = function () {
        return {
            getDb
        }
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance())
        }
    }

}());