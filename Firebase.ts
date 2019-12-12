const firebaseConfig = {
    apiKey: "AIzaSyDtHxDAWuQCXtoRs2GhPNDSpFijwtbziMw",
    authDomain: "whitewaterisitin.firebaseapp.com",
    databaseURL: "https://whitewaterisitin.firebaseio.com",
    projectId: "whitewaterisitin",
    storageBucket: "whitewaterisitin.appspot.com",
    messagingSenderId: "961919748395",
    appId: "1:961919748395:web:01707481d9623365f6dd6e",
    measurementId: "G-PQGGPWCQH2"
};

export default async function loadFirebase() {
    const firebase = await import('firebase/app');
    await import('firebase/firestore');
    try {
        const app = firebase.initializeApp(firebaseConfig);
        firebase.firestore(app);
    } catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        console.log(err);
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
    }
    return firebase;
}