
import Menu from "./Menu"
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react"
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AuthUser from "./AuthUser";

const Sender = () => {
  const {http} = AuthUser();
  
 
  
  
  const [EnterId,setEnterId]=useState("");
  const [EnterR,setEnterR]=useState("");
  const [EnterIdError,setEntityError]=useState("form-control");
  const [remarkError,setRemarkError]=useState("form-control");
  
  
  
  function entityHandle(e){
    
    e.prevventDefault()
  }
  function enterIdHandle(e){
    let entity=e.target.value
    if(entity.length<19){
      setEntityError("form-control is-invalid")
      

    }else{
      setEntityError("form-control is-valid")
    }
  }
  function remarkHandle(e){
    let entity=e.target.value
    if(entity.length<0){
      setRemarkError("form-control is-invalid")
      

    }else{
      setRemarkError("form-control is-valid")
    }
  }
  const [SenderList,setRecords]=useState([])
  const [entity,setEntity]=useState([])
  useEffect(()=>{
    let body={
      "UserId": sessionStorage.getItem('userId')};
      http.post("sender", body).then((res)=>{
      if(res.data.success==1){
        setRecords(res.data.data)

      }else{
        console.log(window.location.href = ("/"))
      }
    })
   
      
        
  
    },[])
    // console.warn(SenderList)
  
  const [currentPage,setCurrentPage]=useState(1);
  const count = 1;
  const recorsPerPage = 10;
  const npage = Math.ceil(SenderList.length / recorsPerPage);
  const TotalCount = SenderList.length;
  const numbers = [...Array(npage + 1).keys()].slice(1)
  const lastIndex = currentPage * recorsPerPage;
  const firstIndex = lastIndex - recorsPerPage;
  const srNo = (currentPage - 1 ) * recorsPerPage;
  
 
  const records = SenderList.slice(firstIndex, lastIndex);
  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
   
   
    useEffect(()=>{
      let body={
        "UserId": sessionStorage.getItem('userId')};
        http.post("entity", body).then((res)=>{
     
          if(res.data.success==1){
            setEntity(res.data.data)
  
          }else{
            console.log( window.location.href = ("/"))
          }
      })
   
  
    },[])
    console.warn(entity)
      
    
  
 
    const getToken  = sessionStorage.getItem('token');
  if(getToken==null){
    return (
      
       console.log( window.location.href = ("/"))
       );
  

  }
  
  
 

    return (
        <div>
            <div className="wrapper">
                <Sidebar />

            </div>
           
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="SMSAPIfull" className="page-content-wrapper">
                {/* Begin Page Content */}
                <div className="container-fluid">
                <Menu />
                  <div className="d-flex justify-content-between">
                    <div className="page-title">
                      <div className="title-wrap">
                        <h1 className="title is-4">Manage Sender</h1>
                      </div>
                    </div>
                    <Button variant="primary" type="button" className="btn btn-primary t-btn" onClick={handleShow}><i className="lnil lnil-plus icon" /> Add Sender</Button>
                  
                 
                  <Modal show={show} onHide={handleClose} >
                    <header className="bs-canvas-header">
                      <Button variant="secondary" onClick={handleClose} type="button" className="bs-canvas-close close"><span >×</span></Button>
                      <h5>Add Sender</h5>
                    </header>
                    <Modal.Body>
                      <div className="bs-canvas-content">
                        <form onSubmit={entityHandle} >
                          <div className="form-group">
                            <label>Entity ID</label>
                            <select id="txtTemplateCategory" name="txtTemplateCategory" class="my-select selectpicker">
									<option value="">Select Template Category</option>
																		<option value="Transaction">Transaction</option>
																		<option value="Service">Service</option>
																		<option value="Promotion">Promotion</option>
																	</select>
                            
                          
                          
                             
                          </div>
                          <div className="form-group">
                            <label>Remark</label>
                            <input type="text" className="form-control" placeholder="Sender Name" id="txtSender" name="txtSender" />
                            <span className="message1 danger" style={{color: 'red'}} />
                          </div>
                          <Button variant="primary" type="submit">Save</Button>
                        </form>
                      </div>
                    </Modal.Body>
                  </Modal>
                    {/* <button type="button" className="btn btn-primary t-btn" data-toggle="canvas" data-target="#bs-canvas-right" aria-expanded="false" aria-controls="bs-canvas-right"><i className="lnil lnil-plus icon">
                      </i> Add Sender</button> */}
                  </div>
                  {/* Off-canvas */}
                  {/* <div id="bs-canvas-right" className="bs-canvas bs-canvas-anim bs-canvas-right h-100">
                    <header className="bs-canvas-header">
                      <button type="button" className="bs-canvas-close close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h5>Add Sender</h5>
                    </header>
                    <div className="bs-canvas-content">
                      <form name="frmSearch" id="frmSearch" method="post">
                        <div className="form-group">
                          <label>Entity</label>
                          <select className="my-select selectpicker" id="ddlDeliveryType" name="ddlDeliveryType">
                            <option value>All Entity</option>
                            <option value={8}>150*************739&nbsp;()</option>
                            <option value={11}>170*************962&nbsp;(hero)</option>
                          </select>
                          <span className="message text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Sender</label>
                          <input type="text" className="form-control" placeholder="Sender Name" id="txtSender" name="txtSender" />
                          <span className="message1 text-danger" />
                        </div>
                        <button type="button" className="btn btn-primary" id="btmsave" name="btmsave">Save</button>
                      </form>
                    </div>
                  </div> */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <form className="form-inline" name="frmSearch" id="frmSearch" method="post">
                        <div className="form-group">
                          <select className="my-select selectpicker " id="ddlDeliveryType" name="ddlDeliveryType">
                            <option value>All Entity</option>
                            <option value={8}>150*************739&nbsp;()</option>
                            <option value={11}>170*************962&nbsp;(hero)</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input className="form-control" placeholder="Sender Name" id="txtSender" name="txtSender" defaultValue />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-icon" id="cmdSearch" name="cmdSearch"><i className="lnil lnil-search-alt" /></button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <tbody><tr>
                              <th>Sr No</th>
                              <th>Sender</th>
                              <th>Entity</th>
                              <th>Approved On</th> 
                              <th>Status</th>
                              <th>Tools</th>
                            </tr>
                            {
                             
                              records.map((d,i)=>
                              
                            
                              <tr key={i}>
                            <td >{ srNo + i + 1 }</td>
                            <td >{d.SenderId}</td>
                            <td >{d.DltEntityId}</td>
                            <td >{d.ApprovalDate}</td>
                            <td >
                             
                              <small className="tag is-success">ACTIVE</small>
                              
                             </td>
                            
                            <td >
                              <div className="buttons">
                                <button type="button" className="button tooltip-top" data-tooltip="Delete"><i className="lnil lnil-trash" /></button>
                              </div>
                            </td>
                          </tr>
                              )}
                           
                           
                          </tbody></table>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div className="table-page">Showing page {currentPage} of {TotalCount}&nbsp;(Total  Records)</div>

                    <ul className="pagination">
                      {/* <li className="page-item">
                        <a className="page-link" href="#" onClick={perPage}>Prev</a>
                        </li> */}
                        {
                          numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''} `} key={i}>
                             <a className="page-link" href="#" onClick={() => changeCpage(n)}>{n}</a>
                       

                            </li>

                          ))
                        }
                        {/* <li className="page-item">
                        <a className="page-link" href="#" onClick={nextPage}>Next</a>
                        </li> */}
                        </ul>                     

                  </div>
                </div>
                {/* /.container-fluid */} 
              </div>
              {/* End of Main Content */} 
            </div>
            
            
             
              
        </div>
         
            
          
        
       
      )
      function perPage() {
        if(currentPage !== 1){
          setCurrentPage(currentPage - 1)
        }
        
      }
      function changeCpage(id){
        setCurrentPage(id)

      }
      function nextPage() {
        if(currentPage !== npage){
          setCurrentPage(currentPage + 1)
        }

      }

}
export default Sender;

