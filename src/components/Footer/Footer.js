import FooterItem from "./FooterItem";
import styles from './Footer.module.css'
function Footer(){
    return(
        <div className={`container-fluid  ${styles.footer}`}>
            <div className='row'>
               <FooterItem/>
            </div>
        </div>
    )
}
export default Footer;