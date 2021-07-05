//setting up the circles under the drop class

class Drop{
    constructor(cx,cy,rad,col){
        this.x = cx;
        this.y = cy;
        this.rad = rad;
        this.col = col;
        this.speed = 1 + Math.random() * 10;
    }
    update(){
        this.y = this.y + this.speed;
        this.speed = this.speed + .8;
        fill(this.col);
        circle(this.x,this.y,this.rad);
    }
};

//creating new circles and placing them into an array to be called up with the update function
var mulCircles = [];
mulCircles[0] = new Drop(35,0,40,[171, 198, 235]);
mulCircles[1] = new Drop(135,0,40,[171, 198, 235]);
mulCircles[2] = new Drop(235,0,40,[171, 198, 235]);
mulCircles[3] = new Drop(335,0,40,[171, 198, 235]);
mulCircles[4] = new Drop(435,0,40,[171, 198, 235]);
mulCircles[5] = new Drop(80,0,40,[102, 122, 150]);
mulCircles[6] = new Drop(180,0,40,[102, 122, 150]);
mulCircles[7] = new Drop(280,0,40,[102, 122, 150]);
mulCircles[8] = new Drop(380,0,40,[102, 122, 150]);
mulCircles[9] = new Drop(480,0,40,[102, 122, 150]);

//ground class for the square at the bottom of the canvas
class Ground{
    constructor(gx,gy,gRad,gColor){
        this.gx= gx;
        this.gy= gy;
        this.gRad = gRad;
        this.gColor= gColor;
    }
    updateG(){
        fill(this.gColor);
        square(this.gx, this.gy, this.gRad);
    }
};

let hitGround = new Ground (0,480,500,[0,5,0]);

function setup(){
    createCanvas(500,500);
    background(223, 233, 247);
}

// probably a cleaner way to code the new drops but oops

function draw(){
    background(223, 233, 247);

    mulCircles[0].update();
    mulCircles[1].update();
    mulCircles[2].update();
    mulCircles[3].update();
    mulCircles[4].update();
    mulCircles[5].update();
    mulCircles[6].update();
    mulCircles[7].update();
    mulCircles[8].update();
    mulCircles[9].update();

    hitGround.updateG();
};