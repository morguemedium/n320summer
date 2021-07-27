class GameBoard{
    //connect to index file

    gameBoard = document.getElementById("gameBoard");

    constructor(){
        //let's make the grid
        for(var c = 1; c < 7; c++){
            for(var q = 1; q < 7; q++){
            let blankCirc = document.createElementNS("http://www.w3.org/2000/svg","circle");

            blankCirc.setAttribute("cx", 110 * c);
            blankCirc.setAttribute("cy", 90 * q);
            blankCirc.setAttribute("r", 30);
            blankCirc.setAttribute("fill", "#f5eded");
            blankCirc.addEventListener("click",changeToken);
            this.gameBoard.appendChild(blankCirc);

            console.log("help me");
        }
    }
}
};

function changeToken(event){
    event.target.setAttribute("dataset", "selectedOne");
};

class PlayerClass{
    constructor(currentP, tokenCol){
        this.currentP = currentP;
        this.tokenCol = tokenCol;
    }
    moveToken(){
        console.log("Currently setting up player function");
    }
};

let playerOne = new PlayerClass(1, "#f28889");
let playerTwo = new PlayerClass(2, "#88f292");

let g = new GameBoard();
playerOne.moveToken();
playerTwo.moveToken();
