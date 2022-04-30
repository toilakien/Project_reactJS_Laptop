import Contact from '../components/Contact/contact';
import Header from '.././components/Header';
import Footer from '.././components/Footer/Footer';
import HoSoCuaHang from '.././components/HoSoCuaHang/HoSoCuaHang';
function HoSoCuaHangPage(){
    return (
        <div className="container-fluid">
               <Contact/>
        <Header/>
        <div className='content '><br/>
        <HoSoCuaHang/>
        </div>
        <Footer/> 
        
        </div>
    )
}
export default HoSoCuaHangPage;