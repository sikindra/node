import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthUser from "./AuthUser";

const Menu = () => {
  const {http,setToken} = AuthUser();
  const [profile,setData]=useState([])
  useEffect(()=>{
    let body={
      "UserId": sessionStorage.getItem('userId')};
      
     
      http.post("profile", body).then((res)=>{
        
        setData(res.data.data)
       
         
          
          
       
      }).catch((err)=>(
              // toast.error("Invalid  password")
              console.log("error not send", err)
          ));

    

  },[])
  console.warn(profile);
  
  const location = useLocation();
    const action = 'nav-link active';
    const actions = 'nav-link';
    
    let comp;

    if(location.pathname === '/sms-api-reports'){

      comp = <div className="d-flex justify-content-between mb-1">
              <div className="page-title">
                <div className="title-wrap">
                  <h1 className="title is-4">
                    SMS API REPORT       </h1>
                </div>
              </div>
              <ul className="nav nav-tabs has-white t-btn">
                <li className="nav-item"><a className= {(() => { if (location.pathname === '/sms-api-reports') { return ( action ) }else{ return ( actions ) } })()} href="sms-api-reports">API Reports</a></li>
                <li className="nav-item"><a className= {(() => { if (location.pathname === '/sms-search-data') { return ( action ) }else{ return ( actions ) } })()} href="sms-search-data">Search Data</a></li>
              </ul>
          </div> 
      
    } 
  return (
    <div>
      {
      profile.map((item,i)=>
      <div className="balance-strip justify-content-between">
        <div className="card shadow-primary bg-primary text-white">
          <div className="d-flex">
            <div className="id-bal">
              <i className="lnil lnil-user-alt-2" />
              <span>
                <strong>ID :</strong> <span>{item.ProfileId}</span>
              </span>
            </div>
            <div className="id-bal">
              <i className="lnil lnil-rupee-coin" />
              <span>
                <strong>Balance :</strong> <span>{item.Balance}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      )}
      
      {comp}
      
    </div>
  );
};
export default Menu;
