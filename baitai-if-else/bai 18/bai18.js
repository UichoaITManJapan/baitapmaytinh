 // duyet cac so tu 1-100 -> dung for
 for(let i =1; i<=100; i++){
    //kiem tra chia het cho 3
    checkFizz = false;
    if(i % 3 ==0){
        checkFizz = true;
    }
    // kiem tra chia het cho 5
    checkBuzz = false;
    if(i % 5 ==0){
        checkBuzz = true;
    }
    //in ra ket qua 
    if(checkFizz || checkBuzz){
        console.log("so", i ,":");
        if(checkFizz && !checkBuzz){
            console.log("Fizz");
        }else if(!checkFizz && checkBuzz){
            console.log("Buzz");
        }else if(checkFizz && checkBuzz){
            console.log("FizzBuzz");
        }
    }
}