
                           // Function statement

// function fun(){
// let a = 11
// let b = 12
// if(a>b){
//     console.log(a*b)
// }
// else{
//     console.log(b*a)
// }
// }
// fun()

                                 // Return 

// function fun2 (a,b){
//     console.log(a*b)
//     return;
// }
// fun2(100,5)

// function f2(a,b){
//     return a*b
// }
// let result = f2(50,100)
// console.log(result)

// function f3(a){
//     return a
// }
// let resultranjith = f3("delip")
// console.log(resultranjith)

                        //function expression or anonymous function

// const f3 = function(){
//     let a = 111
//     let b = 222
//     console.log(b)
// }
// f3()


//immediate invoke function 

// (function rk (num){
//     console.log(num*8)
// })(8);

// (function bk (){
//     console.log(150)
// })()

// arrow function 

// let result =(a,b) => {
//     console.log(a-b)
// }
// result(22,33)

// let rk = (num)=> {
//     return num+100
// }
// console.log(rk(2))

//first class function 

function rk(num){
    return num+7
}
function dk(bk){
    console.log(bk(7))
}
dk(rk)