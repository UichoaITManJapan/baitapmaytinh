 //nhap 3 so tu ban phim
 let number1 = parseInt(prompt("nhap so thu nhat:"));
 let number2 = parseInt(prompt("nhap so thu hai:"));
 let number3 = parseInt(prompt("nhap so thu ba:"));

 //khai bao bien max,min theo number1,2,3
 let max = number1;
 let min = number1;
 // tim dieu kien
 if(max< number2){
     max = number2;
 }
 if(max< number3){
     max = number3;
 }
 if(min< number2){
     min = number2;
 }
 if(min< number3){
     min = number3;
 }

 //in ra ket qua
 console.log("ket qua sau khi sap xep la:");
 console.log(max);
 if(max != number1 && min != number1){
     console.log(number1);
 }
 if(max != number2 && min != number2){
     console.log(number2);
 }
 if(max != number3 && min != number3){
     console.log(number3);
 }
 console.log(min);