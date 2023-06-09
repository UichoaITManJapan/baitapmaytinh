 // let sum = 0;
        // while(true){
        //     let n = parseInt(prompt("hay nhap so nguyen duong"));
        //     if(isNaN(n)){
        //         alert("so vua nhap khong hop le");
        //         continue;
        //     }
        //     if(n<0){
        //         break;
        //     }
        //     sum += n
        // }
        // console.log("tong la:" +sum);

// khai bao va khoi tao bien sum
let sum = 0;
// tao vong lap do ... while
do{
    //nhap vao 1 so n
    let n =parseInt(prompt("nhap vao mot so:"));
    //kiem tra so n
    if(n>=0){
        sum += n
    }else{
        //n<0 :ket thuc vong lap
        break;
    }

}
while(true);
console.log("tong la:" +sum);

