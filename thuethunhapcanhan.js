document.getElementById("tinhThueThuNhap").addEventListener("click",function(){
    var hoVaTen=document.getElementById("ho-va-ten-thue").value;
    var thuNhapNam=document.getElementById("thu-nhap-nam").value*1;
    var soNguoiPhuThuoc=document.getElementById("so-nguoi-phu-thuoc").value*1;
    var trieu=1000000;
    let thuNhapChiuThue=thuNhapNam-(4*trieu)-(soNguoiPhuThuoc*1.6*trieu);
    let thueCaNhan=0;
    if (thuNhapNam==0) return "";
    if (thuNhapChiuThue<=(60*trieu)){
        thueCaNhan=thuNhapChiuThue*0.05;
    } else if (thuNhapChiuThue<=(120*trieu)){
        thueCaNhan=(60*trieu*0.05)+(thuNhapChiuThue-60*trieu)*0.1  ;
    } else if (thuNhapChiuThue<=(210*trieu)){
        thueCaNhan=(60*trieu*0.05)+(60*trieu*0.1)+(thuNhapChiuThue-120*trieu)*0.15;
    } else if (thuNhapChiuThue<=(384*trieu)){
        thueCaNhan=(60*trieu*0.05)+(60*trieu*0.1)+(90*trieu*0.15)+(thuNhapChiuThue-210*trieu)*0.2;
    } else if (thuNhapChiuThue<=(624*trieu)){
        thueCaNhan=(60*trieu*0.05)+(60*trieu*0.1)+(90*trieu*0.15)+(174*trieu*0.2)+(thuNhapChiuThue-384*trieu)*0.25;

    } else if (thuNhapChiuThue<=(960*trieu)){
        thueCaNhan=(60*trieu*0.05)+(60*trieu*0.1)+(90*trieu*0.15)+(174*trieu*0.2)+(240*trieu*0.25)+(thuNhapChiuThue-624*trieu)*0.3;
    } else {
        thueCaNhan=(60*trieu*0.05)+(60*trieu*0.1)+(90*trieu*0.15)+(174*trieu*0.2)+(240*trieu*0.25)+(336*trieu*0.3)+(thuNhapChiuThue-960*trieu)*0.35;
    }
    document.getElementById("ketQuaThue").innerHTML=`<span> Thuế thu nhập cá nhân của (anh/chị) ${hoVaTen} là ${thueCaNhan.toLocaleString()} đồng </span> `
})