import React, { useState } from "react";

function ReactQuiz() {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    { q: "2+2", opt: [1, 2, 3, 4], correct: 4 },
    { q: "2*2*2-8", opt: [8, 0, -2, 1], correct: 0 },
    { q: "3+3+3", opt: [0, 333, 6, 9], correct: 9 },
    { q: "4*4/4", opt: [4, 0, 8, 16], correct: 4 },
  ];

  function handleClick(optionValue) {
    // let arr = [];

    if (question < questions.length - 1) {
      setQuestion(question + 1);
    }
    setAnswer([...answer, optionValue]);
    console.log([...answer, optionValue]);

    if (optionValue === questions[question].correct) {
      setScore(score + 1);
    }
    console.log(setScore);

    // let arr2 = arr.push.optionValue;
    // console.log(arr2);
  }

  return (
    <>
      <div className="wrapper">ReactQuiz</div>
      <div className="que">
        <h2>{questions[question].q}</h2>
        <div className="paraHead">
          {questions[question].opt.map((option, index) => (
            <p key={index} onClick={() => handleClick(option)}>
              {option}
            </p>
          ))}
        </div>
        {/* <h3>{answer} </h3> */}
        <h4>Your Score: {score}</h4>
      </div>
    </>
  );
}

export default ReactQuiz;
