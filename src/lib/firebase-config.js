import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAlm38_TWUJ8H3hsBXVi1oxQqYV2AnwDV8",
	authDomain: "auth-b0a85.firebaseapp.com",
	projectId: "auth-b0a85",
	storageBucket: "auth-b0a85.appspot.com",
	messagingSenderId: "810150689281",
	appId: "1:810150689281:web:602236022734ecdd2cde00",
	measurementId: "G-JZMT1FFHMX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
