// <== CLASSES ==>
class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `My Age is ${this.age}`;
  }
}
const Ahmed = new Coder("Ahmed", "Drake", 25);
console.log(Ahmed.getAge());
// SUBCLASS
class WebDeveloper extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I code in ${this.lang}`;
  }
}
const Haris = new WebDeveloper("HP", "Haris", "Travis Scott", 25);
console.log(Haris.getLang());
// IMPLEMENTING INTERFACE TO A CLASS
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
const Tafu = new Guitarist("Ustaad Tafu", "Guitar");
console.log(Tafu.play("Strums"));
// USING STATIC IN A CLASS
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
const Ali = new Peeps("Ali");
const Umer = new Peeps("Haris");
const Rehman = new Peeps("Rehman");
console.log(Ali.id);
console.log(Umer.id);
console.log(Rehman.id);
console.log(Peeps.count);
// GETTERS & SETTERS
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("The Param Value is not an Array!");
  }
}
const myBands = new Bands();
myBands.data = ["Karakoram", "Strings", "Jal"];
console.log(myBands.data);
console.log(myBands.data.includes("Karakoram"));
myBands.data = [...myBands.data, "Kaavish"];
console.log(myBands.data);
