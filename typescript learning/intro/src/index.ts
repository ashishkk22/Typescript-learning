// // let regExp: RegExp = new RegExp("ab+c");

// import { type } from "os";

// import { type } from "os";
// import { findConfigFile, NumericLiteral } from "typescript";

// // let set: Set<number> = new Set([1, 2, 3]);
// // let array: Array<number> = [1, 2, 3];

// // /** A first in first out collection */
// // class Queue<T> {
// //   private data: Array<T> = [];
// //   push(item: T) {
// //     this.data.push(item);
// //   }
// //   pop(): T | undefined {
// //     return this.data.shift();
// //   }
// // }
// // let queue: Queue<number> = new Queue();

// // //Array
// // let arr: Array<number> = [];
// // //OR
// // let arr2: number[] = [];

// // arr2 = [1];
// // arr2 = ["ashish"]; //error

// // //array of fixed length

// // let tuple : [number,number ] = [0,0]
// // tuple = [1,2];
// // tuple = [1] //error must be 2
// // tuple = [1,2,3] //error must be 2
// // tuple = ["elite",1337] //error must be number

// // let center: {x:number, y:number} = {
// //     x:0,
// //     y:0
// // }

// // let unit : {x:number, y: number} = {
// //     x:0,
// //     y:0
// // }

// // type Point = {x:number, y:number};

// // let center : Point = {
// //     x:1,
// //     y:2
// // }

// // let unit : Point = {
// //     x:1,
// //     y:2
// // }

// // function add (a:number, b:number):number{
// //     return a+b;
// // }

// // function log(message:string) :void{
// //     console.log("LOG:", message)
// // }

// // function sum(...values:number[]){
// //     return values.reduce((previous,current) =>{
// //         return previous + current
// //     })
// // }
// // sum(1,2); //3
// // sum(1,2,3) //6

// // let add;
// // add = function  (a:number,b:number) :number{
// //     return a+b;
// // }
// // type Add =  (a:number, b:number) => number;
// // let add :Add = (a,b) =>{
// //     return a+b
// // };
// // add("ak","b"); //error

// // type system is structural it does not care about names of the types
// // type User = {id:string};
// // type Product = {id:string};

// // let user : User = {id:"ak__"};
// // let product : Product = {id:"vs code"};
// // user = product //so despite of having different type it is not giving the error because of same structure.

// // type Point2D = {x:number , y:number};
// // type Point3D = {x:number, y:number, z:number};

// // let point2D = {x:1,y:12};
// // let point3D = {x:12,y:13,z:32};

// // //extra info is OK
// // point2D = point3D //no error

// // function takesPoint2D (point:Point2D){ /**do something */}
// // takesPoint3D(point3D) //no error because it gets what it wants

// // /**Error : Missing Info */

// // point3D = point2D; //error
// // function takesPoint3D(point:Point3D){
// //     /**.... */
// // }
// // takesPoint3D(point2D) //error

// // // class in typescript
// // class Animal {
// //  private name: string; //with this outside access is going to be error
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// //   move(distanceInMeters: number): void {
// //     console.log(`${this.name} moved ${distanceInMeters} m.`);
// //   }
// // }

// // let cat = new Animal("cat");
// // cat.move(10);
// // cat.name = "Dog" //GIVE ERROR TSC

// // class Animal {
// //   protected name: string; //with this outside access is going to be error
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// //   move(distanceInMeters: number): void {
// //     console.log(`${this.name} moved ${distanceInMeters} m.`);
// //   }
// // }
// // class Fly extends Animal {
// //   fly(distanceInMeters: number) {
// //     console.log(this.name, "flew", distanceInMeters);
// //   }
// // }
// // let eagle = new Fly("Eagle");
// // eagle.fly(10);

// //generics
// /** A FIFO (first in first out ) collection */
// // class Queue {
// //   data = [];
// //   push(item) {
// //     this.data.push(item);
// //   }
// //   pop() {
// //     return this.data.shift();
// //   }
// // } // so this is general type =
// // if we use it for the string we will get the run time error

// // class NumberQueue extends Queue {
// //   push(item: number) {
// //     super.push(item);
// //   }
// //   pop(): number {
// //     return super.pop();
// //   }
// // }

// // let queueAk = new NumberQueue();
// // queueAk.push(123);
// // console.log(queueAk.pop().toPrecision());

// // class Queue<T> {
// //   data : T[] = [];
// //   push(item: T) :void {
// //     this.data.push(item);
// //   }
// //   pop(): T | undefined{
// //     return this.data.shift();
// //   }
// // }
// // class Queue<T> {
// //   data : Array<T> = [];
// //   push(item: T) :void {
// //     this.data.push(item);
// //   }
// //   pop(): T {
// //     return this.data.shift()!; //if array is empty then return undefined
// //     // exclude undefined ! from the type checking
// //   }
// // }

// // const akQueue = new Queue<number>();
// // akQueue.push(123);

// // let expAny : any;
// // let expUnknown : unknown;

// // //any
// // expAny = "ak"
// // expAny = 22;

// // //unknown
// // expUnknown = "ak"
// // expUnknown = 221

// // //any
// // expAny.allows.anything.you.can.imagine(); //no error we can do anything
// // let anySetBool : boolean = expAny;
// // //so with the any we can do any thing or we can say bypass the type checking

// // //unknown is relatively safer from the any
// // expUnknown.trim() //error
// // let akBool : boolean = expUnknown //error

// // //to bypass the error of unknown
// // if(typeof expUnknown === "string"){
// //   expUnknown.trim(); //no error
// // }
// // if(typeof expUnknown === "boolean"){
// //   let akBool: boolean = expUnknown;  // no error
// // }

// //if we have to log all the thing but if we accept the any value then there is not type safety
// //to do we can use the unknown
// // function log(value: unknown) {
// //   if (typeof value === "number") {
// //     console.log(value.toPrecision(2));
// //   } else {
// //     console.log(value);
// //   }
// // }

// // function load(): unknown {
// //   return "";
// // }
// // let hello = load();

// // //here we don't know what has hello because it is unknown type
// // //we can add the condition of type of but we don't have to include it due to performance reason or to save the time
// // // const trimmed = hello.trim()

// // const trimmed1 = (hello as string).trim();
// // //or
// // //but this does not work in the tsx
// // const trimmed = (<string>hello).trim();

// // let leet;

// // //later
// // leet = "22"

// // const number1 = leet as number; //error
// // const number = +leet; // no error convert in number coercion

// // import { isPalindrome } from "./utils";
// // console.log(isPalindrome("madam")); //true
// // console.log(isPalindrome("madan")); //false

// // console.log("Logged in user", process.env.USER);

// // import fs from "fs";
// // fs.writeFileSync("hello.txt", "hello world");

// // // import { isPalindrome } from "npm-package";

// // const main = () => {
// //   setTimeout(() => {
// //     console.log("1s");
// //     setTimeout(() => {
// //       console.log("2s");
// //       setTimeout(() => {
// //         console.log("3s");
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // };
// // main();

// // const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
// // const mainAsync = async () => {
// //   await delay(1000);
// //   console.log("1s");
// //   await delay(1000);
// //   console.log("2s");
// //   await delay(1000);
// //   console.log("3s");
// // };
// // mainAsync();

// // let mes: string = "hello world";
// // console.log(mes);

// //to run the ts file
// //we can install the ts-node package and then npm i ts-node

// // class Person {
// //   private _age: number;
// //   constructor(_age: number) {
// //     this._age = _age;
// //   }
// //   growOld = () => {
// //     this._age++;
// //   };
// //   age() {
// //     return this._age;
// //   }
// // }

// // const person = new Person(0);
// // const personOld  = person.growOld();
// // personOld();

// // typeReadOnly
// // type Point = {
// //   readonly x: number,
// //   y:number
// // }

// // const point : Point = {
// //   x:0,
// //   y:0
// // }
// // point.x = 12; //error because it is only readonly

// // class Animal{
// //   readonly name : string;
// //   constructor(name : string){
// //     this.name = name;
// //   }
// // }
// // let newAnimal = new Animal("lion");
// // console.log(newAnimal.name)
// // newAnimal.name = "elephant"; //error we can't edit it

// /**
// //  * @param input a command or an array of commands
// //  * @returns a single trimmed string
// //  */
// // type Format = string | string[]
// // function formatCommandLine(input : string | string[]){
// //   let line = "";
// //   if(typeof input === "string"){
// //     line = input.trim();
// //   }else{
// //     line = input.map(x => x.trim()).join(' ');
// //   }
// //   return line;
// // }
// // formatCommandLine(12) //map is not fn error is not going to come
// // //because typescript is going to give the error

// // let direction :"North" | "south" | "east" | "west";
// // direction  = "NOrth";
// // direction = "n0R7h"
// //here we can update the value of any type

// // let code : "vs";
// // code = "vs";
// // code = "sublime" //error we can't take anything other than vs

// // class Cat {
// //   meow() {
// //     console.log("meow");
// //   }
// // }

// // class Dog {
// //   bark() {
// //     console.log("woof");
// //   }
// // }

// // type Animal = Cat | Dog;

// // function speak(animal: Animal) {
// //   //here we can't use the typeof operator in the animal
// //   //because it is going to ne string
// //   //so we can do with instanceof to check the type of instance
// //   if (animal instanceof Cat) {
// //     animal.meow();
// //   }
// //   if (animal instanceof Dog) {
// //     animal.bark();
// //   }
// // }

// // type Square = {
// //   size : number;
// // }
// // type Rectangle = {
// //   width : number,
// //   height : number
// // }

// // type Shape = Square | Rectangle;

// // function area(shape : Shape){
// //   if("size" in shape){
// //     return shape.size * shape.size;
// //   }
// //   if("width" in shape){
// //     return shape.width * shape.height
// //   }
// // }
// // area({size:2}); //4
// // area({height:2,width:4}); //8

// // type Square = {
// //   size : number;
// // }
// // type Rectangle = {
// //   width : number,
// //   height : number
// // }

// // type Shape = Square | Rectangle;

// // function area(shape : Shape){
// //   if("size" in shape){
// //     return shape.size * shape.size;
// //   }
// //   if("width" in shape){
// //     return shape.width * shape.height
// //   }
// // }
// // area({size:2}); //4
// // area({height:2,width:4}); //8

// // type ValidationSuccess = {
// //   isValid: true;
// //   validatedValue: string;
// // };

// // type ValidationFailure = {
// //   isValid: false;
// //   errorReason: string;
// // };

// // type ValidationResult = ValidationFailure | ValidationSuccess;

// // function logResult(result: ValidationResult) {
// //   if (result.isValid) {
// //     console.log("success, validated value", result.validatedValue);
// //   }
// //   if (result.isValid === false) {
// //     console.log(result.errorReason);
// //   }
// // }

// // //with typescript we can directly declare the property in the constructor itself
// // class Person {
// //   constructor(public name: string, public age: number) {}
// // }

// // console.log(null == null); //true (of course)
// // console.log(undefined == undefined); //true (of course)

// // console.log(undefined == null) //true

// // console.log(false == null) //false
// // console.log(0 == null) //false
// // console.log(" " == null) //false

// // const result = someBooleanOrNullOrUndefined();
// // if(result == null){
// //   console.log("Null or Undefined ",result); // null | undefined
// // }
// // if(result != null){
// //   console.log("Boolean", result) //true | false
// // }

// // type Point2D = {
// //   x : number,
// //   y : number
// // }
// // type Point3D = {
// //   x : number,
// //   y : number,
// //   z : number
// // } // instead of this

// // type Point3DD = Point2D & {
// //   z: number;
// // };

// type Person = {
//   name: string;
//   email: string;
//   phone?: number; //optional
// };

// const Ak: Person = {
//   name: "ashish",
//   email: "ashishkachhadiya22@gmail.com",
//   phone: 8849930484,
// };

// // const bruce: Person = {
// //   name: "bruce",
// //   email: "bruce@gmail.com",
// // }; //valid

// // class Point {
// //   x?: number;
// //   y?: number;
// // }

// // const point = new Point();
// // console.log(point.x); //undefined add automatically for optional member
// // //but we can't add null to the optional member

// // type Point = {
// //   x: number;
// //   y: number;
// // };
// // function initialize(): Point {
// //   return {
// //     x: 0,
// //     y: 0,
// //   };
// // }
// // const point = initialize();
// // console.log("After initialized", point.x, point.y);
// // // or we can do like this

// // interface Point2D{
// //   x : number,
// //   y : number
// // }
// // interface Point3D extends Point2D{
// //   z : number
// // }
// // export const point : Point3D = {
// //   x:0,
// //   y:0,
// //   z:0
// // }
// // Express Base
// // export interface Request {
// //   body : any;
// // }

// // //Express JSON
// // export interface Request{
// //   json : any;
// // }

// // //our app
// // function handleRequest(req:Request){
// //   req.body;
// //   req.json
// // }
// //so this type of merging is not supported in the alias so if we are dealing with the http then we have to use the interface

// export interface InputProps {
//   type: "text" | "email";
//   value: string;
//   onChange: (newValue: string) => void;
// }

// type InputOnChange = (newValue: string) => void;
// type InputValue = string;
// export type InputProp = {
//   type: "text" | "email";
//   value: InputValue;
//   onChange: InputOnChange;
// };
// export type InputProp2 = {
//   type: "text" | "email";
//   value: string;
//   onChange: (newValue: string) => void;
// };

// const fail = (mes: string) => {
//   throw Error(mes);
// };

// type Square = {
//   kind: "square";
//   size: number;
// };

// type Rectangle = {
//   kind: "rectangle";
//   width: number;
//   height: number;
// };
// type Circle = {
//   kind: "circle";
//   radius: number;
// };
// type Shape = Square | Rectangle | Circle;

// function area(s: Shape) {
//   if (s.kind === "square") {
//     return s.size * s.size;
//   } else if (s.kind === "rectangle") {
//     return s.width * s.height;
//   } else if (s.kind === "circle") {
//     return Math.PI * s.radius ** 2;
//   }
//   const ensureAllCasesAreHandled: never = s;
//   return ensureAllCasesAreHandled;
// }

// //implements Keyword
// type Animal = {
//   name: string;
//   voice(): string;
// };

// class Cat implements Animal {
//   constructor(public name: string) {}
//   voice() {
//     return "meow";
//   }
// }
// class Dog implements Animal {
//   constructor(public name: string) {}
//   voice() {
//     return "Woef";
//   }
// }

// console.log(new Cat("cat"));
// console.log(new Dog("dog"));

// let dice!: number; //definite assignment assertion
// function rollDice() {
//   dice = Math.floor(Math.random() * 6) + 1;
// }
// rollDice();

// console.log("current Dice value", dice);

// class Point {
//   x!: number;
//   y!: number;
//   constructor() {
//     this.moveRandom();
//   }
//   moveRandom() {
//     this.x = Math.random();
//     this.y = Math.random();
//   }
// }

// // function isSquare(shape : Shape):shape is Square{
// //   return 'size' in shape;
// // }
// // function isRectangle(shape: Shape): shape is Square {
// //   return "size" in shape;
// // }
// // if(isRectangle(shape)){
// //   return shape.size * shape.size;
// // }
// type Person = {
//   name: string;
//   dataOfBirth?: Date;
// };
// function loadPerson(flag: boolean): Person | null {
//   if (flag) {
//     return {
//       name: "ashish",
//       dataOfBirth: new Date(),
//     };
//   } else {
//     return null;
//   }
// }

// //assertion function

// function assert(condition: unknown, message: string): asserts condition {
//   //this function is only returns when condition is true with (asserts condition)
//   if (!condition) throw new Error(message);
// }

// const mayBePerson = loadPerson(true);
// assert(mayBePerson != null, "could not load person");
// console.log("Name ", mayBePerson.name);

// function assertsDate(value: unknown): asserts value is Date {
//   //so here we are telling the ts that if the value is Date then and then we are returning otherwise throw error
//   if (value instanceof Date) return;
//   else throw new TypeError("value is not a Date");
// }

// assertsDate(mayBePerson.dataOfBirth);
// //due to the assert in the above assertsDate fn we are able to call the toISOString Fn on myBePerson.dataOfBirth.toISOString
// console.log("date of Birth", mayBePerson.dataOfBirth.toISOString);
// //so with this we are telling that if the input is string then return is string
// //if array then return is array
// function reverse(string : string) : string;
// function reverse(stringArray : string[]) : string[];
// function reverse ( stringOrStringArray : string | string []){
//     if(typeof stringOrStringArray == "string"){
//         return stringOrStringArray.split("").reverse().join("");
//     }else{
//         return stringOrStringArray.slice().reverse();
//     }
// }
// // const hello: string;
// const hello = reverse("hello"); //olleh
// // const h_e_l_l_o: string[];
// const h_e_l_l_o = reverse(['h','e','l','l','o']);
// function makeDate ( timeStamp : number) : Date;
// function makeDate ( year : number, month:number, day:number) : Date;
// function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
//   if (month != null && day != null) {
//     return new Date(timestampOrYear, month - 1, day);
//   } else {
//     return new Date(timestampOrYear);
//   }
// }
// const doomsday = makeDate(2000, 1, 1); //1 jan 2000
// const epoch = makeDate(0); //1 jun 1970
// const invalid = makeDate(2000, 1 /**Error : ignored  */);

// //1
// type Add = (a: number, b: number) => number;

// //2
// type Add2 = {
//   (a: number, b: number): number;
// };
// //3
// interface Add3 {
//   (a: number, b: number): number;
// }
// //so of the type add, add2 and add3 is same

// const add: Add2 = (a: number, b: number) => {
//   return a + b;
// };

// type Add4 = {
//     (a:number,b:number) : number,
//     (a:number,b:number,c:number) : number,
//     debugName ? : string,
// }
// const multiply = (a:number,b:number,c?:number) =>{
//     return a + b + (c != null ? c : 0);
// }
// multiply.debugName = "Addition Function"

// type PointCreator = new (x: number, y: number) => { x: number; y: number };
// //or
// type PointCreator2 =  {
//     new (x: number, y: number) : { x: number; y: number }
// }
// const Point: PointCreator2 = class {
//   constructor(public x: number, public y: number) {}
// };

//Abstract Classes

// abstract class Command{
//     abstract commandLine() : string;

//     execute(){
//         console.log("EXecuting", this.commandLine());
//     }
// }

// class GiteResetCommand extends Command{
//     commandLine(): string {
//         return "git reset --hard";
//     }
// }

// class GiteFetchCommand extends Command{
//     commandLine(): string {
//         return "git fetch --all";
//     }
// }

// new GiteResetCommand().execute();
// new GiteFetchCommand().execute();

// new Command() //error Cannot create an instance of an abstract class

// type Person = {
//   displayName: string;
//   email: string;
// };

// type PersonDictionary = {
//   [username: string]: Person;
// };

// const persons: PersonDictionary = {
//   jane: { displayName: "jane doe", email: "jane@example.com" },
// };

// persons["john"] = { displayName: "john doe", email: "john@example.com" };

//  console.log(persons['john'])
//  delete persons['john']

//  persons['john'] = {displayName:'john doe ', emails:"john@email.com"} //error

// readonly arrays and tuples
// function reverseSorted(input: readonly number[]): number[] {
//   return input.slice().sort().reverse(); //so slice create copy and then sort to remove the error
// }

// const start = [1, 2, 3, 4, 5];
// const result = reverseSorted(start);

// console.log(result); //[5,4,3,2,1]
// console.log(start); //[5,4,3,2,1] <= modified the original array to prevent it readonly

// //so we can make it read only by
// type Neat = readonly number[];
// type Long = ReadonlyArray<number>;

// //tuple
// type Point = readonly [number,number];

// function move(point : Point, x:number, y:number) : Point{
//    // point[0] += x;
//    // point[1] += y; //error if readyonly
//     // return point;
//     return [point[0] + x, point[1] + y];
// }

// const point : Point = [0,0];
// const moved = move(point,10,10);

// console.log(moved) //[10,10];
// console.log(point) //[10,10]

// type Point2D = { x: number; y: number };
// type Point3D = { x: number; y: number; z: number };
// type Person = { name: string; email: string };

// let point2: Point2D = { x: 0, y: 0 };
// let point3: Point3D = {
//   x: 10,
//   y: 10,
//   z: 10,
// };
// let person: Person = {
//   name: "john",
//   email: "john@example.com",
// };

// point2 = point3;
// point3 = point2; //Error
// point3 = point2 as Point3D //Ok : i trust you [no error] //single assertion

// person = point3 //error
// point3 = person; //error
// point3 = person as Point3D //Error: I don't trust you enough
// point3 = person as unknown as Point3D; //Ok : I doubly trust your

// const king = "elvis";
// king = "john"; //error can not be modified;
// const upperCased = king.toUpperCase(); //king === "elvis"
// const dave = {
//   name: "dave",
//   role: "drummer",
//   skills: ["drumming", "headbanging"],
// } as const;

// dave = {
//     name:"ashish"
// }// error
// //but it can be modified with
// dave.name = "ashish"; // error
// dave.role = "singer"; // error
// dave.skills.unshift("singing"); // error

// function layout(settings: {
//   align: "left" | "center" | "right";
//   padding: number;
// }) {
//   console.log("Performing layout", settings);
// }
//if no const assertion
/**const example: {
    align: string;
    padding: number;
} */
/** with const assertion
 * const example: {
    readonly align: "left";
    readonly padding: 0;
}
 */
// const example = {
//   align: "left" as const,
//   padding: 0,
// };

// layout(example);

// function double(){
//     this.value = this.value * 2;
// }

// const valid = {
//     value : 10,
//     double,
// }

// valid.double() //js is going to take the value and pass it to fn
// console.log(valid.value) //20 due to fn call

// function double (this : {value : number}){
//     this.value = this.value * 2;
// }

// //give the error if
// const invalid = {
//     valve : 10 , //wrong spell
//     double,
// }

// invalid.double(); //error

// //generic constraints
// type NameFields = {
//   firstName: string;
//   lastName: string;
// };
// function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
//   return {
//     ...obj,
//     fullName: `${obj.firstName} and ${obj.lastName}`,
//   };
// }

// const john = addFullName({
//     email : "john@email.com",
//     firstName : "john",
//     lastName : "Doe"
// })
// console.log(john.email);
// console.log(john.fullName);

// const jane = addFullName({firstName : "jane"}) //error add lastName;

//typeof type operator
// //to generate the type from the one variable
// const center = {
//   x: 0,
//   y: 0,
//   z: 0,
// };

// type Point = typeof center;

// //Later
// const unit: Point = {
//   x: center.x + 1,
//   y: center.y + 1,
//   z: center.z + 1,
// };

//we can make the type with the json response
//lets say json response looks like this
// const personResponse = {
//   name: "john",
//   email: "john@example.com",
//   firstName: "john",
//   lastName: "doe",
// };

// type PersonResponse = typeof personResponse;
// function processResponse(person: PersonResponse) {
//   console.log("full name", `${person.lastName}  ${person.firstName}`);
// }

//lookup types

//submit request
// export type SubmitRequest = {
//   transactionId: string;
//   personal: {
//     title: string;
//     driveFirstName: string;
//     driveLastName: string;
//   };
//   //many more things
//   // payment:{
//   //     creditCardToken : string
//   // }
//   payment: {
//     creditCardToken: string;
//   };
// };

// type PaymentRequest = SubmitRequest['payment'];

// export function getPayment(): SubmitRequest["payment"] {
//   return {
//     creditCardToken: "123rtregdfgfd324423",
//   };
// }

//keyof type operator

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// const john: Person = {
//   name: "John",
//   age: 35,
//   location: "Melbourne",
// };

// function logGet<Obj, Key extends keyof Obj> ( obj: Obj, key: Key) {
//   const value = obj[key];
//   console.log("getting", key, value);
//   return value;
// }

// const age = logGet(john, "age"); //35
// console.log(logGet(john, "email")); //error

// type IsNumber<T> = T extends number ? "number" : "other";

// type WithNumber = IsNumber<number>
// type WithOther = IsNumber<string>;

// const isNumber = (value : unknown) =>{
//     typeof value === "number" ? "number" : "other"
// }

// const withNumber = isNumber(124);
// const withOther = isNumber("hello")

// export type TypeName<T> = T extends string
//   ? "string"
//   : T extends number
//   ? "number"
//   : T extends boolean
//   ? "boolean"
//   : T extends undefined
//   ? "undefined"
//   : T extends symbol
//   ? "symbol"
//   : T extends bigint
//   ? "bigint"
//   : T extends Function
//   ? "function"
//   : T extends null
//   ? "null"
//   : "object";

// function typeName<T>(t: T): TypeName<T> {
//   if (t === null) return "null" as TypeName<T>;
//   return typeof t as TypeName<T>;
// }

// const str = typeName("hello world");
// const num = typeName(123);
// const bool = typeName(true);
// const undef = typeName(undefined);
// const obj = typeName(null);

// console.log(typeof null); //object but if we want to change then we can do with the ts

// function error(message: string): never {
//   throw new Error(message);
// }

// // const notAllowed: never =   "some string";

// const allowed: never = error("this is okay");

// const example: string = error("i will not return"); //we can do it because it is not going to get the undefined

// type Verbose = string | never;
// //same as type Verbose = string because it never get other than string
// type Concise = string;

// /**
//  * Exclude null and undefined from T
//  */

// export type NoEmpty<T> = T extends null | undefined ? never : T;

// type Example = NoEmpty<string | null>;
// type Expanded0 = NoEmpty<string> | NoEmpty<null>; //same as above

// type Expanded1 =
//   | (string extends null | undefined ? never : string)
//   | (null extends null | undefined ? never : string); //same as above

// type Expanded2 = string | never;
// type Result = string;

// type IsArray <T> = T extends Array<any> ? "array" : "other";

// type WithArray = IsArray<string[]>;
// type WithNotArray = IsArray<number>;

// type UnboxArray<T> = T extends Array<infer Member> ? Member : T;
// type UnboxedStringArray = UnboxArray<string[]>;
// type UnboxedStringArray2 = UnboxArray<number[]>;
// type AnythingElse = UnboxArray<string>;

// export function createPerson(firstName: string, lastName: string) {
//   return {
//     firstName,
//     lastName,
//     fullName: `${firstName} ${lastName}`,
//   };
// }

// type ReturnType<T> = T extends (...args: any) => infer R ? R : never;

// type Person = ReturnType<typeof createPerson>;

// function logPerson(person : ReturnType<typeof createPerson>) {
//   console.log("Person:", person.firstName, person.lastName, person.fullName);
// }

// export type Point = {
//   x: number;
//   y: number;
//   z: number;
// };
// type Readonly<T> = {
//   readonly x: number;
//   readonly y: number;
//   readonly z: number;
//we can do this but this is code duplication
// readonly [Item in "x" | "y" | "z"] : number
//or
// readonly [Item in keyof T] : T[Item]
// };

// const center: Readonly<Point> = {
//   x: 0,
//   y: 0,
//   z: 0,
// };
//center.x = 100; //Should error because of editing the default value

// export type Point = {
//   readonly x: number;
//   y?: number;
// };

// export type Mapped<T> = {
//   [P in keyof T]: T[P];
// };
// export type Result = Mapped<Point>;
/**
 * Output
 * type Result = {
    readonly x: number;
    y?: number | undefined;
} */

// export class State<T> {
//   constructor(public current: T) {}
//   // update(next : T){
//   update(next: Partial<T>) {
//     this.current = { ...this.current, ...next };
//   }
// }

// const state = new State({ x: 0, y: 0 });
// state.update({ y: 123 });

// //template type literal;
// let strLiteral: "hello";
// strLiteral = "hello";
// strLiteral = "anything else is an error"; //Error : not "hello"

// let templateLiteral: `Example : ${string}`;
// templateLiteral = "Example : hello";
// templateLiteral = "Example :  ";
// templateLiteral = "without a example prefix"; //Error:not Example : ${string}

// //cases

// type CSSValue =
//   //implies px
//   | number
//   //number + px|em|rem
//   | `${number}px`
//   | `${number}em`
//   | `${number}rem`;

// function size(input: CSSValue) {
//   return typeof input == "number" ? input + "px" : input;
// }

// size(124);
// size("12px");
// size("xp"); // error

// /**
//  * @param style is a combination of
//  * Size : "small" or "medium" or "large"
//  * color : "primary" or "secondary"
//  * e.g "small-secondary"
//  */
// type Size = 'small' | 'medium' | 'large';
// type Color = 'primary' | 'secondary';
// type Style = `${Size}-${Color}`;

// function applyStyle(style:Style){
//     //
// }
// applyStyle("medim-primary")//error

// type ExampleOptional = {
//   name?: string;
// };

// let optional: ExampleOptional;
// optional = { name: undefined };
// optional = {}; //no error
// //but
// type ExampleOptional1 = {
//   name: string | undefined;
// };

// let optional1: ExampleOptional1;
// optional1 = { name: undefined };
// optional1 = {}; //error

// type Person = Record<string, { name: string; role: string }>;
// const person: Person = {};
// person["000"] = { name: "John", role: "admin" };
// person["111"] = { name: "jane", role: "owner" };
// person["222"] = { name: "June" }; //error  missing property `role`
// type PersonsVerbose = { [key: string]: { name: string; role: string } };

// type Roles = "admin" | "owner";
// let peopleWithRoles: Record<Roles, string[]> = {
//   owner: ["jane", "june"],
//   admin: ["john"],
// };
// peopleWithRoles = {
//   owner: ["jane", "june"],
// }; //error 'admin is missing"

// type Point = Record<"x" | "y", number>;
// //above and below are same
// type Point = {
//   x: number;
//   y: number;
// };

// type PageInfo = {
//   id: string;
//   title: string;
// };
// type PagesVerbose = {
//   home: PageInfo;
//   services: PageInfo;
//   about: PageInfo;
//   contact: PageInfo;
// };
// //above and the below is same
// type Pages = Record<
//   "home" | "service" | "about" | "contact",
//   { id: string; title: string }
// >;
/**
 * type Pages = {
    home: {
        id: string;
        title: string;
    };
    service: {
        id: string;
        title: string;
    };
    about: {
        id: string;
        title: string;
    };
    contact: {
        id: string;
        title: string;
    };
}
 */

// const user: {
//   [key: string]: { name: string };
// } = {
//   name: { name: "ashish" },
// };
// //same as Record<string,{name:string}>
// interface Author {
//   name: string;
// }

// interface Article {
//   title: string;
//   author?: Author;
// }

// function getArticleAuthorName(article: Article) {
//   if (article.author) return article.author.name;
//   return;
// }

// function reduce<TElement,TResult>(array:TElement[]:reducer:):TResult{

// }

// function reduce<TElement, TResult>(
//   array: TElement[],
//   initialResult: TResult,
//   reducer: (result: TResult, el: TElement) => TResult
// ): TResult {
//   let result = initialResult;
//   for (const element of array) {
//     result = reducer(result, element);
//   }
//   return result;
// }

// const total = reduce<number, number>([1, 2, 3, 4, 5], 0, (sum, el) => sum + el);

// const ageByName = reduce<Person, Record<string, number>>(
//   persons,
//   (result, person) => ({
//     ...result,
//     [person.name]: person.age,
//   }),
//   {}
// );
// type zipFn = <T1, T2>(x: T1[], y: T2[]) => (T1 | T2)[][];
// function zip<TElement1, TElement2>(
//   array1: TElement1[],
//   array2: TElement2[]
// ): (TElement1 | TElement2)[][] {
//   const length = Math.min(array1.length, array2.length);
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result.push([array1[i], array2[i]]);
//   }
//   return result;
// }
// const ak = zip([1, 2, 3], [1, 2, 3]);
