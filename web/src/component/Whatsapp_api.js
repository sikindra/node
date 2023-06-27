
import axios from "axios";
import { useState } from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
const Whatsapp_api = () => {
    const [number, setNumber] = useState()
    
    const header={
        headers: {
            Authorization: `Bearer EAAId8mIjSOABAOdrT53gnxuVAGbVTPniYrqdLCy9S7gaxuZBLuguFqKhoLAdR0xlSV7cQSbwuWiOFSo32xRgqQFcLyIqUI0o3itHBMPK4ZBCsqLKzTdq37CDTz6IVT8Lnhq2pIE59RkSAETwRfozpIjlhAPRlMYs7lkoyqHbZCAZAxi3VqKEy5YZBukvLQ5jVCkvL6ReWawZDZD`
           , Accept:'Content-Type: application/json',
        }
    }
    const sendMsg = ()=> {
        console.log("Number is",number)
        const body = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "preview_url": false,
            "to": "91"+number,

            "type": "template", 
            "template": { "name": "hello_world",
                        "language": { "code": "en_US" }
            }
        }
        axios.post("https://graph.facebook.com/v16.0/109136792201994/messages", body, header)
        .then((res)=>(
            console.log("msg send",res)
        ))
        .catch((err)=>(
            console.log("error not send", err)
        ))
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
                   
                 
                   
                  <div className="card mb-6">
                    <div className="card-body">
                     
                        <div className="form-group">
                          <input type="text" className="form-control"onChange={(e)=>setNumber(e.target.value)} id="" name=""  />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-icon" onClick={sendMsg}><i className="lnil lnil-search-alt" />send</button>
                        </div>
                     
                    </div>
                  </div>
                  
                 
                  
                </div>
                
                </div>
                </div>


              
        </div>
        </div>
         
            
          
        
       
      );

}
export default Whatsapp_api;