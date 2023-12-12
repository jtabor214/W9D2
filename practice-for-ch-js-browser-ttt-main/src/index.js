// Add your import statements for View and Game here
import View from "./ttt-view";
import Game from "../ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const boardView = document.querySelector('.ttt');
  const newGame = new Game();
  const newView = new View(newGame, boardView);

  newView.setupBoard();
 
});

