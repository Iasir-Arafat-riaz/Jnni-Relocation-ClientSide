import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInitialize;
