import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initilizeAuthentication = () => {
      initializeApp(firebaseConfig);
}
export default initilizeAuthentication