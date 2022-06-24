import {Link} from 'react-router-dom'
import React,{useState} from 'react'

function SideBar(props) {
  const [tabs,settabs] = useState("sd")
  console.log("Change Tab",tabs)

  
    return (
        <aside class="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section class="sidebar">
          {/* <!-- Sidebar user panel -->      */}
          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul class="sidebar-menu" data-widget="tree">
            <li class="header">ADMIN MENU</li>
            <li>
              <a>
                <span style={{fontWeight:600}}>Customer Management</span>
                {/* <span class="pull-right-container" >
                  <i  class={tabs==="master"?"fa fa-angle-down pull-right":"fa fa-angle-left pull-right"} ></i>
                </span> */}
              </a>
              <ul >
                <li style={{listStyle:'none'}}><Link to="/billList"><i class="fa fa-circle-o"></i>&nbsp;&nbsp; View Bills</Link></li>
                <li style={{listStyle:'none'}}><Link to="/viewClaim" onClick={(e)=>localStorage.setItem("screentype","create")}><i class="fa fa-circle-o"></i>&nbsp;&nbsp; View Claim Status</Link></li>
                <li style={{listStyle:'none'}}><Link to="/createClaim"><i class="fa fa-circle-o"></i>&nbsp;&nbsp; Submit Claim</Link></li>
              </ul>
            </li>
         </ul>
        </section>
        {/* <!-- /.sidebar --> */}
      </aside>
    )
}

export default SideBar
