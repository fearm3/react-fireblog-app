import firebase from "./firebase";
import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  query,
  remove,
  child,
  update,
} from "firebase/database";
// import { successNote } from "./customTostify";
export const addInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "fireblog");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: "",
    imageUrl: "",
    content: "",
    email: "",
  });
  //   successNote("Added successfully");
};
export const useFetch = () => {
  const [newUser, setNewUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "fireblog");
    onValue(query(userRef), (snapshot) => {
      const contacts = snapshot.val();
      // send an array of the valuers in database
      // console.log(snapshot.val())
      const fireBlogArray = [];
      for (let id in contacts) {
        fireBlogArray.push({ id, ...contacts[id] });
      }
      setNewUser(fireBlogArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, newUser };
};
export const deleteInfo = (id) => {
  const db = getDatabase();
  //const userRef = ref(db, 'contact');
  remove(ref(db, "contact/" + id));
};
export const updateInfo = (info) => {
  const db = getDatabase();
  const newUserKey = push(child(ref(db), "contact/")).key;
  const updates = {};
  updates["contact/" + newUserKey] = info;
  return update(ref(db), updates);
};
