import dealHot from "../../products/dealhot";
import TatCaSanPham from "../TatCaSanPham/TatCaSanPham";
import {Link}from 'react-router-dom'
function CuaHang(){
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="banner col-6">
                    <img style={{width:'100%'}} src="https://minhkhoa.com.vn/wp-content/uploads/2021/05/banner-laptop-cu-gia-re-mk.png"/>
                </div>
                <div className="banner col-6">
                    <img style={{width:'100%'}} src="https://laptop88.vn/media/news/151_banner_website.png"/>
                </div>
                <div className="mt-2 row">
                    <div className="col-12 dealHot">
                        <div className="title-dealHot mb-2">
                        <i className="fas fa-fire"></i>&nbsp;
                            Deal hot, mua ngay kẻo lỡ
                        </div>
                        <div className="row dealHot-body">
                            {dealHot.map((product,index)=>{
                                return (
                                    <div  key={index} className=" col-3 product-item">
                                        <img src={product.img}/>
                                        <Link to='/products/muahang' >{product.title}</Link><br/>
                                        <span>{product.price}đ</span><br/>
                                        <i>Đã bán :{product.sold}</i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-2 row">
                    <div className="col-12 dealHot">
                        <div className="title-dealHot">
                            Tìm kiếm hàng đầu
                        </div>
                        <div className="row dealHot-body">
                            {dealHot.map((product,index)=>{
                                return (
                                    <div  key={index} className=" col-3 product-item">
                                        <img src={product.img}/>
                                        <Link to='/products/muahang' >{product.title}</Link><br/>
                                        <span>{product.price}đ</span><br/>
                                        <i>Đã bán :{product.sold}</i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <TatCaSanPham/>
            </div>
        </div>
    )
}
export default CuaHang;