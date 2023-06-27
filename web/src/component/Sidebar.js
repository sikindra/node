import { Link, NavLink, useLocation } from "react-router-dom";
import profile from '../img/avatar-male.png';
import logo from '../img/logo.svg'


const Sidebar = () => {
  
   
    const location = useLocation();
    const action = 'account-tab-item active';
    const actions = 'account-tab-item ';
    
    
    let comp;

    if(location.pathname === '/entity' || location.pathname === '/sender' || location.pathname === '/template' || location.pathname === '/api-key' || location.pathname === '/generate-http-api'|| location.pathname === '/whatsapp-api'){

      comp = <div className="sub-sidebar">
              <div className="account-tab">
                <div className="title">SMS API</div>
                <Link to="/entity"  className= {(() => { if (location.pathname === '/entity') { return ( action ) }else{ return ( actions ) } })()} ><i className="lnil lnil-licencse" />
                  <span>Entity</span>
                  <span className="end">
                    <i aria-hidden="true" className="lnil lnil-arrow-right" />
                  </span></Link>
                  <Link to="/sender"  className= {(() => { if (location.pathname === '/sender') { return ( action ) }else{ return ( actions ) } })()} ><i className="lnil lnil-pointer" />
                  <span>Sender</span>
                  <span className="end">
                    <i aria-hidden="true" className="lnil lnil-arrow-right" />
                  </span></Link>
                  <Link to="/template"  className= {(() => { if (location.pathname === '/template') { return ( action ) }else{ return ( actions ) } })()} ><i className="lnil lnil-library" />
                  <span>Manage Template</span>
                  <span className="end">
                    <i aria-hidden="true" className="lnil lnil-arrow-right" />
                  </span></Link>

                  <Link to="/api-key"  className= {(() => { if (location.pathname === '/api-key') { return ( action ) }else{ return ( actions ) } })()} ><i className="lnil lnil-code" />
                  <span>Api Key</span>
                  <span className="end">
                    <i aria-hidden="true" className="lnil lnil-arrow-right" />
                  </span></Link>
                  <Link to="/generate-http-api"  className= {(() => { if (location.pathname === '/generate-http-api') { return ( action ) }else{ return ( actions ) } })()} ><i className="lnil lnil-code-alt" />
                  <span>Api Key</span>
                  <span className="end">
                    <i aria-hidden="true" className="lnil lnil-arrow-right" />
                  </span></Link>
                  <Link to="/whatsapp-api"  className= {(() => { if (location.pathname === '/whatsapp-api') { return ( action ) }else{ return ( actions ) } })()} ><i className="lnil lnil-code-alt" />
                  <span>Whats chat</span>
                  <span className="end">
                    <i aria-hidden="true" className="lnil lnil-arrow-right" />
                  </span></Link>

              </div>
            </div>
      
    } 
    
    
    
    const isLoggedIn = 1;
    return (
          <div>
            <div className="newsidebar">
                <ul className="mt-2 selectedMenu" >
                  <li><a href="dashboard"> <img src={logo} alt="" className="avatar"/></a></li>
                  <li className={(() => { if (location.pathname === '/sms-api-reports') { return ( action ) } })()}><NavLink to="/sms-api-reports" className="tooltip-right" data-tooltip="Report"><i className="lnil lnil-report-laptop" /></NavLink></li>
                  <li className={(() => { if (location.pathname === '/sms-api-reports') { return ( action ) } })()}><a href="mis" className="tooltip-right" data-tooltip="Mis"><i className="lnil lnil-pie-report" /></a></li>
                  <li className={(() => { if (location.pathname === '/entity') { return ( action ) } })()}><a href="entity" className="tooltip-right" data-tooltip="App"><i className="lnil lnil-3d" /></a></li>
                  
                </ul>
                
                <ul className="bottom-menu">
                  <li>
                    <div className="dropdown">
                      <a className="dropdown-toggle" href="#" role="button" id="profileLinks" data-toggle="dropdown"><img src={profile} alt="" className="avatar rounded-circle"  /></a>
                      <div className="dropdown-menu" aria-labelledby="profileLinks">
                      
                      <Link className="dropdown-item" to="/Profile"><i className="lnil lnil-user-alt-2 icon"  />Profile</Link>
                      <Link className="dropdown-item" to="/change-password"><i className="lnil lnil-lock icon"  />Change Password</Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" ><i className="lnil lnil-support icon" />Help</Link>
                      <Link className="btn btn-primary btn-block text-white" to="/login"><i className="lnil lnil-exit icon" style={{fontSize: '14px'}} />logout</Link>
                        
                        
                      </div>
                    </div>
                  </li>
                </ul>
              
            </div>
            {comp}
            
            
          </div>
              
             
            
            
           
        
         
            
          
        
       
      );
      

}
export default Sidebar;