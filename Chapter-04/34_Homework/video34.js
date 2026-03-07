const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const tinhTrungBinh = (diemToan, diemVan, diemAnh) => {
    const tongDiem = diemToan + diemVan + diemAnh;
    const diemTrungBinh = tongDiem / 3;
    return diemTrungBinh;
}

const xepLoai = (diemTrungBinh) => {
    let xepLoai = "Trung bình";
    if(diemTrungBinh >= 9) {
        xepLoai = "Xuất sắc";
    } else if(diemTrungBinh >= 8) {
        xepLoai = "Giỏi";
    } else if(diemTrungBinh >= 6.5) {
        xepLoai = "Khá";
    }
    console.log(
    `
        Điểm trung bình: ${diemTrungBinh}
        Xếp loại: ${xepLoai}
    `);
}

xepLoai(tinhTrungBinh(diemToan, diemVan, diemAnh));