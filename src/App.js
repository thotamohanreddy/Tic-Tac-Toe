import React,{useState,useEffect} from 'react';
import './App.css';
import Square from './Square';
import axios from 'axios';

const initialState = Array(9).fill("");
const players = [];
players.length = 2;

players[0] = prompt("Enter the name of the X player");
players[1] = prompt("Enter the name of the O player");


function App() {
  const [gameState, updateGameState] = useState(initialState);

  
  const [isXchance, updateIsXchance] = useState(false);
  const onSquareClicked = (index) =>
  {
    let strings = Array.from(gameState);
    if (strings[index] === "")
    {
      strings[index] = isXchance ? "X" : "O";
      updateGameState(strings);
      updateIsXchance(!isXchance);
    }
    else
    {
      alert(`You can't change this box value it's already played`)
    }
  }
  useEffect(() => {
    const winner = checkWinner();
    var gameOver=true;
    for (let i = 0; i < 9; i++)
    {
      if (gameState[i] === "")
      {
        gameOver = false;
      }
    }
    if (gameOver)
    {
      alert(`Game is over all the boxes are played`)
    }
    else if (winner==="X")
    {
      alert(`Booyahhh! ${players[0]} has won the Game!`)
      
    }
    else if (winner === "O")
    {
      alert(`Booyahhh! ${players[1]} has won the Game!`)
    }
    if (gameOver || winner)
    {
      updateGameState(initialState)
    }
  }, [gameState])
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++)
    {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c])
      {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <div className="app-header">
      <p className="player-display">{isXchance ? `${players[0]}`: `${players[1]}`}'s Turn</p>
      <p className="heading-text">Tic-Tac-Toe Pro 2022</p>
        <div class="row jc-center">
        <Square className='b-bottom-right' state={gameState[0]} onClick={ ()=>onSquareClicked(0)} />
        <Square className='b-bottom-right' state={gameState[1]} onClick={ ()=>onSquareClicked(1)}/>
        <Square className='b-bottom' state={ gameState[2]} onClick={ ()=>onSquareClicked(2)}/>
        </div>
        <div class="row jc-center">
        <Square className='b-bottom-right' state={ gameState[3]} onClick={ ()=>onSquareClicked(3)}/>
        <Square className='b-bottom-right' state={ gameState[4]} onClick={ ()=>onSquareClicked(4)}/>
        <Square className='b-bottom' state={ gameState[5]} onClick={ ()=>onSquareClicked(5)}/>
        </div>
        <div class="row jc-center">
        <Square className='b-right' state={ gameState[6]} onClick={ ()=>onSquareClicked(6)}/>
        <Square className='b-right' state={ gameState[7]} onClick={ ()=>onSquareClicked(7)}/>
        <Square state={ gameState[8]} onClick={ ()=>onSquareClicked(8)}/>
      </div>
      <button class="clear-button">Clear Button</button>
    </div>
  );
}


export default App;
