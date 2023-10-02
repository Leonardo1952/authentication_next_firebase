import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

if (!firebase.get) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMIN,
        projectId: process.env. NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase