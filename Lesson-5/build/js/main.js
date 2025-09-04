"use strict";
// <== CLASSES ==>
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `My Age is ${this.age}`;
    }
}
const Ahmed = new Coder("Ahmed", "Drake", 25);
console.log(Ahmed.getAge());
// SUBCLASS
class WebDeveloper extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I code in ${this.lang}`;
    }
}
const Haris = new WebDeveloper("HP", "Haris", "Travis Scott", 25);
console.log(Haris.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Tafu = new Guitarist("Ustaad Tafu", "Guitar");
console.log(Tafu.play("Strums"));
// USING STATIC IN A CLASS
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Ali = new Peeps("Ali");
const Umer = new Peeps("Haris");
const Rehman = new Peeps("Rehman");
console.log(Ali.id);
console.log(Umer.id);
console.log(Rehman.id);
console.log(Peeps.count);
// GETTERS & SETTERS
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("The Param Value is not an Array!");
    }
}
const myBands = new Bands();
myBands.data = ["Karakoram", "Strings", "Jal"];
console.log(myBands.data);
console.log(myBands.data.includes("Karakoram"));
myBands.data = [...myBands.data, "Kaavish"];
console.log(myBands.data);
