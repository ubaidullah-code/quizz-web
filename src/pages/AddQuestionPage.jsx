import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import "./Main.css";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const AddQuestionPage = () => {
    const [question, setQuestion] = useState("");
    const [optionCheck, setOptionCheck] = useState(["", "", "", ""]);
    const [answerCHeck, setAnswerCHeck] = useState("");

    const db = getFirestore();

    const questionAdd = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "question"), {
                question: question,
                option: optionCheck,
                answer: answerCHeck
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // Reset fields after submission
        setQuestion("");
        setOptionCheck(["", "", "", ""]);
        setAnswerCHeck("");
    };

    return (
        <div style={{ backgroundColor: "rgb(45, 62, 76)", height: "100vh" }}>
            <form onSubmit={questionAdd} className='questionForm'>
                <TextField 
                    id="outlined-basic" 
                    label="Question"  
                    type="text" 
                    variant="outlined" 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)} 
                />
                
                {optionCheck.map((ele, index) => (
                    <TextField 
                        key={index} 
                        value={ele} 
                        id="outlined-basic" 
                        label={`Option ${index + 1}`}  
                        type="text" 
                        variant="outlined" 
                        onChange={(e) => {
                            const updatedOptions = [...optionCheck];
                            updatedOptions[index] = e.target.value;
                            setOptionCheck(updatedOptions);
                        }} 
                    />
                ))}
                
                <TextField 
                    id="outlined-basic" 
                    label="Answer"  
                    type="text" 
                    variant="outlined" 
                    value={answerCHeck}
                    onChange={(e) => setAnswerCHeck(e.target.value)} 
                />
                
                <Button variant='outlined' type='submit'>Add Question</Button>
            </form>
        </div>
    );
}

export default AddQuestionPage;
