'use strict'

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get coordinates() {
        return [this.x, this.y];
    }
    set coordinates(newCoords) {
        [this.x, this.y] = [...newCoords]
    }

    position() {
        console.log(`Current point position x: ${this.x}, ${this.y}`);
    }

}
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    position() {
        console.log(`Current point position x: ${this.x},y: ${this.y},z:${this.z}`);
    }
}

let p = new Point(3, 5);
p.position();
p.coordinates = [2, 3];
console.log(p);

let p2 = new Point3D(1, 2, 4);
p2.position();

// Task 1

class Task1 {
    constructor(r) {
        this.r = r;
    }

    get radius() {
        return this.r;
    }
    set newRadius(radiusNew) {
        this.r = radiusNew;
    }
    get diametr() {
        return this.r * 2;
    }
}

let t = new Task1(5);
t.newRadius(5);
