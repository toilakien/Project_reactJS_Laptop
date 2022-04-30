import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/contact';
import TatCaSanPham from '../components/TatCaSanPham/TatCaSanPham';
import Header from '../components/Header';
function ProductsPage(){
    return (
        <div className="container-fluid">
               <Contact/>
        <Header/>
        <div className='content '><br/>
        <TatCaSanPham/>
        </div>
        <Footer/> 
        
        </div>
    )
}
export default ProductsPage;