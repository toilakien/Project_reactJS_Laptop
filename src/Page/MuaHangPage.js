import Contact from '../components/Contact/contact';
import Header from '.././components/Header';
import Footer from '.././components/Footer/Footer';
import MuaHang from '.././components/MuaHang/MuaHang';
function MuaHangPage(){
    return (
        <div className="container-fluid">
               <Contact/>
        <Header/>
        <div className='content '><br/>
        <MuaHang/>
        </div>
        <Footer/> 
        
        </div>
    )
}
export default MuaHangPage;