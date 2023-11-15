import { useState } from "react";
import "../styles/TTT.css";

export default function TTT() {
  // player state
  const [previousWin, setPreviousWin] = useState(
    localStorage.getItem("playerArray")
      ? localStorage.getItem("playerArray").split("")
      : ""
  );
  const [game, setGame] = useState(true);
  const [player, setPlayer] = useState("x");
  const winner = document.getElementById("winningStatus");

  const winningNumbers = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const clearGame = () => {
    const cards = document.getElementsByClassName("tttCard");
    for (let index = 0; index < cards.length; index++) {
      cards[index].innerText = "";
    }
    setPlayer("x");
    winner.innerText = "";
    document.querySelector(".resetAlert").classList.remove("resetAlertOn");
    setGame(true);
  };

  // what i need to do
  // i need to check if the winning numbers match the id's
  // How do i do that

  const getNumbers = () => {
    // const cards = document.getElementsByClassName("tttCard");

    // assign the x's to xx variable and o'x to oo variable
    // comment above is previous idea.
    // I now want to get al squares and assign them to a single array

    //
    winningNumbers.forEach((combination) => {
      const zero = document.getElementById(combination[0]).innerText;
      const one = document.getElementById(combination[1]).innerText;
      const two = document.getElementById(combination[2]).innerText;

      if (zero == player && one == player && two == player) {
        winner.innerText = `Player ${player} Won! `;
        // if localstorage playerArray exist then add as string then separate later via
        if (localStorage.getItem("playerArray")) {
          const currStorage = localStorage.getItem("playerArray");
          console.log(currStorage);
          localStorage.setItem("playerArray", currStorage + player);
          setPreviousWin(localStorage.getItem("playerArray").split(''))
        } else {
          localStorage.setItem("playerArray", player)
          setPreviousWin(localStorage.getItem("playerArray").split(''))
        }
        console.log(localStorage.getItem("playerArray"));
        setGame(false);
      }
    });
  };

  const handleClick = (event) => {
    console.log(event.target);
    if (game) {
      // event.target.innerText = ''
      if (player == "x" && event.target.innerText == "") {
        event.target.innerText = "x";
        getNumbers();
        setPlayer("o");
      } else if (player == "o" && event.target.innerText == "") {
        event.target.innerText = "o";
        getNumbers();
        setPlayer("x");
      }
    } else {
      document.querySelector(".resetAlert").classList.add("resetAlertOn");
    }
  };

  function clearScoreBoard() {
    if(previousWin !== '') {
      localStorage.removeItem("playerArray")
      setPreviousWin('')
    }
  }


  return (
    <div className="centerWrap">
      <div className="scoreBoardTTT">
        <h4>Previous Wins</h4>
        {
        previousWin !== '' 
        ? previousWin.map((el) => {
          return <p>Player {el}</p>;
        })
        : <p>No wins yet...</p>
      }
        <button
          className="clearScoreBoard"
          onClick={() => clearScoreBoard()}
        >
          Clear Score
        </button>
      </div>
      <div className="gameTTTWrap">
        <h3 id="winningStatus">Winner here</h3>
        <div className="wrapperTTT">
          <div
            className="tttCard zero"
            id="0"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="tttCard one"
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="tttCard two"
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>

          <div
            className="tttCard three"
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="tttCard four"
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="tttCard five"
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>

          <div
            className="tttCard six"
            id="6"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="tttCard seven"
            id="7"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="tttCard eight"
            id="8"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
        <button onClick={() => clearGame()}>Reset Game</button>
        <div className="resetAlert">
          <h3>Reset game first</h3>
        </div>
      </div>
    </div>
  );
}
