import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export function registerUser(userEmail, userPassword, displayName) {
  if (!validateDisplayName(displayName)) {
    return false;
  }
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(() => {
      const user = auth.currentUser;
      updateUserDisplayName(user, displayName).then(async () => {
        return true;
      });
    })
    .catch(() => {
      alert("Failed to register");
      return false;
    });
}

export async function signInUser(userEmail, userPassword) {
  return signInWithEmailAndPassword(auth, userEmail, userPassword);
}

function validateDisplayName(displayName) {
  if (displayName.length < 6 || displayName.length > 14) return false;
  if (displayName.indexOf(" ") >= 0) return false;
  if (/d/.test(displayName)) return false;
  return true;
}

export async function updateUserDisplayName(user, displayName) {
  await updateProfile(user, {
    displayName,
  });
}
