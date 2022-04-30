import {memo}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import *as actions from '../../redux/actions/productsAction';

function MuaHang(){
    
    const products=useSelector(state=>state.productReducer.category);
    const dispatch=useDispatch();
    const onToCart=(id)=>{
        dispatch(actions.onToCart(id))
    }
    return(
        <div className="container MuaHang">
            <div className="row ">
                <div className="col-4 MuaHang-image hss">
                    <img src={products.img}/>
                    <div className="imageItem">
                        <img src={products.img}/>
                        <img src={products.img}/>
                        <img src={products.img}/>
                        <img src={products.img}/>
                    </div>
                </div>
                <div className="col-8 inforHang hss">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Thương hiệu: Cyber Power</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                </ul>
                    <div className="mh mh-product">
                        <p>{products.title}</p>
                        <ul className="nav flex-column">
                            Thông tin sản phẩm
                            <li className="nav-item">
                                <a className="nav-link active" >CPU: Intel Core i5-4210H</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Ram: 8 GB – DDR3L Bus 1600 (Up max 16G – 2 slot)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Card đồ họa: Intel HD Graphics 4600 + Nvidia GTX 960M- 4G</a>
                            </li>
                        </ul>
                        <hr/>
                        <p>Bảo hành:<i>{products.ins}</i></p>
                        <p>Giá tiền:<span>{products.price}<b>đ</b></span></p><br/>
                        <br/>
                        <div className="col-4 text-center">
                        <a onClick={()=>onToCart(products.id)} className="btn btn-danger">Thêm vào giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </div><br/>
            <div className='mt-2 row'>
                <div className='col-8'>
                    <div className='desc'>
                        <div className='desc-title'>
                            <h2>Đặc điểm nổi bật</h2>
                        </div>
                        <div className='mt-20 desc-body'>
                            <h4>Laptop  Asus ROG Zephyrus G15 GA503QR hướng đến đối tượng nào?</h4>
                            <img src={products.img}/>
                            <p>Laptop  Asus ROG Zephyrus G15 GA503QR-HQ093T cho phép đưa sức mạnh  đỉnh cao của Windows 10 Pro vào trong một khung máy 1,9kg siêu mỏng. Hiệu năng nhanh và mượt với CPU AMD Ryzen™ 9 5900HS và GPU GeForce RTX™ 3070 (TGP 80W + 20W Dynamic Boost). Màn hình  WQHD 165Hz/3ms giúp cân bằng tốc độ với độ nét tới từng chi tiết. Hãy cùng laptopAZ đi tìm hiểu chi tiết hơn về "một viên ngọc quý" có sức hút vô khó cưỡng này ngay thôi nào!</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                <div className='mt-20 desc-title'>
                            <h2>Thông số kĩ thuật</h2>
                        </div>
                        <div className='desc-body'>
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <td>CPU</td>
                                        <td>AMD Ryzen 9-5900HS (3.0GHz up to 4.6GHz, 16MB)</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>16GB(8GB + 8GB[On board]) DDR4 3200MHz (1x SO-DIMM slot)</td>
                                    </tr>
                                    <tr>
                                        <td>Ổ cứng</td>
                                        <td>1TB M.2 NVMe™ PCIe® 3.0 SSD</td>
                                    </tr>
                                    <tr>
                                        <td>Card VGA</td>
                                        <td>NVIDIA® GeForce RTX™ 3070 8GB GDDR6</td>
                                    </tr>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>15.6 inch WQHD (2560 x 1440) WV,300NITS,DCI-P3:100%, 165Hz AdaptiveSync, Nanoedge</td>
                                    </tr>
                                    <tr>
                                        <td>Cổng kết nối</td>
                                        <td>Giắc cắm âm thanh kết hợp 1 x 3,5 mm
1 x HDMI 2.0b
2 x USB 3.2 thế hệ 2 Type-A
2x USB 3.2 Gen 2 Type-C support displayport / power delivery / G-SYNC
1 x cổng LAN RJ45
1x card reader (microSD)</td>
                                    </tr>
                                    <tr>
                                        <td>Trọng lượng</td>
                                        <td>1.9 kg</td>
                                    </tr>
                                    <tr>
                                        <td>Pin</td>
                                        <td>4-cell, 90WHrs Li-ion</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>Window 10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default memo(MuaHang);