import React from 'react';
import styles from './HoSoCuaHang.module.css';
function HoSoCuaHang(){
    fetch('http://localhost:8080/api/admin/register')
    return (
        <div className={`container-fluid ${styles.HoSoShop}`}>
            <div className="row">
                <div className={`col-6 ${styles.hss}`}>
                    <div className="row">
                        <div className=" text-center col-6"><br/><br/><br/>
                            <h1>Tỉ lệ hủy</h1>
                            <h1>0%</h1>
                        </div>
                        <div className="text-center col-6"><br/><br/><br/>
                            <h1>Tỉ lệ đổi trả</h1>
                            <h1>0%</h1>
                        </div>
                    </div>
                </div>
                <div  className={`col-6 ${styles.hss}`}>
                    <table className={styles.tongQuan}>
                        <tbody>
                            <tr>
                                <td style={{width:'180px'}}>Thành viên từ năm</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Sản phẩm</td>
                                <td>20+</td>
                            </tr>
                            <tr>
                                <td>Mô tả cửa hàng</td>
                                <td>Mua online sản phẩm của cửa hàng kienleshop ✓ chất lượng cao, uy tín, giá tốt ✓ Chính hãng ✓ Giao hàng toàn quốc</td>
                            </tr>
                            <tr>
                                <td>Đánh giá</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>Người theo dõi</td>
                                <td>1.256.214</td>
                            </tr>
                            <tr>
                                <td>Phản hồi chat</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HoSoCuaHang;