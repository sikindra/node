
import Menu from "./Menu";
import Sidebar from "./Sidebar";
const Generate_http_api = () => {
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
            <Menu />
            
             
              
        </div>
         
            
          
        
       
      );

}
export default Generate_http_api;