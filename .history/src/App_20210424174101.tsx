import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty } from './API';

interface AnswerObject  {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  };
  const nextQuestion = () => {


  };

  return (
    <div>
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ): null}
      {!gameOver ? <p className="score">Score: </p> : null}
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
