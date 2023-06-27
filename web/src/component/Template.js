
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
const Template = () => {
  
   
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getToken  = sessionStorage.getItem('token');
  if(getToken==null){
    return (
      
       console.log( window.location.href = ("/"))
       );
  

  }
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
         
          <div id="SMSAPIfull" className="page-content-wrapper">
          <div className="container-fluid">
              <Menu />
              <div className="d-flex justify-content-between">
               <div className="page-title">
                  <div className="title-wrap">
                     <h1 className="title is-4">Manage Template</h1>
                  </div>
               </div>
               <select id="txtTemplateCategory" name="txtTemplateCategory" class="form-control">
									<option value="">Select Template Category</option>
																		<option value="Transaction">Transaction</option>
																		<option value="Service">Service</option>
																		<option value="Promotion">Promotion</option>
																	</select>
               <button
                  type="button"
                  className="btn btn-primary t-btn"
                  data-toggle="canvas"
                  data-target="#bs-canvas-right"
                  aria-expanded="false"
                  aria-controls="bs-canvas-right"
                  >
               <i className="lnil lnil-plus icon" /> Add Template
               </button>
            </div>
              </div>
            
            
          </div>
          
          
      </div>
   </div>
    </div>
  
  );

    

}
export default Template;