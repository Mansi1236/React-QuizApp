import React, {useContext} from 'react' 
import { QuizContext } from '../helpers/Context'
import '../App.css';
import { Questions } from '../helpers/questions';

export default function EndScreen() {

const {score, setScore, GameState ,SetGameState} = useContext(QuizContext);
const restartQuiz = () => {
 setScore(0)
    SetGameState("menu")  
}


  return (
    <div className='endscreen'>
        
        <h1> Quiz Ended </h1>

        <h2> Your Score is : {score} </h2> 
<h3> {score}/{Questions.length} </h3>
       
  <button onClick= {restartQuiz}> Retry </button>      
        
    </div>
  )
}
