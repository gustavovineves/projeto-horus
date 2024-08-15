import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD5NtJuvxzv69mPRMXtEkPEQB6MYeXm9uA",
    authDomain: "projeto-horus-c11a0.firebaseapp.com",
    projectId: "projeto-horus-c11a0",
    storageBucket: "projeto-horus-c11a0.appspot.com",
    messagingSenderId: "734763566367",
    appId: "1:734763566367:web:9f38f9dc02a1ebc98bdc2a",
    measurementId: "G-8FPSLXKKMW"
};

// Inicializacao do firebase e firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);