import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard  from './component/Dashboard';
import Entity from './component/Entity';
import Sms_Report from './component/Sms_Report';
import Sender from './component/Sender';
import Template from './component/Template';
import Generate from './component/Generate_http_api';
import Api_key from './component/Api_key';
import Whats from './component/Whatsapp_api'
import Sms_search_data from './component/Sms_search_data';
import Mis from './component/Mis'
import Logout from './component/Logout';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  

<React.StrictMode>
   
    <BrowserRouter>
      <Routes>
        
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sms-api-reports" element={<Sms_Report />} />
          <Route path="entity" element={<Entity />} />
          <Route path="sender" element={<Sender />} />
          <Route path="template" element={<Template />} />
          <Route path="sms-search-data" element={<Sms_search_data />} />
          <Route path="mis" element={<Mis />} />
          <Route path="api-key" element={<Api_key />} />
          <Route path="generate-http-api" element={<Generate />} />
          <Route path="Whatsapp-api" element={<Whats />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/" element={<App />} />
          

      
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
