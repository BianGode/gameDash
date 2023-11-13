import { useState } from "react";
import "../styles/TTT.css";

export default function TTT() {
  // player state
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
    winner.innerText = ''
  };

  // what i need to do
  // i need to check if the winning numbers match the id's
  // How do i do that

  const getNumbers = () => {
    // const cards = document.getElementsByClassName("tttCard");

    // let xx = [];
    // let oo = [];

    // for (let index = 0; index < cards.length; index++) {
    //   xx.push(cards[index].innerText);
    // }

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
      }
    });
  };

  const handleClick = (event) => {
    console.log(event.target);
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
  };

  return (
    <div className="centerWrap">
      <h3 id="winningStatus">Winner here</h3>
      <div className="wrapperTTT">
        <div className="tttCard" id="0" onClick={(e) => handleClick(e)}></div>
        <div className="tttCard" id="1" onClick={(e) => handleClick(e)}></div>
        <div className="tttCard" id="2" onClick={(e) => handleClick(e)}></div>

        <div className="tttCard" id="3" onClick={(e) => handleClick(e)}></div>
        <div className="tttCard" id="4" onClick={(e) => handleClick(e)}></div>
        <div className="tttCard" id="5" onClick={(e) => handleClick(e)}></div>

        <div className="tttCard" id="6" onClick={(e) => handleClick(e)}></div>
        <div className="tttCard" id="7" onClick={(e) => handleClick(e)}></div>
        <div className="tttCard" id="8" onClick={(e) => handleClick(e)}></div>
      </div>
      <button onClick={() => clearGame()}>Reset Game</button>
    </div>
  );
}
