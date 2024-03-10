import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import data from "./components/Question.json";

function App() {
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [wattempt, setWattempt] = useState(0);

  const next = () => {
    if (ques < data.length) {
      setQues(ques + 1);
    }
  };

  const prev = () => {
    if (ques > 0) {
      setQues(ques - 1);
    }
    console.log(ques);
  };

  const calc = (e) => {
    setAttempt(attempt + 1);
    if (e.target.innerHTML == data[ques].answer) {
      alert("You chose the correct option");
      setScore(score + 1);
    } else {
      setWattempt(wattempt + 1);
      alert("You chose the wrong option");
    }
  };

  const quit = () => {
    setAttempt(0), setQues(0), setScore(0);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              next={next}
              prev={prev}
              index={ques}
              calc={calc}
              quit={quit}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result score={score} attempt={attempt} wrong={wattempt} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
