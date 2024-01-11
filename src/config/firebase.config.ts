// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdjZI3SaqTN29IytV8urSEiNmEXiYRSFs',
  authDomain: 'club-ecommerce-23b28.firebaseapp.com',
  projectId: 'club-ecommerce-23b28',
  storageBucket: 'club-ecommerce-23b28.appspot.com',
  messagingSenderId: '276034878307',
  appId: '1:276034878307:web:bc006d59171463bba67156'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
