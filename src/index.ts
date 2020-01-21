import { Person, Type2, } from "./interfaces";

const isOpen: boolean = false;

const myName: string = 'Danny';

const myAge: number = 29;

const list: number[] = [0, 1, 2];

//first item string, second item number
//tuple
const me: [string, number] = ['Danny', 29];

//enum
enum Job { 
  WebDev, 
  FullStack, 
  Developer
}

const job: Job = Job.FullStack;

const phone : any = 'Pixel';
const tablet: any = 3;

// functions
// ? for optional params
// const sayWord = (word?: string) : string => {

const sayWord = (word?: string) : string => {
  console.log(word || 'hello')
  return word || 'hello';
}

sayWord();

// default params
const sayAnotherWord = (word = "hello", ...otherStuff: string[]) : string => {
  console.log(otherStuff)
  return word;
}

sayAnotherWord('Danny', 'Kami', 'Bezi');

// implicit types in TS
let newName = 'Danny';
newName = 'Jon';
//newName = 10;

// Gets typed from initial decloration
let newNameTwo: string = newName;
//newNameTwo = 23;

// Union types with TS
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
}

makeMargin(10);
makeMargin('10');

// Null types
let dog: string = 'Duncan';
dog = null;
dog = 'Bezi';
//dog = 4;
dog = undefined;

// Interfaces

// const sayName = ({ name, age }: Person) : string => {
//   console.log(name)
//   return name;
// }

const sayName = ({ name, age }: Person) : Person => {
  console.log(name, age)
  return { name, age };
}

sayName({
  name: 'Danny'
});

sayName({
  age: 29,
  name: 'Danny'
});

// Enums numeric & string based
// Numeric
enum Type {
  Video, //0
  BlogPost, //1
  Quiz //2
}

const createContent = (contentType: Type) => {}
createContent(0)

// String 

const createContent2 = (contentType: Type2) => {}
createContent2(Type2.Quiz)
console.log('type2.Quiz', Type2.Quiz); //Quiz

// Classes
class Team {
  teamName: string;
  //public teamName: string, same as above;
  //private teamName: string, prevents outside usage;
  //readonly teamName: string, prevents change;

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    console.log(this.teamName);
    return 'goal';
  }

}

const Blazers = new Team('Blazers');

Blazers.score();
Blazers.teamName;

// Generics
const outputInput = <T>(arg: T): T => {
  return arg;
}

const output = outputInput('hi')
console.log(output);

outputInput(3)