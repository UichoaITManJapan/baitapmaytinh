 // let n = parseInt(prompt("hay nhap mot so:"));
        // for (let i = 2; i <= n; i++) {
        //     let check = true;
        //     for (let j = 2; j <= i-1; j++) {
        //         if (i % j === 0) {
        //             check = false;
        //             break;
        //         }
        //     }
        //     if (check) {
        //         console.log("cac so nguyen to la:" + i);
        //     }
        // }


        // nhap vao mot so n
        let n = parseInt(prompt("nhap vao mot so:"));
        //duyet cac so tu 2 - n (1 khong phai la so nguyen to)
        for(let index =2; index <=n; index++){
            //dat co checkPrime = true( so nguyen to)
           let checkPrime=true;
            //kiem tra index co phai la so nguyen to hay ko
            for(let i =2; i < Math.sqrt(index);i++){
                //kiem trai co phai la uoc so cua index hay ko
                if(index%i == 0){
                    checkPrime = false; //index ko phai la so nguyen to
                }else{
                    break;
                }
            }
            //neu checkPrime == true -> in ra so nguyen to
            if(checkPrime == true){
                console.log("so nguyen to la:" +index);
            }
        }

