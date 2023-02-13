// let regExp: RegExp = new RegExp("ab+c");

import { type } from "os";
import { findConfigFile, NumericLiteral } from "typescript";

// let set: Set<number> = new Set([1, 2, 3]);
// let array: Array<number> = [1, 2, 3];

// /** A first in first out collection */
// class Queue<T> {
//   private data: Array<T> = [];
//   push(item: T) {
//     this.data.push(item);
//   }
//   pop(): T | undefined {
//     return this.data.shift();
//   }
// }
// let queue: Queue<number> = new Queue();

// //Array
// let arr: Array<number> = [];
// //OR
// let arr2: number[] = [];

// arr2 = [1];
// arr2 = ["ashish"]; //error

// //array of fixed length

// let tuple : [number,number ] = [0,0]
// tuple = [1,2];
// tuple = [1] //error must be 2
// tuple = [1,2,3] //error must be 2
// tuple = ["elite",1337] //error must be number

// let center: {x:number, y:number} = {
//     x:0,
//     y:0
// }

// let unit : {x:number, y: number} = {
//     x:0,
//     y:0
// }

// type Point = {x:number, y:number};

// let center : Point = {
//     x:1,
//     y:2
// }

// let unit : Point = {
//     x:1,
//     y:2
// }

// function add (a:number, b:number):number{
//     return a+b;
// }

// function log(message:string) :void{
//     console.log("LOG:", message)
// }

// function sum(...values:number[]){
//     return values.reduce((previous,current) =>{
//         return previous + current
//     })
// }
// sum(1,2); //3
// sum(1,2,3) //6

// let add;
// add = function  (a:number,b:number) :number{
//     return a+b;
// }
// type Add =  (a:number, b:number) => number;
// let add :Add = (a,b) =>{
//     return a+b
// };
// add("ak","b"); //error

// type system is structural it does not care about names of the types
// type User = {id:string};
// type Product = {id:string};

// let user : User = {id:"ak__"};
// let product : Product = {id:"vs code"};
// user = product //so despite of having different type it is not giving the error because of same structure.

// type Point2D = {x:number , y:number};
// type Point3D = {x:number, y:number, z:number};

// let point2D = {x:1,y:12};
// let point3D = {x:12,y:13,z:32};

// //extra info is OK
// point2D = point3D //no error

// function takesPoint2D (point:Point2D){ /**do something */}
// takesPoint3D(point3D) //no error because it gets what it wants

// /**Error : Missing Info */

// point3D = point2D; //error
// function takesPoint3D(point:Point3D){
//     /**.... */
// }
// takesPoint3D(point2D) //error

// // class in typescript
// class Animal {
//  private name: string; //with this outside access is going to be error
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters} m.`);
//   }
// }

// let cat = new Animal("cat");
// cat.move(10);
// cat.name = "Dog" //GIVE ERROR TSC

// class Animal {
//   protected name: string; //with this outside access is going to be error
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(distanceInMeters: number): void {
//     console.log(`${this.name} moved ${distanceInMeters} m.`);
//   }
// }
// class Fly extends Animal {
//   fly(distanceInMeters: number) {
//     console.log(this.name, "flew", distanceInMeters);
//   }
// }
// let eagle = new Fly("Eagle");
// eagle.fly(10);

//generics
/** A FIFO (first in first out ) collection */
// class Queue {
//   data = [];
//   push(item) {
//     this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// } // so this is general type =
// if we use it for the string we will get the run time error

// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }
//   pop(): number {
//     return super.pop();
//   }
// }

// let queueAk = new NumberQueue();
// queueAk.push(123);
// console.log(queueAk.pop().toPrecision());

// class Queue<T> {
//   data : T[] = [];
//   push(item: T) :void {
//     this.data.push(item);
//   }
//   pop(): T | undefined{
//     return this.data.shift();
//   }
// }
// class Queue<T> {
//   data : Array<T> = [];
//   push(item: T) :void {
//     this.data.push(item);
//   }
//   pop(): T {
//     return this.data.shift()!; //if array is empty then return undefined
//     // exclude undefined ! from the type checking
//   }
// }

// const akQueue = new Queue<number>();
// akQueue.push(123);

// let expAny : any;
// let expUnknown : unknown;

// //any
// expAny = "ak"
// expAny = 22;

// //unknown
// expUnknown = "ak"
// expUnknown = 221

// //any
// expAny.allows.anything.you.can.imagine(); //no error we can do anything
// let anySetBool : boolean = expAny;
// //so with the any we can do any thing or we can say bypass the type checking

// //unknown is relatively safer from the any
// expUnknown.trim() //error
// let akBool : boolean = expUnknown //error

// //to bypass the error of unknown
// if(typeof expUnknown === "string"){
//   expUnknown.trim(); //no error
// }
// if(typeof expUnknown === "boolean"){
//   let akBool: boolean = expUnknown;  // no error
// }

//if we have to log all the thing but if we accept the any value then there is not type safety
//to do we can use the unknown
// function log(value: unknown) {
//   if (typeof value === "number") {
//     console.log(value.toPrecision(2));
//   } else {
//     console.log(value);
//   }
// }

// function load(): unknown {
//   return "";
// }
// let hello = load();

// //here we don't know what has hello because it is unknown type
// //we can add the condition of type of but we don't have to include it due to performance reason or to save the time
// // const trimmed = hello.trim()

// const trimmed1 = (hello as string).trim();
// //or
// //but this does not work in the tsx
// const trimmed = (<string>hello).trim();

// let leet;

// //later
// leet = "22"

// const number1 = leet as number; //error
// const number = +leet; // no error convert in number coercion

// import { isPalindrome } from "./utils";
// console.log(isPalindrome("madam")); //true
// console.log(isPalindrome("madan")); //false

// console.log("Logged in user", process.env.USER);

// import fs from "fs";
// fs.writeFileSync("hello.txt", "hello world");

// // import { isPalindrome } from "npm-package";

// const main = () => {
//   setTimeout(() => {
//     console.log("1s");
//     setTimeout(() => {
//       console.log("2s");
//       setTimeout(() => {
//         console.log("3s");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// main();

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
// const mainAsync = async () => {
//   await delay(1000);
//   console.log("1s");
//   await delay(1000);
//   console.log("2s");
//   await delay(1000);
//   console.log("3s");
// };
// mainAsync();

// let mes: string = "hello world";
// console.log(mes);

//to run the ts file
//we can install the ts-node package and then npm i ts-node

// class Person {
//   private _age: number;
//   constructor(_age: number) {
//     this._age = _age;
//   }
//   growOld = () => {
//     this._age++;
//   };
//   age() {
//     return this._age;
//   }
// }

// const person = new Person(0);
// const personOld  = person.growOld();
// personOld();

// typeReadOnly
// type Point = {
//   readonly x: number,
//   y:number
// }

// const point : Point = {
//   x:0,
//   y:0
// }
// point.x = 12; //error because it is only readonly

// class Animal{
//   readonly name : string;
//   constructor(name : string){
//     this.name = name;
//   }
// }
// let newAnimal = new Animal("lion");
// console.log(newAnimal.name)
// newAnimal.name = "elephant"; //error we can't edit it

/**
//  * @param input a command or an array of commands
//  * @returns a single trimmed string
//  */
// type Format = string | string[]
// function formatCommandLine(input : string | string[]){
//   let line = "";
//   if(typeof input === "string"){
//     line = input.trim();
//   }else{
//     line = input.map(x => x.trim()).join(' ');
//   }
//   return line;
// }
// formatCommandLine(12) //map is not fn error is not going to come
// //because typescript is going to give the error

// let direction :"North" | "south" | "east" | "west";
// direction  = "NOrth";
// direction = "n0R7h"
//here we can update the value of any type

// let code : "vs";
// code = "vs";
// code = "sublime" //error we can't take anything other than vs

// class Cat {
//   meow() {
//     console.log("meow");
//   }
// }

// class Dog {
//   bark() {
//     console.log("woof");
//   }
// }

// type Animal = Cat | Dog;

// function speak(animal: Animal) {
//   //here we can't use the typeof operator in the animal
//   //because it is going to ne string
//   //so we can do with instanceof to check the type of instance
//   if (animal instanceof Cat) {
//     animal.meow();
//   }
//   if (animal instanceof Dog) {
//     animal.bark();
//   }
// }

// type Square = {
//   size : number;
// }
// type Rectangle = {
//   width : number,
//   height : number
// }

// type Shape = Square | Rectangle;

// function area(shape : Shape){
//   if("size" in shape){
//     return shape.size * shape.size;
//   }
//   if("width" in shape){
//     return shape.width * shape.height
//   }
// }
// area({size:2}); //4
// area({height:2,width:4}); //8

// type Square = {
//   size : number;
// }
// type Rectangle = {
//   width : number,
//   height : number
// }

// type Shape = Square | Rectangle;

// function area(shape : Shape){
//   if("size" in shape){
//     return shape.size * shape.size;
//   }
//   if("width" in shape){
//     return shape.width * shape.height
//   }
// }
// area({size:2}); //4
// area({height:2,width:4}); //8

// type ValidationSuccess = {
//   isValid: true;
//   validatedValue: string;
// };

// type ValidationFailure = {
//   isValid: false;
//   errorReason: string;
// };

// type ValidationResult = ValidationFailure | ValidationSuccess;

// function logResult(result: ValidationResult) {
//   if (result.isValid) {
//     console.log("success, validated value", result.validatedValue);
//   }
//   if (result.isValid === false) {
//     console.log(result.errorReason);
//   }
// }

// //with typescript we can directly declare the property in the constructor itself
// class Person {
//   constructor(public name: string, public age: number) {}
// }

// console.log(null == null); //true (of course)
// console.log(undefined == undefined); //true (of course)

// console.log(undefined == null) //true

// console.log(false == null) //false
// console.log(0 == null) //false
// console.log(" " == null) //false

// const result = someBooleanOrNullOrUndefined();
// if(result == null){
//   console.log("Null or Undefined ",result); // null | undefined
// }
// if(result != null){
//   console.log("Boolean", result) //true | false
// }

// type Point2D = {
//   x : number,
//   y : number
// }
// type Point3D = {
//   x : number,
//   y : number,
//   z : number
// } // instead of this

// type Point3DD = Point2D & {
//   z: number;
// };

type Person = {
  name: string;
  email: string;
  phone?: number; //optional
};

const Ak: Person = {
  name: "ashish",
  email: "ashishkachhadiya22@gmail.com",
  phone: 8849930484,
};

// const bruce: Person = {
//   name: "bruce",
//   email: "bruce@gmail.com",
// }; //valid

// class Point {
//   x?: number;
//   y?: number;
// }

// const point = new Point();
// console.log(point.x); //undefined add automatically for optional member
// //but we can't add null to the optional member

// type Point = {
//   x: number;
//   y: number;
// };
// function initialize(): Point {
//   return {
//     x: 0,
//     y: 0,
//   };
// }
// const point = initialize();
// console.log("After initialized", point.x, point.y);
// // or we can do like this

// interface Point2D{
//   x : number,
//   y : number
// }
// interface Point3D extends Point2D{
//   z : number
// }
// export const point : Point3D = {
//   x:0,
//   y:0,
//   z:0
// }
// Express Base
// export interface Request {
//   body : any;
// }

// //Express JSON
// export interface Request{
//   json : any;
// }

// //our app
// function handleRequest(req:Request){
//   req.body;
//   req.json
// }
//so this type of merging is not supported in the alias so if we are dealing with the http then we have to use the interface

export interface InputProps {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

type InputOnChange = (newValue: string) => void;
type InputValue = string;
export type InputProp = {
  type: "text" | "email";
  value: InputValue;
  onChange: InputOnChange;
};
export type InputProp2 = {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
};

const fail = (mes: string) => {
  throw Error(mes);
};

type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};
type Circle = {
  kind: "circle";
  radius: number;
};
type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  } else if (s.kind === "circle") {
    return Math.PI * s.radius ** 2;
  }
  const ensureAllCasesAreHandled: never = s;
  return ensureAllCasesAreHandled;
}

//implements Keyword
type Animal = {
  name: string;
  voice(): string;
};

class Cat implements Animal {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}
class Dog implements Animal {
  constructor(public name: string) {}
  voice() {
    return "Woef";
  }
}

console.log(new Cat("cat"));
console.log(new Dog("dog"));

let dice!: number; //definite assignment assertion
function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();

console.log("current Dice value", dice);

class Point {
  x!: number;
  y!: number;
  constructor() {
    this.moveRandom();
  }
  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}

// function isSquare(shape : Shape):shape is Square{
//   return 'size' in shape;
// }
// function isRectangle(shape: Shape): shape is Square {
//   return "size" in shape;
// }
// if(isRectangle(shape)){
//   return shape.size * shape.size;
// }

//assertion function
// type Person1 = {
//   name : string,
//   dataOfBirth?: Date;
// }
// function assert(condition : unknown , message : string){
//   if(!condition) throw new Error(message);
// }

// const mayBePerson = loadPerson();
// assert(mayBePerson != null, "could not load person");
// console.log("Name ", mayBePerson.name);
