import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = tokenString;
        
        return userToken;
    }
    
    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = userString;

        return user_detail;
    }



    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());
   
    const saveToken = (success,message,user,token,userId) =>{
        if(success==100){
            sessionStorage.setItem('token',token);
            sessionStorage.setItem('user',user);
            sessionStorage.setItem('success',success);
            sessionStorage.setItem('userId',userId);
            
            navigate('/dashboard');
            
            

        }else if(success==102){
            
            toast.error('Invalid UserName');
            

        }else{
            toast.error("Invalid  password");

        }
        
        // if (res.data.success==100) {
        //     toast.success(res.data.message);
        //     sessionStorage.setItem('success',res.data.message)
        //     sessionStorage.setItem('user',res.data.user);
        //     sessionStorage.setItem('token',res.data.token);
        //     setToken(token);
        
        //     setUser(user);
        //     navigate('/dashboard');
            
        //   }else if(res.data.success==102){
        //     toast.error('Invalid UserName');
        //   }else {
        //     toast.error("Invalid  password");

        //   }
          
        // }
        
    }

    const logout = () => {
        sessionStorage.clear();
        console.log( window.location.href = ("/"))
    }

    const http = axios.create({
        baseURL:"http://localhost:4000/api/users/",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}