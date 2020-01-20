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
newName = 10;

// Gets typed from initial decloration
let newNameTwo: string = newName;
newNameTwo = 23;

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
dog = 4;
dog = undefined;

// Interfaces
interface Person {
  name: string,
  age?: number,
}

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