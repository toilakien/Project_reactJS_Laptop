import React from "react";
import { memo,useState } from "react";
function Logup(){
    const [p1,setP1]=useState('');
    const [p2,setP2]=useState('');
    const [email,setEmail]=useState('');
    const hanhdleSubmit=(event)=>{
        event.preventDefault();
    }
    setTimeout(()=>{
        hanhdleSubmit()
    },3000)
    
    const check=(e)=>{
        
        if(email&&p1&&p2){
            if(p2!==p1){
                e.preventDefault();
                alert('Mật khẩu nhập không khớp !!')
            }else{
                const acc={tk:email,mk:p1}
            localStorage.setItem("acc",JSON.stringify(acc))
            alert("Chúc mừng bạn đã đăng kí thành công!!")
            }
        }else{
            alert("Vui lòng điền đủ thông tin")
        }
       
    }
    return (
       <div  className="container-fluid logup-fluid">
           <form action="/login" onSubmit={()=>hanhdleSubmit} name="myForm"  className="row logup">
                <h1 className="text-center">Đăng kí </h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control"
                    name="email"  
                    placeholder="name@example.com" 
                    required
                    onChange={e=>setEmail(e.target.value)}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="p1"  className="form-label">Mật khẩu</label>
                    <input type="text" 
                    className="form-control" 
                    name="p1"  
                    placeholder="VD:Kienkekek13@" 
                    required
                    onChange={e=>setP1(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="p2" className="form-label">Nhập lại mật khẩu</label>
                    <input type="text" 
                     className="form-control"
                      name="p2"
                       placeholder="VD:Kienkekek13@"
                       required
                       onChange={e=>setP2(e.target.value)} 
                       />
                </div>
                
                <div className="text-center mb-3">
                <button onClick={check} type="submit" className="l-up btn btn-success">Đăng kí</button>
                </div>
            </form>
       </div>
    )
}
export default memo(Logup);