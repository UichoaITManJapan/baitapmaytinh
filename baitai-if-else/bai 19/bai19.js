// nhap vao 1 so co 3 chu so
let number = Number(prompt("Nhập vào một số có 3 chữ số: "));
       
let digit1 = Math.floor(number / 100); // Chữ số hàng trăm
let digit2 = Math.floor((number % 100) /10); // Chữ số hàng chục
let digit3 = number % 10; // Chữ số hàng đơn vị
//tim so Armstrong
// let armStrong = Math.pow(digit1,3) + Math.pow(digit2,3) + Math.pow(digit3,3)
let armStrong = digit1**3 + digit2**3 + digit3**3;

if (number == armStrong) {
    console.log(" so Armstrong la:" + number);
} else {
    console.log("day khong phai la so Armstrong");
}

