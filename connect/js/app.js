class GameBoard{
    //connect to index file

    gameBoard = document.getElementById("gameBoard");
    currentPlayer = 1;

    constructor(){
        
        //let's make the grid
        for(var c = 1; c < 7; c++){
            for(var q = 1; q < 7; q++){
            let blankCirc = document.createElementNS("http://www.w3.org/2000/svg","circle");
            
             let blankVal = [0,1,2,3,4,5,6,
                        7,8,9,10,11,12,13,
                        14,15,16,17,18,19,20,
                        21,22,23,24,25,26,27,
                        28,29,30,31,32,33,34,
                        35,36,37,38,39,40,41];


            blankCirc.classList.add("boardCirc");
            blankCirc.setAttribute("cx", 110 * c);
            blankCirc.setAttribute("cy", 90 * q);
            blankCirc.setAttribute("r", 30);
            blankCirc.setAttribute("fill", "#f5eded");
            blankCirc.addEventListener("click",changeToken);
           
            this.gameBoard.appendChild(blankCirc);


            console.log("help");
        }
    }
}
};

function changeToken(event){
    event.target.getAttribute("player-one");
    
}

class PlayerClass{
    constructor(currentP, tokenCol){
        this.currentP = currentP;
        this.tokenCol = tokenCol;
    }
    updateColor(){
        console.log("Player class");
    }
}

let playerOne = new PlayerClass(1, "#f28889");
let playerTwo = new PlayerClass(2, "#88f292");

let g = new GameBoard();
playerOne.updateColor();
playerTwo.updateColor();
