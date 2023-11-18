import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig ={
    apiKey: "AIzaSyBi7iUi6fmllrKT-vhUyrUySYkWN2H0-jM",
    authDomain: "ecommerce-juriclaureano.firebaseapp.com",
    projectId: "ecommerce-juriclaureano",
    storageBucket: "ecommerce-juriclaureano.appspot.com",
    messagingSenderId: "668902466862",
    appId: "1:668902466862:web:e9cd367a3921a8fd28c6bf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);