
document.getElementById("traCuu").addEventListener("click",function(){
    var diemChuan=document.getElementById("diem-chuan").value*1;
    var diemToan=document.getElementById("diem-toan").value*1;
    var diemVan=document.getElementById("diem-van").value*1;
    var diemAnh=document.getElementById("diem-anh").value*1;
    let diemKhuVuc=document.getElementById("khu-vuc").value*1;
    let diemDoiTuong=document.getElementById("doi-tuong").value*1;
    let tongDiem=diemAnh+diemToan+diemVan+diemKhuVuc+diemDoiTuong;
    if (diemChuan==0) return "";
    if (tongDiem>=diemChuan&&(diemAnh!==0||diemToan!==0||diemVan!==0)){
        document.getElementById("ketQuaTuyenSinh").innerHTML=`<span>Thí sinh đã Đậu với tổng điểm là: ${tongDiem}</span>`
    } else {
        document.getElementById("ketQuaTuyenSinh").innerHTML=`<span>Thí sinh đã Rớt với tổng điểm là: ${tongDiem}</span>`
    }
})