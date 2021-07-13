//game logic containment

class Game{

    //class properties

    totalCircles = 0;
    foundCircles = 0;
    searchColor = "#72edcc";
    normalColor = "#bc72ed";
    gameZone = document.getElementById("gameZone");
    
    

    constructor(){
        for(var i = 0; i < 25; i++){
        //create circle
        let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        
        //circle style class
        newCircle.classList.add("gameCirc");
        newCircle.setAttribute("cx", Math.random() * 400);
        newCircle.setAttribute("cy", Math.random() * 400);

        //randomly reveal color
        if(Math.random() < .3){
            newCircle.dataset.hiddenColor = this.searchColor;
            this.totalCircles++;
        } else {
            newCircle.dataset.hiddenColor = this.normalColor;
            this.totalCircles++;
        };

        //mouse events

        //show color when hovering over circle
        newCircle.addEventListener("mouseover", (event) => {
        event.target.style.fill = event.target.dataset.hiddenColor;
        })

        //hide color when no longer hovering
        newCircle.addEventListener("mouseout", (event) => {
        event.target.style.fill = "#000000";
        })

        //clicking events

        newCircle.addEventListener("click", (event) =>{
            //remove clicked on circles if hidden color & search are the same
            if(event.target.dataset.hiddenColor == this.searchColor){
                event.target.remove();

            //store how many have been removed
            this.foundCircles++;

            //update foundbar
            this.foundBar.setPercent(this.foundCircles / this.totalCircles);

            };
        });

        //add to gameboard
        this.gameZone.appendChild(newCircle);
        };
    }
};

class FoundBar {
    element = getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
};

let g = new Game();