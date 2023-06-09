let n = parseInt(prompt(" hay nhap vao mot so:"));
        let flag = true;

        //neu n be hon 2 thi n khong phai la so nguyen to
        if(n<2){
            flag = false;
        }
        else{
            //lap tu 2 toi n-1
            for(let i=2;i<n-1;i++ ){
                if(n%i==0){
                    flag = false;
                break;
                }
               
            }
        }
        // kiem tra bien flag= true
        if(flag == true){
            document.write(n + "la mot so nguyen to")
        }else{
            document.write(n + "khong phai la so nguyen to")
        }