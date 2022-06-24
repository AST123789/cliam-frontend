import { Block } from '@material-ui/icons';
import React, { useState , useEffect} from 'react'
import { useHistory , Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FetchClaimData } from '../Function/MemberClaim'
import SideBar from './SideBar';
import TopBar from './TopBar';
function ClaimId() {
  const history = useHistory();
  const [claimid,setclaimid] = useState("")
  const [claimdescription , setclaimdescription] = useState([])
  const [claimstatus,setclaimstatus] = useState("")
  const [screenType , setScreenType] = useState(0)

  useEffect(()=>{
    if(!localStorage.getItem("username")){
      history.push('/')
    }else{
      // if(id1 != ""){
      //   screenType
      // }
    }
  },[]) 
  
  const handleChange = (field,e) =>{
    e.preventDefault()
    if(field === "claimid"){
      const value = e.target.value;
      setclaimid(value)
    }
  }

  const saveButtonClick = (e) =>{
    e.preventDefault();

    if(handleValidation()){
      alert(claimid)
      FetchClaimData(claimid).then(res=>{
        const result = res;
        console.log("CLaim",result);
        if(res !== undefined){
          setclaimstatus(result.claimStatus)
          setclaimdescription(result.claimDescription)
          setScreenType(1)
        }
      })
      .catch();
    }else{
      alert("Error")
    }
  }

  const handleValidation = () =>{

    if(claimid=== "" || claimid=== null){
      alert("Please enter claimId")
      return false
    }
    else{
      return true;
    }
  }

    return (
      <div class="hold-transition skin-green sidebar-mini">
      <div class="wrapper">
        <TopBar />
        <SideBar />
      <div class="content-wrapper">
      {/* Content Header (Page header) */}
      <section class="content-header border-bottom">
      <div>
      {/* <div class="inline-block  pull-left">
        <div class="profile-head ">			
        <div class="back"><Link to='/CustomerList'><img src="images/left-arrow.svg"/></Link></div> 
        <div class="profiledtl">
        <div class="profileimg"><img src="images/user.svg"/></div>
        <div class="profileinfo">
        <h1 class="name" >{customerlist.custfullname}</h1>
        <p class="org">{customerlist.custgstnumber}</p> 
        </div>
        </div>
        </div>
      </div> */}
      <div class="inline-block float-right pt4">
        {
          screenType===0?<Link class="btn btn-gray b-radius mr-10 " onClick={(e)=>saveButtonClick(e)}><i class="fa fa-edit"></i>&nbsp; Search</Link>:""
        }			
      </div>
    </div>
      </section>
  
      {/* Main content */}
      <section class="content content-add-user">
        <div class="row">
        <div class="UserDetails">   
        {screenType===1?<>
			    {/* <h4>About me</h4> */}
            <div class="row">
              
              <div class="col-md-8">
                <div class="UserDetails-list">
                  
                <div class="row form-group">
                    <div class="col-md-3">Claim Id </div>
                    <div class="col-md-9"><b>{claimid}</b></div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-3">Claim Status </div>
                    <div class="col-md-9"><b>{claimstatus}</b></div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-3">Claim Description </div>
                    <div class="col-md-9"><b>{claimdescription}</b></div>
                  </div>
                  </div> 
              </div>
            </div>
            </>
           : <>
              <h4></h4>
               <div class="UserDetails-list">
           <div class="row form-group col-md-8">
           <label for="inputEmail3">Enter Claim Id</label>
           
					 	<input type="text" style={{display:'block'}} value={claimid} class="input-control1" id="inputEmail3" placeholder="Enter claim id" onChange={(e)=>handleChange("claimid",e)}/>
					  
           </div>
           </div>
           </>     
           }       
            </div>
            {/* /.box */}
       </div>
    </section>
      {/* /.content */}
    </div>
    </div>
    </div>
    )
}

export default ClaimId;


 