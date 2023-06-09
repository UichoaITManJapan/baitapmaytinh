 // nhap vao 3 so ngau nhien
 let n1 = Number(prompt("Enter your number 1:"));
 let n2 = Number(prompt("Enter your number 2:"));
 let n3 = Number(prompt("Enter your number 3:"));
 //tinh tich 3 so
 let result = n1 * n2 * n3;
 // xet: neu result >0 thi hien thi dau ' + ', result< 0 thi hien thi dau ' - '
 if (result > 0) {
     console.log(" + ");
 } else if(result < 0){
     console.log(" - ");
 }else{
     console.log(" 0 ");
 }