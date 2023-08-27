import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1e6BfkzUYWbuictob5YALFxr5cBFlCqM",
  authDomain: "clone-6252c.firebaseapp.com",
  projectId: "clone-6252c",
  storageBucket: "clone-6252c.appspot.com",
  messagingSenderId: "747146424914",
  appId: "1:747146424914:web:259a9e3e21cb588c28a58b",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
