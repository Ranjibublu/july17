//var
// redeclared and reassign 
var name = "ranjith"
var name = "ranjith kumar"
name = "bublu"
console.log(name)

//let
// only reassign
let bike = 1206
bike = 120036
console.log(bike)

//const
// No redeclare and no reassign
const favbike = "yamaha"
console.log(favbike)

//datatype 
    //primitive 
// string
//number
//boolean
//undefined 
//null

let car = "bmw"
console.log(car)
console.log(typeof car)
let bmwnumber = 1234
console.log(bmwnumber)
console.log(typeof bmwnumber)
let dog = true
console.log(dog)
console.log(typeof dog)
let book
console.log(book)
console.log(typeof book)
let box = null
console.log(box)
console.log(typeof box)

//non primitive
//array
//object

var a = ["ranjith", 26,[21,22],true]
console.log(a[1])
console.log(a[2][1])

//object

let b ={bus: "Volvo", busnum: 234, buses: "true"}

console.log(b.buses)   //dot

//bracket notation
let m = {name: "ragu", age:10}

console.log(m["age"])