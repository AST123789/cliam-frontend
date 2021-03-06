import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function TopBar() {
  const history = useHistory()
  const signout=()=>{
    localStorage.clear()
    history.push('/')
  }
    return (
        <>
        <header class="main-header">
        {/* Logo */}
        <a href="" class="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span class="logo-mini"><b>P</b>A</span>
          {/* logo for regular state and mobile devices */}
          <span class="logo-lg"><img src="logo.png"/></span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav class="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
    
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">         
             {/* Notifications: style can be found in dropdown.less */}
              <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-bell"></i>
                  <span class="label label-warning">10</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 10 notifications</li>
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul class="menu">
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                          page and may cause design problems
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-red"></i> 5 new members joined
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-red"></i> You changed your username
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer"><a href="#">View all</a></li>
                </ul>
              </li>
             
             <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image"/>
                  <span class="hidden-xs"><i class="fa fa-angle-down"></i></span>
                </a>
                <ul class="dropdown-menu">
                  {/* User image */}
                  <li class="user-header">
                    <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"/>
    
                    <p>
                      {localStorage.getItem('username')}
                      {/* <small>Member since Nov. 2012</small> */}
                    </p>
                  </li>
                  {/* Menu Body */}
                  
                  {/* Menu Footer*/}
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div class="pull-right">
                      <Link to='#' onClick={()=>signout()} class="btn btn-default btn-flat">Sign out</Link>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              
              {/* <li> */}
                {/* <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a> */}
              {/* </li> */}
            </ul>
          </div>
        </nav>
      </header>
      <aside class="main-sidebar">
      {/* <!-- sidebar: style can be found in sidebar.less --> */}
      <section class="sidebar">
        {/* <!-- Sidebar user panel -->      */}
        {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">ADMIN MENU</li>
          <li class="treeview active ">
            <a href="#">
              <span>User Management</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
              <li><a href="#"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">            
              <span>Layout Options</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href=""><i class="fa fa-circle-o"></i> Top Navigation</a></li>
              <li><a href=""><i class="fa fa-circle-o"></i> Boxed</a></li>
              <li><a href=""><i class="fa fa-circle-o"></i> Fixed</a></li>
              <li><a href=""><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span>Widgets</span>
             
            </a>
          </li>
        
         
       </ul>
      </section>
      {/* <!-- /.sidebar --> */}
    </aside>
    </>
    )
}

export default TopBar
