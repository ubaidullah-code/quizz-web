import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
// import UserLogin from './pages/UserLogin';
// import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

import { Link } from 'react-router';
import CustomRoutes from './Components/CustomRoutes';
function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBpzoaV6tPolS69SMsNlPrQNUP-UanS4po",
    authDomain: "quizz-web1.firebaseapp.com",
    projectId: "quizz-web1",
    storageBucket: "quizz-web1.firebasestorage.app",
    messagingSenderId: "27331264374",
    appId: "1:27331264374:web:0cbb51b452da0461974457"
  };
  const app = initializeApp(firebaseConfig);
      const db = getFirestore(app); 
      
  return (
    
    <div className="App">
      <div>
        <div className='d-flex  justify-content-between px-3 py-3 bg-primary ' >
            <div>
            <h4 className='m-0'> logo</h4>
                </div>  
            <ul className='d-flex list-none m-0 gap-2' style={{listStyle: "none"}}>
                <Link style={{textDecoration: "none", color: "black"}} to={'/adminLogin'}><li>Admin Login</li></Link>
                <Link style={{textDecoration: "none", color: "black"}} to={'/userLogin'}><li>about</li></Link>
            </ul>
        </div>
                {/* <form onSubmit={addUser} className='mx-auto my-5' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", width: "50%" }}>
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
                </form> */}
    </div>
     <CustomRoutes/>
    </div>
  );
}

export default App;
