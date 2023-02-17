var esalary = 2500;

if(esalary>=5000){

    console.log("You are eligible for personal loan");
    if(esalary>=10000){
        console.log("You are eligible for home vehicle loan");
    }
    else{
        console.log("You are not eligible for home vehicle loan");
    }
    
}
else{
    console.log("You are not eligible for personal loan");
    if(esalary>=2000){
        console.log("You are eligible for two wheeler loan");
    }
    else{
        console.log("You are not eligible for any loan");
    }
}
