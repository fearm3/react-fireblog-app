import firebase from "./firebase";
import { useState,useEffect } from "react";
import { getDatabase,ref,push,set, onValue,query, remove, child, update } from "firebase/database"
// import { successNote } from "./customTostify";

// export const addInfo=(title, imageUrl, content, email)=>{
//     const db=getDatabase();
//     // const userRef=ref(db,"fireblog")
//     // const newUserRef=push(userRef)
//     set(ref(db,"fireblog"),{
//         title: title,
//         imageUrl:imageUrl,
//         content:content,
//         email:email

//     })
//     // successNote("Added successfully")
// }
export const useFetch=()=>{
    const [newUser, setNewUser] = useState({});
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)
      const db = getDatabase();
      const userRef = ref(db, 'fireblog');
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        // send an array of the valuers in database
        // console.log(snapshot.val())
        const fireBlogArray = [];
        for (let id in contacts) {
            fireBlogArray.push({ id, ...contacts[id] });
        }
        setNewUser(fireBlogArray);
        setIsLoading(false)
      })
    },[]);
    // console.log(newUser)
    return {isLoading,newUser};
}

// export const deleteInfo=(id)=>{
//     const db = getDatabase();
//       //const userRef = ref(db, 'contact');
//       remove(ref(db, "fireblog/"+ id))
//      successNote('Successfully deleted!');
// }

export const updateInfo = (title, imageUrl, content, email)=>{
  const db = getDatabase()
  const infoData = {
    title, imageUrl, content, email
  };
  const updates = {};
  updates['contact/' + email] = infoData;
  update(ref(db), updates);
  // successNote('Updated');
}
