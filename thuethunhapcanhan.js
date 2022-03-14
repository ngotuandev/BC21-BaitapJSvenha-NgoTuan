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
        thueCaNhan=thuNhapChiuThue*0.1  ;
    } else if (thuNhapChiuThue<=(210*trieu)){
        thueCaNhan=thuNhapChiuThue*0.15;
    } else if (thuNhapChiuThue<=(384*trieu)){
        thueCaNhan=thuNhapChiuThue*0.2;
    } else if (thuNhapChiuThue<=(624*trieu)){
        thueCaNhan=thuNhapChiuThue*0.25;

    } else if (thuNhapChiuThue<=(960*trieu)){
        thueCaNhan=thuNhapChiuThue*0.3;
    } else {
        thueCaNhan=thuNhapChiuThue*0.35;
    }
    document.getElementById("ketQuaThue").innerHTML=`<span> Thuế thu nhập cá nhân của (anh/chị) ${hoVaTen} là ${thueCaNhan.toLocaleString()} đồng </span> `
})