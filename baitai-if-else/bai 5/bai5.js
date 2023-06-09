let pointHTML = parseInt(prompt("nhap diem HTML:"));
let pointCSS = parseInt(prompt("nhap diem CSS:"));
let pointJS = parseInt(prompt("nhap diem JS:"));

let medium = (pointHTML + pointCSS + pointJS) /3;
if(medium <5){
    console.log("yeu");
}else if(medium >=5 && medium<6){
    console.log("kem");
}else if(medium >=6 && medium<7){
    console.log("trung binh");
}else if(medium >=7 && medium <8){
    console.log("kha");
}else if(medium>=8 && medium <9){
    console.log("gioi");
}
else{
console.log("xuat sac");
}