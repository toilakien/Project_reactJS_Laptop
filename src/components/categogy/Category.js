import { useDispatch } from 'react-redux';

import *as actions from '../../redux/actions/productsAction';
function Category(){
    const dispatch=useDispatch();
    const a=()=>{
        dispatch(actions.findAsus('Laptop Asus'))
    }
    const b=()=>{
        dispatch(actions.findDev('Del'))
    }
    const c=()=>{
        dispatch(actions.findLenovo('Lenovo'))
    }
    const d=()=>{
        dispatch(actions.findMacbook('Macbook'))
    }
    return(
        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            DANH MỤC
                        </button>
                        <button id="MAC" type="button" className="list-group-item list-group-item-action"onClick={d}>Macbook</button>
                        <button id="ASUS"  type="button"  className="list-group-item list-group-item-action" onClick={a}>Asus</button>
                        <button  id ="DELL"type="button" className="list-group-item list-group-item-action" onClick={b}>Dell</button>
                        <button id="LENOVO" type="button" className="list-group-item list-group-item-action"onClick={c}>Lenovo</button>
                        
                    </div>
    )
}
export default Category;