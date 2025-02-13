import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Main.css"
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'


const Login = () => {
  
    const[loginGmail,setLoginGmail]=useState("")
    const[loginPassword,setLoginPassword]=useState("")
    const[adminName,setAdminName]=useState("")
    const[getProvider,setGetProvider]=useState([])
    const db = getFirestore();
    const {id}= getProvider
    // console.log("id", id)
    const loginAdmin = async(e)=>{
        e.preventDefault();
        try {
          const docRef = await addDoc(collection(db, "login-Admin"), {
            first: adminName ,
             gmail: loginGmail,
             userid : id ,
            // born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    }
    useEffect(()=>{
      const getData = async()=>{
        const querySnapshot = await   (collection(db, "login-Admin"));
          querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            // console.log("doc.data()", doc.data())
            // console.log("doc.id", doc.id)
            setGetProvider({...doc.data(),id: doc.id})
});

}
console.log("object", getProvider)
getData();
    },[])
  return (
    <div style={{ backgroundColor: "rgb(45, 62, 76)", height: "100vh" }}>
        <form onSubmit={loginAdmin} className='loginForm'>
          <h1 className='d-flex  justify-content-center'>Admin Login</h1>
      <TextField id="outlined-basic" label="username"  type='gmail' variant="outlined" onChange={(e)=>setAdminName(e.target.value)} />
      <TextField id="outlined-basic" label="Gmail"  type='gmail' variant="outlined" onChange={(e)=>setLoginGmail(e.target.value)} />
      <TextField id="outlined-basic" label="Password"  type='gmail' variant="outlined" onChange={(e)=>setLoginPassword(e.target.value)} />
            <Button variant="contained" type='submit'>Login</Button>
        </form>
    </div>
  )
}

export default Login