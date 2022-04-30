import Category from '../categogy/Category';
import {memo} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/productsAction';
function TatCaSanPham(){
    
    const state=useSelector(state=>state.productReducer)
    const a=state.dataproducts;
    const b=state.category;
    const dispatch=useDispatch();
    const handleSoft=()=>{
        dispatch(actions.onSoftProduct(20000000))
    }
    const getData=(e) =>{
        dispatch(actions.getDataProduct(e))
        
    }
    const onBanChay=()=>{
        dispatch(actions.onBanChay(500))
    }
    return(
        <div className="all-product container-fluid">
            <div className="row">
                <div className="col-2">
                    <br/>
                    <Category/>
                    
                </div>
                <div className="col-10 x"><br/>
                    <div className="row">
                        <div className="btn-group col-4" role="group" aria-label="Basic outlined example">
                            <button className='btn btn-primary'><i className="fas fa-filter"></i></button>
                            <button type="button" className="btn btn-outline-primary" onClick={handleSoft}>Giảm giá nhiều</button>
                            <button type="button" className="btn btn-outline-primary" onClick={onBanChay}>Bán chạy</button>
                        </div>
                    </div><br/>    
                    <div className="row swap">
                    
                    {(b.length==0?a:b).map((product,index)=>{
                    return (
                        <div  key={index} className=" col-3 product-item">
                            <img src={product.img}/>
                            <Link to='/products/muahang' onClick={()=>getData(product.id)}>{product.title}</Link><br/>
                            <span>{product.price}đ</span><br/>
                            <i>Đã bán :{product.sold}</i>
                        </div>
                    )
                })}        
                    </div><br/>
                   
                </div>
            </div>
                
        </div>
    )
}


export default memo(TatCaSanPham);