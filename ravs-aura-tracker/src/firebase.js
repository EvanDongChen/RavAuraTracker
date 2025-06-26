import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDF2jmXWTX5D6KzNZr5YiG_URBeksr45Oc",
  authDomain: "ravdeepauratracker.firebaseapp.com",
  projectId: "ravdeepauratracker",
  storageBucket: "ravdeepauratracker.firebasestorage.app",
  messagingSenderId: "885601974420",
  appId: "1:885601974420:web:95e4d41c7008da247e5c81",
  databaseURL: "https://ravdeepauratracker-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }; 