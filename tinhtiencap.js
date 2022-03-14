
document.getElementById("doanh-nghiep").addEventListener("click",function(){
    document.getElementById("radio-connect").style.display="block";
})
document.getElementById("nha-dan").addEventListener("click",function(){
    document.getElementById("radio-connect").style.display="none";
})
const nhaDan="nhaDan";
const doanhNghiep="doanhNghiep";
function xuLyHoaDon(loaiKhach){
    switch(loaiKhach){
        case nhaDan:
            return 4.5;
        case doanhNghiep:
            return 15;
        default:
            break;
    }   
}
function dichVuCoBan(loaiKhach){
    switch(loaiKhach){
        case nhaDan:
            return 20.5;
        case doanhNghiep:
            return 75;
        default:
            break;
    }   
}
function kenhCaoCap(loaiKhach){
    switch(loaiKhach){
        case nhaDan:
            return 7.5;
        case doanhNghiep:
            return 50;
        default:
            break;
    } 
}


document.getElementById("tinhTienCap").addEventListener("click",function(){

  var loaiKhachHang=document.querySelector('input[name="options"]:checked').value;
  var soKetNoi=document.getElementById("so-ket-noi").value*1;
  var soKenh=document.getElementById("so-kenh").value*1;
  var tienXuLyHoaDon=xuLyHoaDon(loaiKhachHang);
  var tienDichVuCoBan=dichVuCoBan(loaiKhachHang);
  var tienKenhCaoCap=kenhCaoCap(loaiKhachHang)*soKenh;
    var tongTien=0;
    if (soKenh==0) return "";
    if (loaiKhachHang==doanhNghiep&&soKetNoi>10){
        tongTien=(tienDichVuCoBan+(soKetNoi-10)*5)+tienKenhCaoCap+tienXuLyHoaDon;
    } else {
        tongTien=tienDichVuCoBan+tienKenhCaoCap+tienXuLyHoaDon;
    }
  document.getElementById("ketQuaTienCap").innerHTML=`<span>Tổng tiền cáp mà bạn phải trả là: ${tongTien} </span>`
})