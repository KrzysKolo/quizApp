import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard';
import { fetchQuizQestions } from './API';
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {
  //const { loading, setLoading } = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(fetchQuizQestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {

  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  };
  const nextQuestion = () => {


  };

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p >Loading Questions... </p>
    {/*   <QuestionCard
        questionNr={number + 1}
        totalGuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}

      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
