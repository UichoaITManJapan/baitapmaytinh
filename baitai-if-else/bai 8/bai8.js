let n = Number(prompt(" nhap vao 1 so:"));
     let sum=0;
        for (let i=1; i<=n; i++){
            if(i%2 ===0){
                console.log("cac so chan la:" +i);
            sum +=i;
        }
        }
        console.log("tong cac so chan tu 1 den n la:" +sum);