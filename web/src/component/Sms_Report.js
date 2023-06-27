import Sidebar from "./Sidebar";
import Menu from './Menu';

const Sms_Report = () => {
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
        <div id="SMSAPIfull" className="page-content-wrapper fullwidth">
          {/* Begin Page Content */}
          <div className="container-fluid ">
            <Menu />
            
            <div className="card mb-3">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <form className="form-inline mb-2" name="frmSearch" id="frmSearch" method="post">
                      <div className="form-group">
                        <div className="control has-icon">
                          <input type="text" className="form-control" id="date1" name="date1" placeholder="DD-MM-YYYY" defaultValue="20-04-2023" />
                          
                          <label className="label form-icon" htmlFor="name">
                            <i className="lnil lnil-calender-alt-4" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <select id="ddlDeliveryType" name="ddlDeliveryType" className="my-select selectpicker">
                          <option value={0} selected="selected">ALL</option>
                          <option value={1}>DELIVERED</option>
                          <option value={2}>FAILED</option>
                          <option value={3}>AWAITED</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="tel" name="txtMobile" id="txtMobile" defaultValue maxLength={10} className="form-control" placeholder="Mobile Number"  />
                      </div>
                      <div className="form-group">
                        <input type="text" name="txtSender" id="txtSender" defaultValue maxLength={6} className="form-control" placeholder="Sender" />
                      </div>
                      <div className="form-group">
                        <input type="tel" name="txtMsgId" id="txtMsgId" defaultValue maxLength={40} className="form-control" placeholder="Ack ID"  />
                      </div>
                      <div className="form-group">
                        <div className="form-group">
                          <select id="ddlRecord" name="ddlRecord" className="my-select selectpicker">
                            <option value>Records</option>
                            <option value={5}>5</option>
                            <option value={10} selected="selected">10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <select id="ddlLength" name="ddlLength" className="my-select selectpicker">
                          <option value>Msg Length</option>
                          <option value={30} selected="selected">30</option>
                          <option value={50}>50</option>
                          <option value={70}>70</option>
                          <option value={100}>100</option>
                          <option value={200}>200</option>
                          <option value={500}>500</option>
                          <option value={1000}>1000</option>
                        </select>
                      </div>
                      <div className="dropdown column-filter static form-group">
                        <a className="dropdown-toggle btn btn-outline-dark" href="#" role="button" id data-toggle="dropdown" aria-expanded="false">
                          <i className="lnil lnil-funnel icon" /><span>Filter</span>
                        </a>
                        <div className="dropdown-menu dropdown-checkbox">
                          <div className="custom-control custom-checkbox">
                            <input id="srNo" name="SrNo" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="srNo">Sr No.</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Sender" name="Sender" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Sender">Sender</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Mobile" name="Mobile" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Mobile">Mobile</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Received" name="Received" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Received">Received Time</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Submit" name="Submit" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Submit">EnterID/TemplateID</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Message" name="Message" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Message">Message/Ack Id/Ref Id</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Length" name="Length" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Length">Total Part</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="status" name="Status" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="status">Delivery Status</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input id="Delivery" name="Delivery" type="checkbox" className="custom-control-input" defaultChecked="TRUE" />
                            <label className="custom-control-label" htmlFor="Delivery">Delivery Time</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            {/* <label class="custom-control-label" for="Length">Message Length</label> */}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-icon" id="cmdSearch" name="cmdSearch"><i className="lnil lnil-search-alt" /></button>
                      </div>
                    </form>
                    </div>
                  
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <tbody><tr>
                          <th className="SrNo"> SrNo </th>
                          <th className="Sender"> Sender </th>
                          <th className="Mobile"> Mobile</th>
                          <th className="Received"> Received Time</th>
                          <th className="Submit"> EntityID/ TemplateID</th>
                          <th className="Message"> Message/Ack Id/Ref Id</th>
                          <th className="Length"> Total Part</th>
                          <th className="Status"> Delivery Status</th>
                          <th className="Delivery"> Delivery Time</th>
                        </tr>
                        <tr>
                          <td className="SrNo">1.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">48754918</td>
                          <td className="Received">2023-04-20 11:05:49</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> FF7F18ED-1F0C-05CB-1C5D-7009993BE524</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">2.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">7894125630</td>
                          <td className="Received">2023-04-20 11:02:37</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> 262A2F9F-BF92-C3FC-F074-AFA81E77C1D6</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">3.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">8745961236</td>
                          <td className="Received">2023-04-20 10:50:51</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> 7E0BB921-906D-176D-1F46-7BF3624D34BE</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">4.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">7854123650</td>
                          <td className="Received">2023-04-20 10:50:51</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> 7E0BB921-906D-176D-1F46-7BF3624D34BE</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">5.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">8745213652</td>
                          <td className="Received">2023-04-20 10:26:16</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> 510311FC-B764-7D14-6345-1ED613644FBB</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">6.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">6306451236</td>
                          <td className="Received">2023-04-20 10:26:16</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> 510311FC-B764-7D14-6345-1ED613644FBB</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">7.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">8318697415</td>
                          <td className="Received">2023-04-20 10:26:16</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> 510311FC-B764-7D14-6345-1ED613644FBB</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">8.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">9812345678</td>
                          <td className="Received">2023-04-20 10:22:15</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> BBFA8D1F-4CB0-1FD8-4E31-E80ACFB5090B</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">9.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">7612345678</td>
                          <td className="Received">2023-04-20 10:22:15</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> BBFA8D1F-4CB0-1FD8-4E31-E80ACFB5090B</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                        <tr>
                          <td className="SrNo">10.</td>
                          <td className="Sender">TOUDOT</td>
                          <td className="Mobile">8766123456</td>
                          <td className="Received">2023-04-20 10:22:15</td>
                          <td className="Submit">150*************739<br /><span className="text-info">150*************294</span></td>
                          <td className="Message">test {'{'}#var#{'}'} <br /><span className="text-info"> BBFA8D1F-4CB0-1FD8-4E31-E80ACFB5090B</span> <br /><span className="text-warning"> test {'{'}#var#{'}'}</span></td>
                          <td className="Length">1</td>
                          <td className="Status">
                            <span className="tag is-danger">Awaited</span>
                          </td>
                          <td className="Delivery"> </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="table-page">Showing page 1 of 2&nbsp;(Total 14 Records)</div>
                <div className="float-right">
                  <ul className="pagination"><li className="page-item active"><a className="page-link" href="#">1</a></li><li className="page-item"><a className="page-link" href="?data=cd6d5g5c6c5e6249695d63665g3a246d5g5c6c5e624f5g685f5g6c3a245f666c4g726a5g3a92e246c5g6b6f5g6d6e4g63675g6d6e5c676a3a2f33352f362g362e2e2e246a5c615g3a2g8f">→</a></li></ul>                   </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sms_Report;
