function test(){
    console.log("callback,....")
}

function driver(x){

  //  x+=1
    //x.upper
    //x==true
    //test()
    x()

}
//driver(12)
//driver(" klnlk")
//driver(false)
driver(test)