var data = ["amit","raj","parth","nilesh","sagar","sachin","saurav","hr","malayalam","hindi"]

function sortbylen(a,b){

    return a.length - b.length
}


data = data.sort(sortbylen)

// data.forEach((x)=>{
//     console.log(x)
// })

function sortSalryByValue(a,b){

    return a-b
}

var salaries = [1200,2500,9630,368740,1250,6321,741,1200,120]

//salaries = salaries.sort(sortSalryByValue)
// salaries = salaries.sort((a,b)=>{
//     return a-b
// })


salaries = salaries.sort((a,b)=>a-b)

salaries.forEach((x)=>{
    console.log(x)
})