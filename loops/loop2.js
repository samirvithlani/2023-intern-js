// for(let i =1;i<=25;i++){

//     if(i %2 ==0){
//         console.log(i);
//     }


// }


var x = 100
var y = 23
console.log(x/y);
console.log(Math.floor(x/y));


var no = 78528
var count=0
//7852 != 0 true
//785 != 0 true
//78 != 0 true
//7 != 0 true
//0 != 0 false
while(no!=0){

    //no = 7852 / 10 785
    //no = 785 / 10 78
    //no = 78 / 10 7
    //no = 7 / 10 0
    no = Math.floor(no/10);
    count++; //0+1 =1+1 =2+1 =3+1 =4


}
console.log("no of digits = ",count);