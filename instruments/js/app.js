class Instrument{
    constructor(loud,family,verb){
        this.loud = loud;
        this.family = family;
        this.verb = verb;
    }
    play(){
        console.log("Currently playing " + this.family + " at " + this.loud + " with " + this.verb);
    }
};

class Woodwind extends Instrument{
    constructor(loud,family,verb){
    super(loud,family,verb);
    this.loud = 10;
}
};
class Percussion extends Instrument{};
class String extends Instrument{};