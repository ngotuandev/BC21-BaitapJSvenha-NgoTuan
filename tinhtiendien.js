document.getElementById("tinhTienDien").addEventListener("click",function(){
    var tenKhachHang=document.getElementById("ten-khach-hang").value;
    var soKw=document.getElementById("so-kw").value*1;
    var soKwDau=500;
    var so50KwKe=650;
    var so100KwKe=850;
    var so150KwKe=1100;
    var soKwConLai=1300;
    let tongTien=0;
    if (soKw==0) return "";
    if (soKw<=50){
        tongTien=soKw*soKwDau;
    } else if (soKw<=100){
        tongTien=50*soKwDau+(soKw-50)*so50KwKe;
    } else if (soKw<=200){
        tongTien=50*soKwDau+50*so50KwKe+(soKw-100)*so100KwKe;
    } else if (soKw<=350){
        tongTien=50*soKwDau+50*so50KwKe+100*so100KwKe+(soKw-200)*so150KwKe;
    } else {
        tongTien=50*soKwDau+50*so50KwKe+100*so100KwKe+150*so150KwKe+(soKw-350)*soKwConLai;
    }
    console.log(tenKhachHang);
    document.getElementById("ketQuaTienDien").innerHTML=`<span
    pan>Tổng tiền phải trả của (anh/chị) ${tenKhachHang} là: ${tongTien.toLocaleString()} đồng</span>`
})