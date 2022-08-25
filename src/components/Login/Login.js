import React from 'react';
import styles from './Login.module.css';
import { Formik } from 'formik';
function Login(){
    
    return (
        <div className={`container-fluid ${styles.loginFluid}`}>
            <Formik

                initialValues={{
                    email:'',
                    password:'',
                    remember_me:''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    }
                    return errors;
                  }}
                onSubmit={
                    values=>{}
                }
            >
                {
                    props=>{
                        const {values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting}=props;
                        
                        return (
                            <form onSubmit={handleSubmit}  className={styles.login}>
                    <div className="row">
                    <h1 className="text-center">Đăng nhập</h1>
                    <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email address</label>
                    <input 
                     className="form-control" 
                     name='email'
                      placeholder="name@example.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                      <div style={{color:"red"}}>{errors.email}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor='password' 
                    className="form-label">Password</label>
                    <input type="text" 
                    className="form-control"
                     name='password'
                      placeholder="VD:Kienkekek13@"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                       <div style={{color:"red"}}>{errors.password}</div>
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
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default (Login);