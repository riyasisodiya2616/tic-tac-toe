let cells = document.querySelectorAll(".box");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset-btn");
let container = document.querySelector(".container");

let count = 0;
let playerO = true;

container.classList.remove("hidden");

const winconditions = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

const resetGame = () => {
    playerO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

cells.forEach((cell) =>{
    cell.addEventListener("click", ()=>{
        if(playerO === true){
            cell.innerText = "O";
            playerO = false;

        }
        else{
            cell.innerText ="X";
            playerO = true;
        }
        cell.disabled = true;
        checkWinner();
        count++;

     let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();

    }
    })

});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    container.classList.add("hidden");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let cell of cells) {
      cell.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let cell of cells) {
      cell.disabled = false;
      cell.innerText = "";
    }
  };

  
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablecells();
};

const checkWinner = () => {
  for (let condition of winconditions) {
    let val1 = cells[condition[0]].innerText;
    let val2 = cells[condition[1]].innerText;
    let val3 = cells[condition[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return true;
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);