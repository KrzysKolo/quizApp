import React from 'react'

const App = () => {
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
    </div>
  )
}

export default App
