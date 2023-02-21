var data = ["raj","jay","parth","amit","sachin","kohli","saurav","dhoni","sahil","sagar","nilesh","hr","malayalam","hindi"]

var filteredArray =[]



// for(let i=0;i<data.length;i++){

//    if(data[i].startsWith("s")){
//     filteredArray.push(data[i])
//    }

// }
//
filteredArray  =data.filter((x)=>{
    //raj -> false --> filterarray push not
    //sachin -->true --> filterarray push yes
    return x.startsWith("s")
})

//var filtarray1 = []
var filtarray1 = data.filter((i)=>{

    return i.length>4

})



console.log(filteredArray)
console.log(filtarray1)


