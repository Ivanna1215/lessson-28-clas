'use strict'

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     get coordinates() {
//         return [this.x, this.y];
//     }
//     set coordinates(newCoords) {
//         [this.x, this.y] = [...newCoords]
//     }

//     position() {
//         console.log(`Current point position x: ${this.x}, ${this.y}`);
//     }

// }
// class Point3D extends Point {
//     constructor(x, y, z) {
//         super(x, y);
//         this.z = z;
//     }
//     position() {
//         console.log(`Current point position x: ${this.x},y: ${this.y},z:${this.z}`);
//     }
// }

// let p = new Point(3, 5);
// p.position();
// p.coordinates = [2, 3];
// console.log(p);

// let p2 = new Point3D(1, 2, 4);
// p2.position();

// Task 1

// class TaskOne {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     get radius() {
//         return this._radius;
//     }
//     set radius(radiusNew) {
//         this._radius = radiusNew;
//     }
//     get diametr() {
//         return (this._radius * 2);
//     }
//     square () {
//         return Math.floor(Math.Pi*(this._radius**2));
//     }
// }

// let Task = new TaskOne(5);
// // console.log(t.diametr);
// console.log (Task.square());

// Task 1

class TaskOne { 
    constructor(radius) { 
        this.radius = radius; 
    } 
 
    get radius() { 
        return this._radius; 
    } 
    set radius(radiusNew) { 
        this._radius = radiusNew; 
    } 
    get diametr() { 
        return (this.radius * 2); 
    } 
    square() {
        return Math.floor(Math.PI*this.radius**2);
    }
    length() {
    return Math.floor(2*(Math.PI)*(this.radius));
    }
}

let task = new TaskOne(5);
// console.log(task.diametr);
// console.log(task.square());
// console.log(task.length());
// console.log(task.radius);
// task.radius=9;
// console.log(task.radius);

// Task 2

class Marker {
    constructor(color,amount){
        this.color = color;
        this.amount = amount;
    }
    print(string){
        let numSum = this.amount/0.5;
        let result ='';
        for (let i = 0; i<string.length;i++) {
            if (string[i]!==' ') {
                numSum--;
            }
            result = result + string[i];
            if (numSum===0){
                break
            }
         
        }
        console.log(result);
    }
}
let marker = new Marker('red',5);
// marker.print('Is it cold your room?');

class NewMarker extends Marker {
    readyColor(num) {       
this.amount = this.amount+num;
// console.log (this.amount);
if (this.amount>100){
    this.amount = 100;
}
console.log (`Your marker is ready ${this.amount}`)
    }
}
let printMarker = new NewMarker('red',5);
// printMarker.readyColor(96);
// printMarker.print ('Am I smart?');
// printMarker.print ('You are right!');

// Task 3
 class Employee {
     constructor(name,sex,age,profession){
         this.name = name;
         this.sex = sex;
         this.age = age;
         this.profession = profession;
     }
 };
 let ivanna = new Employee ('Ivanna','female',31,'programmer');
 let oxana = new Employee ('Oxana','female',35,'programmer');
 let dima = new Employee ('Dima','male',25, 'driver');
 let vova = new Employee ('Vova','male',28,'cashier');
let employees = [ivanna,oxana,dima,vova];

class EmplTable {
    constructor (arr){
        this.arr = arr;
    }
    getList () {
        for (let i = 0; i<this.arr.length; i++){
            console.log ( this.arr[i]);
        }

    }
}
let res = new EmplTable(employees);
res.getList();







