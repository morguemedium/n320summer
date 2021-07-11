
class Instrument{
    constructor(loud,family,verb){
        this.loud = loud;
        this.family = family;
        this.verb = verb;
    }
    play(){
            console.log("Currently " + this.verb + this.family + " at " + this.loud + " volume.");
    }
};

//first base

class Woodwind extends Instrument{
    constructor(loud,family,verb){
    super(loud,family,verb);
    this.loud = 15;
    this.family = " woodwind";
    this.verb = "exhaling";
}
};

class Percussion extends Instrument{
    constructor(loud,family,verb){
        super(loud,family,verb);
        this.loud = 30;
        this.family = " percussion";
        this.verb = "smashing";
    }
};

class String extends Instrument{
    constructor(loud,family,verb){
        super(loud,family,verb);
        this.loud = 45;
        this.family = " string";
        this.verb = "strumming";
    }
};

//subsequent classes that fit in instrument

let instruments = [];
instruments[0] = new Woodwind();
instruments[1] = new Percussion();
instruments[2] = new String();

//array of instruments

let alSaxophone = new Woodwind();
let elDrum = new Percussion();
let acGuitar = new String();

alSaxophone.play();
elDrum.play();
acGuitar.play();

//instances to test code