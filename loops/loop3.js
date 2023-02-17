//sum of digit 123 1 + 2 + 3 = 6
/// 875 8 + 7 + 5 = 20
//875 % 10 
var rem =0
var sum =0
var no = 1234

//785 != 0 true
//78 != 0 true
while(no!=0){

    ///785 =% 10 5
    //78 % 10 = 8
    //7 % 10 = 7
    rem = no % 10 //5
    //0 = 0 +5 sum = 5
    //5 = 5 +8 = 13
    //13 = 13 +7 = 20
    sum = sum +rem
    //785 = 785 / 10 78
    //78 = 78 / 10 7
    //7 = 7 / 10 0
    no = Math.floor(no/10);

}
console.log("sum of digits = ",sum);