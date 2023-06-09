 // nhap 3 du lieu:
        // so nhien lieu : fuels
        let fuels ;
        // so phi hanh gia: pilots
        let pilots ;
        // do cao: heights

        //giai quyet van de
        //a. 5000 <= fuels <= 30000 so nhien lieu trong khoang
        do{
            fuels = Number(prompt(" Enter fuel number:"));
            if(isNaN(fuels)){
                alert(" Please enter fuel number");
            }else {
                if(fuels <5000 || fuels>30000) {
                alert(" Please enter fuel number in 5000 - 30000");
            }else{
                break;
            }
        }
        }
        while(true);
        //b. so phi hanh gia tu 1->7 (1<= pilots <=7)
        do{
          pilots = Number(prompt(" Enter pilot number:"));
            if(isNaN(pilots)){
                alert(" Please enter pilot number");
            }else {
                if(pilots <1 || pilots>7) {
                alert(" Please enter pilot number in 1 - 7");
            }else{
                break;
            }
        }
        }
        while (true); 
        //c. in ra so nhien lieu con lai va do cao toi da
        //c1. 1 lan dot can 100 nhien lieu/1 phi hanh gia do cao +50km
        //=> do cao 50km = 100 nhien lieu * 1 phi hanh gia 
        let fuels50km = 100 * pilots;
        // tinh so lan tau con thoi tang do cao
        let times = Math.floor(fuels / fuels50km);
        // tinh do cao toi da
        let maxHeight = times * 50;
        // tinh so nhien lieu con lai
        let fuelsRemain = fuels % fuels50km;
        // in ra do cao toi da va so nhien lieu con lai
        alert(" Max Height is:" + maxHeight  + " - Fuel Remain is :" + fuelsRemain);