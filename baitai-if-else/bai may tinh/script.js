// hàm clearScreen() truy cập DOM bằng cách sư dụng id của kết quả và xoá giá trị của nó bằng cách gán nó cho một chuỗi trống
function clearScreen(){
    document.getElementById("result").value ="";
}
// hàm display() truy cập DOM bằng cách sử dụng id của kết quả và thêm giá trị của nút được nhấp vào kết quả
function display(value){
    document.getElementById("result").value += value;
}
// đánh giá biểu thức
// Hàm calculate() truy cập DOM bằng cách sử dụng id của kết qủa và đánh giá biểu thức bằng hàm eval()
// hàm eval() đc sử dụng trong JS để đánh giá biểu thuwcs dc truyền cho nó dưới dạng tham số. nó trả bề kết quả đc đánh giá của biểu thức toán học
function calculate(){
    var n = document.getElementById("result").value;
    var a = eval(n);
    document.getElementById("result").value = a
}