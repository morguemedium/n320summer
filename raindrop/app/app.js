
class Drop{
    constructor(cx,cy,rad,col){
        this.x = cx;
        this.y = cy;
        this.rad = rad;
        this.col = col;
    }
    update(){
        this.y = this.y + 5;
        fill(this.col);
        circle(this.x,this.y,this.rad);
    }
};

var mulCircles = [];
mulCircles[0] = new Drop(35,0,30,[85, 147, 181]);
mulCircles[1] = new Drop(135,0,30,[85, 147, 181]);
mulCircles[2] = new Drop(235,0,30,[85, 147, 181]);
mulCircles[3] = new Drop(335,0,30,[85,147,181]);

class Ground{
    constructor(gx,gy,gColor){
        this.gx= gx;
        this.gy= gy;
        this.gColor= gColor;
    }
}

function setup(){
    createCanvas(500,500);
    background(177, 242, 242);
}

function draw(){
    background(177, 242, 242);

    mulCircles[0].update();
    mulCircles[1].update();
    mulCircles[2].update();
}