function cs(p){

    console.log("cs...",p)
    return true;

}
function it(p){

    console.log("it...",p)
    return false;

}

function admission(cb,sper){

    let flag = cb(sper)
    if(flag==true){

        console.log("admission confirmed...")
    }
    else{
        console.log("admission not confirmed...")
    }

    return "ok"
}

var per = 8
if(per >=75){

    let x = admission(cs,per)
    console.log(x)
}
else{
    let x = admission(it,per)
    console.log(x)
}