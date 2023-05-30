export interface NhanViens {
    ID: number,
    // MaNhanVien: string,
    HoTen: string,
    NgaySinh: Date,
    GioiTinh: string,
    MaChucVuNV: string,
    MaPhongBan: string,
    HeSoLuong: number

    [key: string]: any;
}