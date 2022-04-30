import Cart from '../components/Cart/Cart';
import Contact from '../components/Contact/contact';
import Header from '.././components/Header';
import Footer from '.././components/Footer/Footer';
function CartPage(){
    return (
        <div className="container-fluid">
               <Contact/>
        <Header/>
        <div className='content '><br/>
        <Cart/>
        </div>
        <Footer/> 
        
        </div>
    )
}

export default CartPage;