
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react"
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthUser from "./AuthUser";


const Entity = () => {
 
  const {http,setToken} = AuthUser();
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [entity,setData]=useState([])
  
  useEffect(()=>{
    let body={
      "UserId": sessionStorage.getItem('userId')};
     
      http.post("entity", body).then((res)=>{
        console.log(res.data.success);
        if(res.data.success==1){
          setData(res.data.data)

        }else{
          console.log( window.location.href = ("/"))
        }
       
         
          
          
       
      }).catch((err)=>(
              // toast.error("Invalid  password")
              console.log("error not send", err)
          ));

    

  },[])
  console.warn(entity);
  const [currentPage,setCurrentPage]=useState(1);
  const count = 1;
  const recorsPerPage = 10;
  const npage = Math.ceil(entity.length / recorsPerPage);
  const TotalCount = entity.length;
  const numbers = [...Array(npage + 1).keys()].slice(1)
  const lastIndex = currentPage * recorsPerPage;
  const firstIndex = lastIndex - recorsPerPage;
  const srNo = (currentPage - 1 ) * recorsPerPage;
  
 
  const records = entity.slice(firstIndex, lastIndex);

  
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
                      <h1 className="title is-4">Manage Entities</h1>
                    </div>
                  </div>
                  {/* <button type="button" className="btn btn-primary t-btn" data-toggle="canvas" data-target="#bs-canvas-right" aria-expanded="false" aria-controls="bs-canvas-right"><i className="lnil lnil-plus icon" /> Add Entity</button> */}
                  <Button variant="primary" type="button" className="btn btn-primary t-btn" onClick={handleShow}><i className="lnil lnil-plus icon" /> Add Entity</Button>
                  
                 
                  <Modal show={show} onHide={handleClose} >
                    <header className="bs-canvas-header">
                      <Button variant="secondary" onClick={handleClose} type="button" className="bs-canvas-close close"><span >×</span></Button>
                      <h5>Add Entity</h5>
                    </header>
                    <Modal.Body>
                      <div className="bs-canvas-content">
                        <form onSubmit={entityHandle} >
                          <div className="form-group">
                            <label>Entity ID</label>
                            <input type="text" className={EnterIdError} placeholder="Enter ID" onChange={enterIdHandle}/>
                            
                          </div>
                          <div className="form-group">
                            <label>Remark</label>
                            <input type="text" className={remarkError} placeholder="Enter Remark" onChange={remarkHandle} />
                            <span className="message1 danger" style={{color: 'red'}} />
                          </div>
                          <Button variant="primary" type="submit">Save</Button>
                        </form>
                      </div>
                    </Modal.Body>
                  </Modal>
      
                 
                  
                </div>
                {/* Off-canvas */}
                
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody><tr>
                            <th>Sr No</th>
                            <th>Entity</th>
                            <th>Creation Date</th>
                            <th>Status</th>
                            <th>Remark</th>
                            <th>Tools</th>
                          </tr>
                          
       

                          
                          {/* {data.map((items, index) => {})} */}
                            
                          {
                              
                              records.map((item, i)=>
                              <tr>
                            <td>{srNo + i +1}</td>
                            <td>{item.EntityId}</td>
                            <td>{item.EntryDateTime}</td>
                            <td>
                             
                              <small className="tag is-success">ACTIVE</small>
                              
                             </td>
                            <td>{item.Remark}</td>
                            <td>
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
            </div>
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
export default Entity;