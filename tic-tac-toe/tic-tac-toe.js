let playerchoice = 'X';
let moved = false;
const buttons = [];

for (let i = 1; i <= 9; i++) {
    const btn = { doc: document.querySelector(`.btn${i}`), move: '' };
    btn.doc.addEventListener("click", () => gameplay(i));
    buttons.push(btn);
}

function gameplay(e) {
    const btn = buttons.find(btn => btn.doc === document.querySelector(`.btn${e}`));
    if (playerchoice === 'X' && !moved) {
        btn.doc.innerHTML = `<img src="x-tictactoe.png" class="img-x">`;
        moved = true;
        btn.move = 'X';
        console.log(btn.move);
        playerchoice = 'O';
    } else if (playerchoice === 'O' && moved) {
        btn.doc.innerHTML = `<img src="o-tictactoe.png" class="img-o">`;
        moved = false;
        btn.move = 'O';
        console.log(btn.move);
        playerchoice = 'X';
    }

    const lines = [[1, 2, 3], [3, 6, 9], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [1, 5, 9], [3, 5, 7]];
    if 
    (lines.some(line =>
 line.every(num => buttons[num - 1].move === btn.move))){
  alert(`${btn.move} won`);}
  else if (buttons.every(btn => btn.move !== '')) {
    alert("It's a draw!");
}

}






