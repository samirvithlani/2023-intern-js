var data ={

    student:{
        id:121,
        sName:"Ram",
        sAge:25,
        courses:["REACT","NODE"],
        hobbies:[
            {
                name:"cricket",
                prio:10
            },
            {
                name:"Travel",
                prio:5
            },
        ]

    }
}
console.log(data.student.sName , " -- ",data.student.courses[0] )

console.log(data.student.sName, " --", data.student.hobbies[0])
console.log(data.student.sName, " --", data.student.hobbies[0].name," -- ",data.student.hobbies[0].prio)