import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import PropTypes from "prop-types";

//Creating userContext hook
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });
    setUser({
      name: userCredential.user.displayName,
      email: userCredential.user.email,
      emailVerified: userCredential.user.emailVerified,
      phoneNumber: userCredential.user.phoneNumber,
      photoURL: userCredential.user.photoURL,
      uid: userCredential.user.uid,
    });
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Error signing in: ", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  const addUser = async (userData) => {
    try {
      const data = await addDoc(collection(db, "users"), {
        description: userData,
        createdAt: serverTimestamp(),
      });
      console.log(data, "data of add user");
    } catch (err) {
      console.error("Error adding user: ", err);
    }
  };

  const getUsers = async () => {
    try {
      const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      console.log("🚀 ~ getUsers ~ newData:", newData);
      return newData;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          emailVerified: currentUser.emailVerified,
          phoneNumber: currentUser.phoneNumber,
          photoURL: currentUser.photoURL,
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, addUser, getUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
