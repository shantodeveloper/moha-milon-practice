// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiCJoenS2pIqfYXNMyDrGBC98UDdCf1_c',
  authDomain: 'moha-milon-practice-99666.firebaseapp.com',
  projectId: 'moha-milon-practice-99666',
  storageBucket: 'moha-milon-practice-99666.firebasestorage.app',
  messagingSenderId: '706219613541',
  appId: '1:706219613541:web:c90c0e8effc94d1ec7558c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
