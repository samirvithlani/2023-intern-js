
function single(){

    console.log("single file upload called...")
    return true;
}
function any(){

    console.log("any.... file upload called...")

}

function upload(cb){

        var flag =cb()
        console.log("flag --",flag)

}

var fcount =12

if(fcount ==1){
    upload(single)
}
else{
    upload(any)
}