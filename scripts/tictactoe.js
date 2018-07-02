var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
var playerSelections=[];
  handleClick = function(event) {
    console.log("click")
    var cell = event.target;
    cell.innerHTML = currentPlayer;
     if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
  
    playerSelections.push(parseInt(cell.id));
  
    if(checkWinner(playerSelections)) {
      alert("Player " + currentPlayer + " wins!")
      resetGame();
    }
  
    if(checkDraw()) {
      alert("Draw!");
      resetGame();
    }
  
    // Swap players
    currentPlayer = nextPlayer;
    }
  
  var cells = document.querySelectorAll("td");

for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick)
};

function checkWinner(){
    console.log("loop 1")
    for(i=0;i<winningCombinations.length;i++){
        console.log("loop 2")
       var  matches=0
        for(g=0;g<winningCombinations[i].length;g++){
        console.log(matches)
        if(playerSelections.includes(winningCombinations[i][g])){
        matches++
        }
        if(matches == 3){
        return true
        }
    }
}
}

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
  } 

  function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }
  }


   