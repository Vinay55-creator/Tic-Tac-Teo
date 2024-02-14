let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".winner-msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  eanableBoxes();
  msgContainer.classList.add("hide");
  resetBtn.classList.remove("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO){//player0
      box.innerText = "O";
      turnO = false;
    }else{//PlayerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner ();
  })
});

const disableBoxes =()=>{
  for (let box of boxes){
    box.disabled = true;
  }
};
const eanableBoxes =()=>{
  for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) =>{
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  resetBtn.classList.add("hide");
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner")
        showWinner(pos1Val)
      }
    }
  }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);