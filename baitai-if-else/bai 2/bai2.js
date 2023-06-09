 //  nhap 3 so nguyen

 let so1 = parseInt(prompt("nhap so thu nhat:"));
 let so2 = parseInt(prompt("nhap so thu hai:"));
 let so3 = parseInt(prompt("nhap so thu ba:"));

 // kiem tra so nao la so lon nhat

 if(so1 > so2 && so1>so3){
     document.write("so lon nhat la:" +so1)
 }
 else if(so2 > so1 && so2 > so3){
     document.write("so lon nhat la:" +so2)
 }
 else if(so3>so1 && so3>so2){
     document.write("so lon nhat la:" + so3)
 }

 // kiem tra so nho nhat

 if(so1 < so2 && so1<so3){
     document.write("so nho nhat la:" +so1)
 }
 else if(so2 < so1 && so2 < so3){
     document.write("so nho nhat la:" +so2)
 }
 else if(so3<so1 && so3<so2){
     document.write("so nho nhat la:" + so3)
 }