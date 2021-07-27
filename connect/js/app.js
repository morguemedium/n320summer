class GameBoard{
    //connect to index file

    gameBoard = document.getElementById("gameBoard");
    currentPlayer = 1;

    constructor(){
        
        //let's make the grid
        for(var c = 1; c < 7; c++){
            for(var q = 1; q < 7; q++){
            let blankCirc = document.createElementNS("http://www.w3.org/2000/svg","circle");
            
            blankCirc.classList.add("boardCirc");
            blankCirc.setAttribute("cx", 110 * c);
            blankCirc.setAttribute("cy", 90 * q);
            blankCirc.setAttribute("r", 30);
            blankCirc.setAttribute("fill", "#f5eded");
            blankCirc.addEventListener("click",changeToken);

            for (let s = 0; s < blankCirc.length; s++){
                blankCirc[s].onclick = () => {
                    if (blankCirc[s + 7]){
                        blankCirc[s].classList.add("selected");
                        blankCirc[s].classList.add("player-one");
                        currentPlayer = 2;
                    } else if(this.currentPlayer = 2){
                        blankCirc[s].classList.add("selected");
                        blankCirc[s].classList.add("player-two");
                    }
                }
            }
           
            this.gameBoard.appendChild(blankCirc);


            console.log("help me");
        }
    }
}
};

function changeToken(event){
    event.target.getAttribute("fill", "#d488f2");
    
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
