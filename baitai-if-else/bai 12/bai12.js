 //    let n = Number(prompt("hay nhap vao 1 so:"));
    //    let soDaoNguoc;
    //    for(let i = n.lenght -1; i>=0;i--){
    //         soDaoNguoc = n[i];
    //     }
    //     console.log("so dao nguoc la:" +soDaoNguoc);



//         let n, soDu, soDaoNguoc;
// soDaoNguoc = 0;
//     n = parseInt(prompt("nhập vào 1 số tự nhiên : "));

//     while(n > 0){
//         soDu = n % 10;
//         soDaoNguoc = soDaoNguoc * 10 + soDu;
//         n = n / 10;
//     }
//     console.log ("số đảo ngược là:" + soDaoNguoc)



//bc 1: nhap vao so number
let number =parseInt(prompt("nhap vao mot so:"))
let numberDonVi;
let soDaoNguoc ="";
// bc 2: su dung vong while voi dieu kien number>0
while(number>0){
numberDonVi = number%10;
number =Math.floor(number/10);
soDaoNguoc += numberDonVi
}
console.log("so dao nguoc la" +soDaoNguoc);
// bc 3: tinh toan: lap cho den khi nao number =0
//3.1 lay ra so hang don vi -> number %10
//3.2 tinh lai gia tri number -> number = Marth.floor(number/10)
//3.3 inra chu so hang don vi -> document.write(don vi)