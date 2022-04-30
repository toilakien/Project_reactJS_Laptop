import ThongTin from "./ThongTinShop/ThongTinShop";
import BtnLog from "./login_upBtn/Loin_up";
import Menu from "./Menu/Menu";
function Header(){
    return (
        
        <div className=" header">
            <div className='row'>
                <div id="1" className='col-6'>
                    <ThongTin/>
                </div>
                <div className='col-6 cart'>
                    <div className='row'>
                         <BtnLog/>
                    <div className='col-4'>
                    <span>0</span>
                     <a href='/products/muahang/cart'><i className="fas fa-shopping-cart"></i></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Menu/>
            </div>
        </div>
        
    )
}
export default Header;