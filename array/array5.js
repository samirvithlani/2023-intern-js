var data = ["raj","amit","parth","krunal","parth"]


var ind = data.indexOf("parth")
var ind2 = data.lastIndexOf("parth")

console.log(ind)
console.log(ind2)

var flag = data.some((x)=>{

    return x.length>3
})
console.log(flag)