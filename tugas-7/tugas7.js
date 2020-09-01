// soal 1 
console.log("---------------------------------")

class Animal {
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name(){
        return this._name
    }
    get legs(){
        return this._legs
    }
    get cold_blooded(){
        return this._cold_blooded
    }
}

console.log("-----release0----------")
var sheep = new Animal("mbek");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("-----release1----------")

class Ape extends Animal {
    constructor(name) {
      super(name);
      this._legs = 2;
    }
  
    yell() {
      return console.log("Auooo");
    }
}
  
class Frog extends Animal {
    constructor(name){
        super(name);
    }

    jump() {
      return console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log("---------------------------------")
class Clock { 
    constructor({ template }) {
        this.template = template;
    }

    render() {
    var date = new Date();
  
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
  
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
  
    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
  
    var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
    console.log(output);
    }
  
    stop() {
        clearInterval(this.timer);
    };
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    };
  
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 