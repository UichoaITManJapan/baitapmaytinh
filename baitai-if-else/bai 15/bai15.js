 //input: amount(tien gui), rate(tienlai), month(thang)
        //outout: 
        //nhap so tien gui
        let amount = parseInt(prompt("nhap so tien gui:"));
        // nhap lai suat nam
        let rate = parseInt(prompt("nhap lai suat nam:"));
        // nhap so thang gui
        let month = parseInt(prompt("nhap so thang gui:"));

        // tinh lai suat thang
        let rateMonth = rate/12;
        //khia bao bien tong so tien lai
        let interest =0;
        let interestMonth="";
        //duyet cac thang gui va tinh tien lai hang thang
        for(i =1; i<=month;i++){
            //tinh lai  (nho chia cho 100)
             interestMonth = rateMonth * amount/100;
            // lai nhap goc
         amount = amount + interestMonth;
            //cong don tien lai
            interest +=interestMonth;
        }
        //in ra tien nhan dc a tong lai suat sau khi gui ket thuc
        console.log("Tien nhan duoc sau khi ket thuc gui la:" + amount);
        console.log('Tien lai nhan duoc sau khi ket thuc gui la:' + interest);