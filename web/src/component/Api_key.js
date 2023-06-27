
import Menu from "./Menu";
import Sidebar from "./Sidebar";
const Api_key = () => {
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
export default Api_key;