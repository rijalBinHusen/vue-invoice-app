import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  //   apiKey: "AIzaSyBtX0zbq8OWFoczz-D55IEQ-zQxcmjZ6BU",
  apiKey: "AIzaSyCY3JFVENQhvYRRDJiVymK64AK5dhD5MQ8",
  //   authDomain: "invoice-app-yt.firebaseapp.com",
  authDomain: "catatansaya-b7f41.firebaseapp.com",
  //   projectId: "invoice-app-yt",
  projectId: "catatansaya-b7f41",
  //   storageBucket: "invoice-app-yt.appspot.com",
  storageBucket: "catatansaya-b7f41.appspot.com",
  //   messagingSenderId: "638958069840",
  messagingSenderId: "602940561973",
  //   appId: "1:638958069840:web:2a359ba0cf4b8c7b648955",
  appId: "1:602940561973:web:8a56f6a18c3516dc98ef7c",
};

//initialize firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
