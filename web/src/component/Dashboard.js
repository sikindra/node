
import logo from '../img/logo.svg';
import profile from '../img/avatar-male.png';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker } from 'antd';
import Sidebar from './Sidebar';

import Menu from './Menu';

const Dashboard = () => {
  const getToken  = sessionStorage.getItem('token');
  if(getToken==null){
    return (
      
       console.log( window.location.href = ("/"))
       );
  

  }
  
 
    
 
    return (
      
     
        <div>
          {/* {(() => {  toast.success('login successfully')})()} */}
          <div id="wrapper">
              
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content" className="page-content-wrapper fullwidth">
            {/* Begin Page Content */}
            <div className="container-fluid">
              <Menu />
              <div className="card mt-3">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <form
                      className="form-inline mb-2"
                      name="frmSearch"
                      id="frmSearch"
                      method="post"
                    >
                      <div className="form-group">
                        <div className="control has-icon">
                          <input
                            type="text"
                            className="form-control"
                            id="date1"
                            name="date1"
                            defaultValue="27/06/2023"
                            placeholder="DD-MM-YYYY"
                          />
                          <label className="label form-icon" htmlFor="name">
                            <i className="lnil lnil-calender-alt-4" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-icon"
                          id="cmdSearch"
                          name="cmdSearch"
                        >
                          <i className="lnil lnil-search-alt" />
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <button type="button" class="btn btn-light tooltip-top btn-icon" data-tooltip="Download CSV"><i class="lnil lnil-download"></i></button> */}
                </div>
              </div>
              <div className="page-title">
                <div className="title-wrap">
                  <h1 className="title is-4">Dashboard</h1>
                </div>
              </div>
              <div className="card-primary light db-primary-card">
                <div className="db-card">
                  <div className="light-icons primary-light rounded-circle m-auto">
                    <i className="lnil lnil-message-incoming" />
                  </div>
                  <span>
                    <strong className="text-primary">0</strong>
                    <small>SMS-In Today</small>
                  </span>
                </div>
                <div className="db-card">
                  <div className="light-icons orange-light rounded-circle m-auto">
                    <i className="lnil lnil-message-plus" />
                  </div>
                  <span>
                    <strong className="text-warning">0</strong>
                    <small>In-Queue</small>
                  </span>
                </div>
                <div className="db-card">
                  <div className="light-icons info-light rounded-circle m-auto">
                    <i className="lnil lnil-message-forward" />
                  </div>
                  <span>
                    <strong className="text-info">0</strong>
                    <small>SMS-Out Today</small>
                  </span>
                </div>
                <div className="db-card">
                  <div className="light-icons purple-light rounded-circle m-auto">
                    <i className="lnil lnil-message-block" />
                  </div>
                  <span>
                    <strong className="text-purple">0</strong>
                    <small>DND / Blocked</small>
                  </span>
                </div>
                <div className="db-card">
                  <div className="light-icons success-light rounded-circle m-auto">
                    <i className="lnil lnil-message-check" />
                  </div>
                  <span>
                    <strong className="text-success">0</strong>
                    <small>Delivered</small>
                  </span>
                </div>
                <div className="db-card border-0">
                  <div className="light-icons danger-light rounded-circle m-auto">
                    <i className="lnil lnil-message-cross" />
                  </div>
                  <span>
                    <strong className="text-danger">0</strong>
                    <small>Failed</small>
                  </span>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-8">
                  <div className="card card-primary shadow-primary">
                    <div className="card-body db-notice">
                      <div className="card-header">
                        <h5 className="text-white">Notice Board</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header">
                        <h5>Balance</h5>
                      </div>
                      <h2 className="text-primary">5000</h2>
                      <p className="text-light">Last Transactions</p>
                      <div className="db-transaction">
                        <div className="tr-items">
                          <div className="tr-icon">
                            <i className="lnil lnil-arrow-up" />
                          </div>
                          <div className="tr-item">
                            <strong>2000</strong>
                            <span>SMS Recharged</span>
                          </div>
                        </div>
                        <small>2023.02.28</small>
                      </div>
                      <div className="db-transaction">
                        <div className="tr-items">
                          <div className="tr-icon down">
                            <i className="lnil lnil-arrow-down" />
                          </div>
                          <div className="tr-item">
                            <strong>3,00,000</strong>
                            <span>SMS Sent</span>
                          </div>
                        </div>
                        <small>27.01.2023</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
             
              
             
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
        </div>
        </div>
    </div>
        
      
    );
  }
      

export default Dashboard;
