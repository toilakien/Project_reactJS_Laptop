import { dataList1,dataList2 } from "./DataFooter";
import styles from './Footer.module.css'
function FooterItem(){
    return(
        <div className="row">
                <div className="col-3">
                <div className='title-list'> Hỗ trợ khách hàng</div>
                <ul className={styles.footerList}>
                    {dataList1.map((data,index)=>{
                        return(
                        <li className="listNone"  key={index}>
                            <a>{data.list}</a>
                        </li>
                        )
                    })}
                </ul>
                </div>
                <div className="col-3">
                <div className='title-list'> Giới thiệu về kienleshop</div>
                    <ul className={styles.footerList}>
                        {dataList2.map((data,index)=>{
                            return(
                            <l className="listNone"i key={index}>
                                <a>{data.list}</a>
                            </l>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-3">
                <div className='title-list'> Phương thức thanh toán</div>
                    <ul className={styles.footerList}>
                        <li className="listNone">
                            <a className={styles.iconContactCss}>
                                <i  className=" fab fa-cc-visa"></i>

                            </a>
                           <a  className={styles.iconContactCss}>
                           <i className="fab fa-cc-stripe"></i>
                           </a>
                           <a  className={styles.iconContactCss}>
                           <i className="fab fa-cc-amazon-pay"></i>
                           </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-3">
                <div className='title-list'> Kết nối với chúng tôi</div>
                    <ul className={styles.footerList}>
                        <li className="listNone">
                            <a  className={styles.iconContactCss}>
                                <i className="fab fa-facebook"></i>

                            </a>
                           <a  className={styles.iconContactCss}>
                                <i className="fab fa-youtube"></i>
                           </a>
                           <a  className={styles.iconContactCss}>
                                <i className="fab fa-instagram"></i>
                           </a >
                        </li>
                        
                    </ul>
                </div>
                
        </div>
    )
}
export default FooterItem;