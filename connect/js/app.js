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
            this.gameBoard.appendChild(blankCirc);

            console.log("help me");
        }
    }
}
};


let g = new GameBoard();
