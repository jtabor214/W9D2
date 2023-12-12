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
        li.onclick = this.handleClick;
        li.dataset.row = i;
        li.dataset.col = j;
        grid.appendChild(li);
      });
    });
    this.el.appendChild(grid);
    console.log(this.el, grid);
  };
  
  handleClick(e) {
    // console.log(e);
    this.game.playMove([e.target.dataset]);
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;