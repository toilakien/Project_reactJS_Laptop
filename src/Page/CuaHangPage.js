import Contact from '../components/Contact/contact';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import CuaHang from '../components/CuaHang/CuaHang';
function CuaHangPage(){
    
    return (
        <div className="container-fluid">
               <Contact/>
       <Header/>
        <div className='content '><br/>
        <CuaHang/>
        </div>
        <Footer/> 
        
        </div>
    )
}
export default CuaHangPage;