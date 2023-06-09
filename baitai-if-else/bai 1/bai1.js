//    if (brower == Edge) {
    //     alert("You are got the Edge")
    //    }else if(brower == Chorme || brower == FireFox || brower == Sapari || brower ==Opera) {
    //     alert("Okay we sopport these browers too ")
    //    }else {
    //     alert("We hope that this page look OK!")
    //    }

    let so = parseInt(prompt("hay nhap mot so:"));

    // kiem tra so nguyen laf chan hay le

    if (so % 2 ===0){
        document.write(" so vua nhap la so chan")
    }
    else{
        document.write("so vua nhap la so le")
    }