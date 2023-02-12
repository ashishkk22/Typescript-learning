// let regExp: RegExp = new RegExp("ab+c");

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
