import React from 'react';
import styles from './Login.module.css';
import {useState} from 'react';
function Login(){
    const a=JSON.parse(localStorage.getItem('acc')).tk
    const b= JSON.parse(localStorage.getItem('acc')).mk;
    const [accTk,setAccTk]=useState(()=>{
        return a;
    })
    const [accMk,setAccMk]=useState(()=>{
        return b;
    })
    const [email,setEmail]=useState('');
    const [p1,setP1]=useState('');
   
  
    const handleLogin=(e)=>{
        if(accTk===email&&accMk===p1){
            localStorage.setItem('load',JSON.stringify(true))
        }else{
            e.preventDefault();
            alert('Thông tin tài khoản không chính xác !')
        }
    }
    return (
        <div className={`container-fluid ${styles.loginFluid}`}>
            <form action="/" onSubmit={handleLogin} className={styles.login}>
                <div className="row">
                <h1 className="text-center">Đăng nhập</h1>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email address</label>
                    <input type="email"
                    value={email}
                     className="form-control" 
                     name='email'
                      placeholder="name@example.com"
                      onChange={e=>setEmail(e.target.value)}
                      />
                </div>
                <div className="mb-3">
                    <label htmlFor='p1' 
                    className="form-label">Password</label>
                    <input type="text" 
                    className="form-control"
                    value={p1}
                     name='p1'
                      placeholder="VD:Kienkekek13@"
                      onChange={e=>setP1(e.target.value)}
                      />
                </div>
                <div className="f-ck form-check">
                    <input className="CK form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                <label className="form-check-label" >
                    Agree to terms and conditions
                </label>
                </div>
                <div className="text-center mb-3">
                <button type="submit" className="Lgin btn btn-success">Đăng nhập</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default (Login);