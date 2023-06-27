import logo from './logo.svg';

import inbox from './img/login-sms.svg';
import AuthUser from './component/AuthUser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Apps(){
  const {http} = AuthUser();
  const [name, userName] = useState('');
  const [pass, password] = useState('');
  const usenavigate=useNavigate();
  

    useEffect(()=>{
sessionStorage.clear();
    },[]);
  
  const UserLogin = (e) => {
    e.preventDefault();
    if(validate()){
     
      let body={"UserName": name,
      "password": pass};
      
      http.post("login", body)
      .then((res)=>{
              //console.log(res);
              if (res.data.success==100) {
                toast.success(res.data.message);
                sessionStorage.setItem('userId',res.data.userId);
                sessionStorage.setItem('token',res.data.token);
                usenavigate('/dashboard')
                
              }else if(res.data.success==102){
                toast.error('Invalid UserName');
              }else {
                toast.error("Invalid  password");

              }
              
            }).catch((err)=>(
              toast.error("Invalid  password")
              // console.log("error not send", err)
          ));
      

    }
  }
  const validate=()=>{
    let result=true;
    if(name ==='' || name ===null){
      result=false;
      toast.error('Please Enter Username');
    }
    if(pass ==='' || pass ===null){
      result=false;
      toast.error('Please Enter Password');
      
      
    }
    return result;
  }

 
  return (
    <div>
      <div id="wrapper"> 
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column"> 
            {/* Main Content */}
            <div className="page-content-wrapper blank"> 
              {/* Begin Page Content */}
              <div className="container-fluid"> 
                <div className="text-center mt-5">
                  
                  <img src={logo} alt="" className="w-auto"/>
                </div>
                <div className="row mt-4 justify-content-center">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-lg">
                      <div className="card-body login-page">
                        <div className="row">
                          <div className="col-md-6">
                          <form onSubmit={UserLogin}>
                              <h5>Login</h5>
                              <p>Welcome back to your account.</p>
                              <div className="form-group">
                                <div className="control has-icon">
                                  <input type="text" value={name} onChange={e=>userName(e.target.value)} className="form-control" placeholder="Username"  />
                                  <label className="label form-icon" htmlFor="usrName"><i className="lnil lnil-user" /></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="control has-icon">
                                  <input type="password" value={pass} onChange={e=>password(e.target.value)} className="form-control" placeholder="Password"  />
                                  <label className="label form-icon" htmlFor="pswd"><i className="lnil lnil-lock-alt" /></label>
                                </div>
                              </div>
                              <div className="form-group d-flex justify-content-between align-items-center">
                                <button type='submit' className="btn btn-primary" >Login</button>
                                <a href="#">Forgot Password?</a>
                              </div>
                              <small className="text-muted">By continuing you agree to the <a href="#">Terms</a></small>
                            </form>
                          </div>
                          <div className="col-md-6 text-center">
                            <h5 className="text-primary">MSEDCL SMS Panel</h5>
                            <small className="text-muted">Login to SMS panel by entering user details</small>
                            
                             <img src={inbox} alt="" className="img-fluid mt-2"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */} 
            </div>
            {/* End of Main Content */} 
          </div>
          {/* End of Content Wrapper */} 
        </div>
      
      
      <ToastContainer />
    </div>
  );
}
export default Apps;