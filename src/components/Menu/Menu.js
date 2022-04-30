import {useState}from'react';
import { useDispatch } from 'react-redux';
import *as actions from '../../redux/actions/productsAction';
function Menu(){
    const [value,setValue]=useState('');
    const dispatch=useDispatch();
    const onSubmit=()=>{
        dispatch(actions.onSearchInput(value.trim().toLowerCase()))
    }
    
    return (
        <div className="col-12">
                    <ul className="nav menu-bar">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Cửa Hàng</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Tất Cả Sản Phẩm</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bộ Sưu Tập</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Giá Sốc Hôm Nay</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/HoSoCuaHang">Hồ Sơ Cửa Hàng</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "><input value={value} placeholder='Nhập tên sản phẩm bạn muốn tìm !!' id="TK" name="TimKiem" onChange={(e)=>setValue(e.target.value)} type={'search'}/></a>
                            <a onClick={onSubmit}  className='search-in'><i className="fas fa-search"></i></a>
                        </li>
                    </ul>
                </div>
    )
}
export default Menu;