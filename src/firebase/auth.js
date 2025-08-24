import { auth, app } from "./firebase"; 
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// ✅ Anonymous Login function
const signInAnon = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user); // already logged in
      } else {
        signInAnonymously(auth)
          .then((res) => resolve(res.user)) // new login
          .catch((err) => reject(err));
      }
    });
  });
};

// ✅ Save test data function
const writeTestData = (userId) => {
  const db = getDatabase(app); // initialize db
  return set(ref(db, "users/" + userId), {
    name: "Test User",
    email: "test@example.com"
  });
};

export { signInAnon, writeTestData };
