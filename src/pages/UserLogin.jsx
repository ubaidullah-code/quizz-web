import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@mui/material';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router';
import { GlobalContext } from '../Context/Context';


const UserLogin = () => {
    const[userName ,setuserName]=useState("")
      const[fatherName ,setFatherName]=useState("")
      const[rollNum ,setRollNum]=useState("")
      const[phoneNumber ,setPhoneNumber]=useState("")
      const[batchName ,setBatchName]=useState("")
      const[gmailCheck ,setGmailCheck]=useState("")
      const[trainerName ,setTrainerName]=useState("")
      const[timingCheck ,setTimingCheck]=useState("")
      const {state,dispatch} = useContext(GlobalContext)

    const navigate = useNavigate();

    //  const app = initializeApp(firebaseConfig);
     const db = getFirestore();
   const addUser = async(e)=>{
        e.preventDefault();
        if (!userName || !fatherName || !batchName || !rollNum || !trainerName || !timingCheck || !gmailCheck || !phoneNumber) {
          alert("Please fill all the columns");
          return;
      }
            try {
                emptyUserProfile()
                const docRef = await addDoc(collection(db, "usersData"), {
                  userName: userName,
                  fatherName: fatherName,
                  batchNumber: batchName,
                  rollNumber: rollNum,
                  trainerName: trainerName,
                  classTiming: timingCheck,
                  UserGmail: gmailCheck,
                  userPhoneNumber: phoneNumber,


                });
                emptyUserProfile()  
                console.log("Document written with ID: ", docRef.id);
                dispatch({type: "USER_LOGIN", payload: {userName, fatherName, batchName, rollNum, trainerName, timingCheck, gmailCheck, phoneNumber}})
                navigate('/test');
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              
        } 
        
        const emptyUserProfile =()=>{
                setBatchName("")
                setFatherName("")
                setGmailCheck("")
                setPhoneNumber("")
                setRollNum("")
                setTimingCheck("")
                setTrainerName("")
                setuserName("")
        }
  return (
    <div>
        {/* <div className='d-flex  justify-content-between px-3 py-3 bg-primary ' >
            <div>
            <h4 className='m-0'> logo</h4>
                </div>  
            <ul className='d-flex list-none m-0 gap-2' style={{listStyle: "none"}}>
                <li>home</li>
                <li>about</li>
            </ul>
        </div> */}
               <form onSubmit={addUser} className='mx-auto my-5' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", width: "50%" }}>
                    <div style={{display: "flex", gap: "20px", justifyContent: "space-between" , width: "100%"}}>
                <TextField id="outlined-basic" type='username' label="Name" variant="outlined" onChange={(e)=>setuserName(e.target.value)} />
                <TextField id="outlined-basic"  type='username' label="Father's Name" variant="outlined" onChange={(e)=>setFatherName(e.target.value)} />

                    </div>
                    <div style={{display: "flex", gap: "20px" , justifyContent: "space-between" , width: "100%"}}>
                <TextField id="outlined-basic" type='name' label="Batch Name" variant="outlined" onChange={(e)=>setBatchName(e.target.value)} />
                <TextField id="outlined-basic" type='number' label="Roll Number" variant="outlined" onChange={(e)=>setRollNum(e.target.value)} />
                    
                    </div>
                    <div style={{display: "flex", gap: "20px" , justifyContent: "space-between" , width: "100%"}}>
                <TextField id="outlined-basic" type='username' label="Trainer Name" variant="outlined" onChange={(e)=>setTrainerName(e.target.value)} />
                <TextField id="outlined-basic" label="Gmail"  type='gmail' variant="outlined" onChange={(e)=>setGmailCheck(e.target.value)} />
                    </div>
                    <div style={{display: "flex", gap: "20px" , justifyContent: "space-between" , width: "100%"}}>
                <TextField id="outlined-basic" label="Timing" type='sreach'  variant="outlined" onChange={(e)=>setTimingCheck(e.target.value)} />
                <TextField id="outlined-basic" label="Phone Number" type='number' variant="outlined" onChange={(e)=>setPhoneNumber(e.target.value)} />
                    </div>
                    <div style={{display: "flex ", justifyContent:"space-between", width: "100%"}}>
                    <Button type='submit' variant='contained' style={{background:"gray"}}>CLose</Button>
                    <Button type='submit' variant='contained' >Submit</Button>

                    </div>
                </form>
    </div>
  )
}

export default UserLogin