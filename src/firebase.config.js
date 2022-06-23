import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzjPkUZ3kVdWSovJIJGClQ28cl-UOogkM",
  authDomain: "restaurant-narc.firebaseapp.com",
  databaseURL: "https://restaurant-narc-default-rtdb.firebaseio.com",
  projectId: "restaurant-narc",
  storageBucket: "restaurant-narc.appspot.com",
  messagingSenderId: "1042667454946",
  appId: "1:1042667454946:web:61e48fd086efd7701039bb",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
