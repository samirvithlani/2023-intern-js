var students = [
    {
        id:101,
        name:"amit",
        age:20,
        marks:50

    },
    {
        id:102,
        name:"raj",
        age:24,
        marks:75
        
    },
    {
        id:103,
        name:"parth",
        age:22,
        marks:60
        
    }
]


function removeStudent(id){

    //101
    students = students.filter((stu)=>{

            ///101 != 102 true
            //102 != 102 false
            //103 != 102 true
            return stu.id != id

    })
    console.log(students)


}

removeStudent(102)














