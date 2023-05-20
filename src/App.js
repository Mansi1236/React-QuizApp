import './App.css';
import { useState, useEffect, useContext} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Context';


function App() {

const [GameState, SetGameState] = useState("menu")

const [score, setScore] = useState(0)
  return (

    <div className="App">
      <h1> Quiz App</h1>

<QuizContext.Provider value={{GameState, SetGameState, score, setScore}}> 

{GameState === "menu" && <MainMenu/>}
{GameState === "quiz" && <Quiz/>}
{GameState === "endscreen" && <EndScreen/>}

</QuizContext.Provider>



     
      
    </div>
  );
}

export default App;
