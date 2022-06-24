import React, { useState , useEffect} from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'
import { BillData } from '../Function/MemberClaim'
import { useHistory } from 'react-router-dom'

function BillList() {

    const history = useHistory()
    const [billList , setbillList] = useState([]);

    useEffect(() => {
      if(!localStorage.getItem('username')){
        history.push('/')
      }else{
        loadBills()
      }
    }, [])

    const loadBills = () => {
        BillData().then(res => {
          const result = res;
          if (result !== undefined) {
            if (result == null) {
              setbillList([])
            }
            else{
                setbillList(result)
            }
          }
          else {
            setbillList([])
          }
          
        }).catch();
      }

    return (
        <div className="hold-transition skin-green sidebar-mini">
            <div className="wrapper">
                <TopBar/>
                <SideBar/>
                <div className="content-wrapper">
                    {/* Main content */}
                    <section className="content content-add-user no-padding" style={{width: '95%'}}>
                      <div className="row table-row">        
                        {/* /.col */}
                        <div className="col-md-12">
                          <div className="dwstable">           
                            <div className="box-body no-padding table-responsive">
                              <table className="table table-bordered">
                                <tr>
                                  <th>policyId<span style={{marginLeft:'10px'}}></span><i className="fa fa-angle-double-down"></i><i className="fa fa-angle-double-up"></i></th>
                                  <th>lastPaidDate<span style={{marginLeft:'10px'}}></span><i class="fa fa-angle-double-down"></i><i class="fa fa-angle-double-up"></i></th>
                                  <th>Due Amount<span style={{marginLeft:'10px'}}></span><i className="fa fa-angle-double-down"></i><i className="fa fa-angle-double-up"></i></th>
                                  <th>Late Charge<span style={{marginLeft:'10px'}}></span><i className="fa fa-angle-double-down"></i><i className="fa fa-angle-double-up"></i></th>
                                  <th>Due Date<span style={{marginLeft:'10px'}}></span><i className="fa fa-angle-double-down"></i><i className="fa fa-angle-double-up"></i></th>
                                </tr>
                                {/* {
                                    billList.map((data,c=0)=>{
                                        c=c+1
                                        return( */}
                                            <tr>
                                            <td>{billList.policyId}</td>
                                            <td>{billList.lastPaidDate}</td>
                                            <td>{billList.dueAmount}</td>
                                            <td>{billList.lateCharge}</td>
                                            <td>{billList.dueDate}</td>
                                          </tr>
                                        {/* )
                                    })
                                } */}
                              </table>
                            </div>
                            {/* /.box-body */}
                          </div>
                          {/* /.box */}
                    </div>
                        {/* /.col */}
                      </div>
                    
                  </section>
                    {/* /.content */}
                </div>
            </div>   
        </div>
    )
}

export default BillList
