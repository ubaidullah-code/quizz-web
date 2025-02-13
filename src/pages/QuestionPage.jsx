import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const QuestionPage = () => {
    const [getDataQues, setGetDataQues] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [results, setResults] = useState({}); // To store correct/incorrect feedback
    const db = getFirestore();

    useEffect(() => {
        const getDataQuestion = async () => {
            const querySnapshot = await getDocs(collection(db, "question"));
            const dataCheck = [];

            querySnapshot.forEach((doc) => {
                dataCheck.push(doc.data());
            });

            setGetDataQues(dataCheck);
        };

        getDataQuestion();
    }, []);

    // Handle answer selection
    const handleChange = (questionIndex, value) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: value,
        }));
    };

    // Validate answers
    const checkAnswers = () => {
        const resultCheck = [];
        getDataQues.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                resultCheck[index] = `${index + 1}: ${selectedAnswers[index] === question.answer ? "Correct ✅" : "Incorrect ❌"}`;
                    
                
            } else {
                resultCheck[index] = "Incorrect ❌";
            }
        });
        setResults(resultCheck);
        console.log("resultCheck", resultCheck.length )
    };

    return (
        <div>
            {getDataQues.map((ele, i) => (
                <div key={i} style={{ marginBottom: "20px" }}>
                    <h4>{ele.question}</h4>
                    <FormControl component="fieldset">
                        <FormLabel>Choose an answer</FormLabel>
                        <RadioGroup
                            value={selectedAnswers[i] || ""}
                            onChange={(e) => handleChange(i, e.target.value)}
                        >
                            {ele.option.map((opt, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={opt}
                                    control={<Radio />}
                                    label={opt}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    {results[i] && <p style={{ fontWeight: "bold" }}>{results[i]}</p>}
                </div>
            ))}

            <Button variant="contained" color="primary" onClick={checkAnswers}>
                Submit Answers
            </Button>
        </div>
    );
};

export default QuestionPage;
