class View {
  constructor(game, el) {
    this.game = game; 
    this.el = el;
  }
  
  setupBoard() {
    /** @type {HTMLUListElement} */
    const grid = document.createElement('ul');
    [0, 1, 2].forEach((i)=>{
      [0, 1, 2].forEach((j)=>{
        const li = document.createElement('li');
        li.onclick = (e) => this.handleClick(e);
        li.classList.add("text-white", "text-center", "text-8xl", "align-middle");
        li.style.lineHeight = "215px";
        li.dataset.row = i;
        li.dataset.col = j;
        grid.appendChild(li);
      });
    });
    this.el.appendChild(grid);
    console.log(this.el, grid);
  };
  
  handleClick(e) {
    /**@type {HTMLLIElement} */
    const boardSpace = e.target;
    const pos = [boardSpace.dataset.row, boardSpace.dataset.col];
    try {
      this.game.playMove(pos);
      const mark = this.game.board.grid[pos[0]][pos[1]];
      boardSpace.classList.toggle("move");
      boardSpace.innerText = mark;
      const winner = this.game.winner();
      if (!winner) return;
      alert(`The winner is ${winner}!! Congratulations!`);
    } catch {
      alert('invalid!! bad >:( you used a space that was already occupied!!! :( bad bad bad');
    }
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;