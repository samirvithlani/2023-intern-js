var a = [12,25,63,96,32,14]

var x = a.push(100)
var y = a.unshift(200)
// console.log(x)
// console.log(y)

console.log(a)
var x1 = a.pop()
var y1 = a.shift()
console.log(x1)
console.log(y1)
console.log(a)

//a.splice(1,0,100)
//a.splice(1,3) //starts with 1st index and remove one element
//var p1 = a.splice(1,3,78,96)
//console.log(p1)
//console.log(a)

// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


//a[i]
// a.forEach(function(value){
//     console.log(value)
// })


// a.forEach((value)=>{
//     console.log(value)
// })

a =  a.map((x)=>{
    
    return x*2
})
//console.log(newarray\\)
console.log(a)














