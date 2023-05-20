import React, {useContext} from 'react'
import { QuizContext } from '../helpers/Context'
import '../App.css';

export default function MainMenu() {
    const {GameState, SetGameState} = useContext(QuizContext)
  return (
    <div className='menu'>
      <button onClick={() => {SetGameState("quiz")}}> Start Quiz</button>
        
    </div>
  )
}

