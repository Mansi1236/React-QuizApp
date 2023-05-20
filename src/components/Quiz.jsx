import React , {useState, useContext} from 'react'
import {Questions} from '../helpers/questions'
import { QuizContext } from '../helpers/Context'
import '../App.css';


export default function Quiz() {

  const  { score, setScore, GameState ,SetGameState} = useContext(QuizContext);
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState(" ")

  const nextQuestion = () =>  {
if (Questions[currentQuestion].answer === optionChosen) {
    setScore(score + 1)
}
//alert(score);
setCurrentQuestion(currentQuestion + 1)


  }

  const finishquiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
        setScore(score + 1)
    }
 
   SetGameState("endscreen") 


  }
    return (
    <div className='quiz'>
<h1> {Questions[currentQuestion].prompt} </h1>
     <div className='options'> 
     <button onClick={() => setOptionChosen("A")}>  {Questions[currentQuestion].optionA} </button>
     <button onClick={() => setOptionChosen("B")}>  {Questions[currentQuestion].optionB} </button>
     <button onClick={() => setOptionChosen("C")}>  {Questions[currentQuestion].optionC} </button>
     <button onClick={() => setOptionChosen("D")}>  {Questions[currentQuestion].optionD} </button>
     
     </div> 

     {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishquiz}> Finish Quiz </button>
     ) : 
     <button onClick={nextQuestion}> Next Question</button>
     
     }  
        
      
        
</div>
  )
}

