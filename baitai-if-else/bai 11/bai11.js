let n = parseInt(prompt(" hay nhap 1 so:"));
       let sum =0;
         for(let i =1;i<=n/2 ; i++){
            if(n%i === 0){
                console.log("uoc so cua n la:" +i);
            }
            sum  +=i;
        }
            
            if(sum == n){
                console.log("day la so hoan hao");
            }else{
                console.log("day khong la so hoan hao");
            }