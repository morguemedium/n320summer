
class Drop{
    constructor(cx,cy,rad,col){
        this.x = cx;
        this.y = cy;
        this.rad = rad;
        this.col = col;
        this.speed = 1 + Math.random() * 3;
    }
    update(){
        this.y = this.y + this.speed;
        this.speed = this.speed + .5;
        fill(this.col);
        circle(this.x,this.y,this.rad);
    }
};

var mulCircles = [];
mulCircles[0] = new Drop(35,0,30,[171, 198, 235]);
mulCircles[1] = new Drop(135,0,30,[171, 198, 235]);
mulCircles[2] = new Drop(235,0,30,[171, 198, 235]);
mulCircles[3] = new Drop(335,0,30,[171, 198, 235]);
mulCircles[4] = new Drop(435,0, 30,[171, 198, 235]);

class Ground{
    constructor(gx,gy,gColor){
        this.gx= gx;
        this.gy= gy;
        this.gColor= gColor;
    }
    updateG(){}
};

let hitGround = new Ground (0,500,30,[0,5,0]);

function setup(){
    createCanvas(500,500);
    background(223, 233, 247);
}

function draw(){
    background(223, 233, 247);

    mulCircles[0].update();
    mulCircles[1].update();
    mulCircles[2].update();
    mulCircles[3].update();
    mulCircles[4].update();
}