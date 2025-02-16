import { Button, TextField } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import "./Main.css"
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom' // Changed from 'react-router' to 'react-router-dom'
import { GlobalContext } from '../Context/Context'

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);
  const [loginGmail, setLoginGmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [adminName, setAdminName] = useState("")
  const [getProvider, setGetProvider] = useState([])
  const db = getFirestore();
  const {id} = getProvider

  const loginAdmin = async(e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "login-Admin"), {
        first: adminName,
        gmail: loginGmail,
        userid: id,
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Dispatch login action before navigation
      dispatch({
        type: "USER_LOGIN",
        payload: {
          userName: adminName,
          email: loginGmail,
          isAdmin: true
        }
      });

      navigate('/addQuestion'); // Now navigation should work with proper auth state
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const getData = async() => {
      const querySnapshot = await getDocs(collection(db, "login-Admin"));
      querySnapshot.forEach((doc) => {
        setGetProvider({...doc.data(), id: doc.id})
      });
    }
    console.log("object", getProvider)
    getData();
  }, [])

  return (
    <div style={{ backgroundColor: "rgb(45, 62, 76)", height: "100vh" }}>
      <form onSubmit={loginAdmin} className='loginForm'>
        <h1 className='d-flex justify-content-center'>Admin Login</h1>
        <TextField id="outlined-basic" label="username" type='gmail' variant="outlined" onChange={(e)=>setAdminName(e.target.value)} />
        <TextField id="outlined-basic" label="Gmail" type='gmail' variant="outlined" onChange={(e)=>setLoginGmail(e.target.value)} />
        <TextField id="outlined-basic" label="Password" type='gmail' variant="outlined" onChange={(e)=>setLoginPassword(e.target.value)} />
        <Button variant="contained" type='submit'>Login</Button>
      </form>
    </div>
  )
}

export default Login