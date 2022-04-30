import {memo,useEffect,useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/productsAction';
function Cart(){
    const [total,setTotal]=useState(0);
    const state=useSelector(state=>state.productReducer)
    const carts=state.cart;
    console.log(carts);
    const dispatch=useDispatch();
   useEffect(()=>{
    let p=0;
    carts.forEach(item => {
        
        p +=item.price;
    });
    setTotal( p);
   },[carts])
   const removeItem=(id)=>{
       dispatch(actions.removeItemCart(id))
   }
    return (
        <div className="container">
            <div className="alert alert-info" role="alert">
                <h1 className="text-center">Giỏ Hàng</h1>
            </div>
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Tên Sản phẩm</td>
                        <td>Số lượng</td>
                        <td>
                            Tool
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart,index)=>{
                        return (
                            <tr key={cart.id}>
                                <td>{index+1}</td>
                                <td>{cart.title}</td>
                                <td>1</td>
                                <td><button className='btn btn-danger'onClick={removeItem(cart.id)} >Xóa</button></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={4}>
                        <div className="mb-3 row">
                            <label  className="col-3 col-form-label">Họ và tên(*)</label>
                            <div className="col-6">
                                <input className="form-control" type="text" placeholder='VD:Lê Văn Kiên' required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label  className="col-3 col-form-label">Số điện thoại(*)</label>
                            <div className="col-6">
                                 <input className="form-control" placeholder='VD:0386785259' required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label  className="col-3 col-form-label">Địa chỉ giao hàng(*)</label>
                            <div className="col-6">
                                 <input className="form-control" placeholder='VD:Hà Lai-Hà Trung-Thanh Hóa' required/>
                            </div>
                        </div>
                        </td>
                        
                    </tr>
                    <tr>
                       
                        <td>
                            Tổng tiền: <b>{total}</b>
                        </td>
                        <td>
                            <a href='/products' className="btn btn-success"> Thanh Toán</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default memo(Cart);