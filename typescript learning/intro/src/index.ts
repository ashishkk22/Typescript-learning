let regExp: RegExp = new RegExp("ab+c");

let set: Set<number> = new Set([1, 2, 3]);
let array: Array<number> = [1, 2, 3];

/** A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}
let queue: Queue<number> = new Queue();

//Array
let arr: Array<number> = [];
//OR
let arr2: number[] = [];

arr2 = [1];
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

class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  move(distanceInMeters) {
    console.log(`${this.name} moved ${this.distanceMeters} m.`);
  }
}
