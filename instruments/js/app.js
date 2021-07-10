
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

let instruments = [];
instruments[0] = new Woodwind();
instruments[1] = new Percussion();
instruments[2] = new String();

let acGuitar = new String();
let elDrum = new Percussion();
let alSaxophone = new Woodwind();

alSaxophone.play();
elDrum.play();
acGuitar.play();
