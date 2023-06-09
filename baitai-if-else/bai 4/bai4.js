let numb1 = parseInt(prompt("nhap so thu nhat:"));
        let numb2 = parseInt(prompt("nhap so thu hai:"));
        let result;
        let operator = prompt(" nhap ohuong thuc tinh:")
        switch (operator){
            case "+":
                result = numb1 + numb2;
                break;

                case "-":
                result = numb1 - numb2;
                break;

                case "*":
                result = numb1 * numb2;
                break;

                case "/":
                result = numb1 / numb2;
                break;

                default:
                    console.log(" phep tinh khong hop le");
        }
console.log("ket qua tim kiem la:"+ result);