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
}
let Task = new TaskOne (5);
console
console.log(Task.diametr());
