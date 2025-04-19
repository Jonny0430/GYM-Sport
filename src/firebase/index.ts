import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW5BmpQu8MkvWEhPUc5a4Xb82NwfsLeKE",
  authDomain: "gym-project-82d58.firebaseapp.com",
  projectId: "gym-project-82d58",
  storageBucket: "gym-project-82d58.firebasestorage.app",
  messagingSenderId: "244056528757",
  appId: "1:244056528757:web:2ecfe26fc4782322dc253c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
 