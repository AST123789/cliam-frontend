import React, { useState , useEffect} from 'react'
import { useHistory , Link } from 'react-router-dom';
import { SubmitClaimData } from '../Function/MemberClaim'
import { BenfitsData, ProviderData } from '../Function/Policy';
import SideBar from './SideBar';
import TopBar from './TopBar';

function ClaimInsert() {

  const history = useHistory();
  const [hospitallist , sethospitallist] = useState([])
  const [benefitlist , setbenefitlist] = useState([])
  const [policy,setpolicy] = useState("")
  const [hospital , sethospital] = useState([])
  const [benefit , setbenefit] = useState("")
  const [remark , setremark] = useState("")
  const [amount , setamount] = useState(0)
  const [claimId,setclaimId]  = useState(0)
  const [claimStatus,setclaimStatus]  = useState(0)
  const [claimDescription,setclaimDescription]  = useState(0)
  const [screenType,setScreenType] = useState(0)

  useEffect(()=>{
    if(!localStorage.getItem("username")){
      history.push('/')
    }else{
      ChangePolicy('P1001')
      setpolicy('P1001')
    } 
  },[]) 

  const loadProviders = (id) => {
    ProviderData(id).then(res => {
      const result = res;
      if (result !== undefined) {
        if (result == null) {
          sethospitallist([])
        }
        else{
            sethospitallist(result.providers)
            sethospital(result.providers[0].hospitalId)
        }
      }
      else {
        sethospitallist([])
      }
      
    }).catch();
  }
console.log("Providers",hospitallist);
  const loadBenefits = (id) => {
    BenfitsData(id).then(res => {
      const result = res;
      if (result !== undefined) {
        if (result == null) {
          setbenefitlist([])
        }
        else{
            setbenefitlist(result.benefits)
            setbenefit(result.benefits[0].benefitId)
        }
      }
      else {
        setbenefitlist([])
      }
      
    }).catch();
  }

  const ChangePolicy = (id) => {
    loadProviders(id)
    loadBenefits(id)
  }

  const handleChange = (field,e) =>{
    e.preventDefault()
    if(field === "policy"){
      const value = e.target.value;
      setpolicy(value)
      ChangePolicy(value)
    }
    if(field === "hospital"){
      const value = e.target.value;
      sethospital(value)
    }
    if(field === "benefit"){
      const value=e.target.value;
      setbenefit(value)
    }
    if(field === "remark"){
      const value=e.target.value;
      setremark(value)
    }
    if(field === "amount"){
      const value = e.target.value;
      setamount(value)
    }
  }

  const saveButtonClick = (e) =>{
    e.preventDefault();

    if(handleValidation()){
      var req = {
        "policyId":policy,
        "hospitalId":hospital,
        "benefitId":benefit,
        "remarks":remark,
        "claimAmount":Number(amount)
      }
      console.log(req);
      SubmitClaimData(req).then(res=>{
        console.log(res)
        if(res !== undefined){
          clearFields();
          setclaimId(res.claimId)
          setclaimStatus(res.claimStatus)
          setclaimDescription(res.claimDescription)
          setScreenType(1)
        }
      })
      .catch();
    }else{
      alert("Error")
    }
  }

  const handleValidation = () =>{
    let formIsValid = true;

    if(amount=== "" || amount=== null){
      formIsValid = false;
      alert("Please Enter amount")
    }
    
    return formIsValid;
  }

  const clearFields = () =>{
      setpolicy('');
      sethospital('');
      setbenefit('');
      setremark('');
      setamount('');
      

      localStorage.setItem("screenType","")
      localStorage.setItem("customerid" , '');

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
        <h1 class="name" >{customerlist.custpolicy}</h1>
        <p class="org">{customerlist.custbenefit}</p> 
        </div>
        </div>
        </div>
      </div> */}
      <div class="inline-block float-right pt4">
        {
          screenType===0?<Link class="btn btn-gray b-radius mr-10 "  onClick={saveButtonClick}><i class="fa fa-edit"></i>&nbsp; Save</Link>:""
        }			
      </div>
    </div>
      </section>
  
      {/* Main content */}
      <section class="content content-add-user">
        <div class="row">
        <div class="UserDetails">   
        
             {/* <h4>User Details</h4> */}
              <div class="UserDetails-list">
              {screenType===1?
                <div class="row">
              
                <div class="col-md-8">
                  <div class="UserDetails-list">
                    
                  <div class="row form-group">
                      <div class="col-md-3">Claim Id </div>
                      <div class="col-md-9"><b>{claimId}</b></div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-3">Claim Status </div>
                      <div class="col-md-9"><b>{claimStatus}</b></div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-3">Claim Description </div>
                      <div class="col-md-9"><b>{claimDescription}</b></div>
                    </div>
                    </div> 
                </div>
              </div>:
              <><div style={{display:'block'}} class="row form-group col-md-4">
                <div><b>Id: </b></div>
                <input type="text" style={{display:'block'}} class="input-control1" id="inputEmail3" placeholder="Id" value={localStorage.getItem("userid")} readOnly/>
            </div>
          <div class="row form-group col-md-4">
          <label for="inputEmail3">Policy Name</label>
           
          <select class="input-control1" style={{display:'block'}} onChange={(e)=>handleChange('policy',e)}>
            <option value="P1001">Health Plus Classic</option>
            <option value="P1002">Health Plus Enhanced</option>
            <option value="P1003">Health Plus Premium</option>
          </select>
					  
          </div>
          <div class="row form-group col-md-4">
          <label for="inputEmail3">Hospital</label>
            
          <select class="input-control1" style={{display:'block'}} onChange={(e)=>handleChange('hospital',e)}>
              {hospitallist.map((data)=>{return(<option value={data.hospitalId}>{data.name}
            </option>)})}
          </select>
          </div>

          <div class="row form-group col-md-4">
          <label for="inputEmail3">Benefit Name</label>
          <select class="input-control1" style={{display:'block'}} onChange={(e)=>handleChange('benefit',e)}>
              {benefitlist.map((data)=>{return(<option value={data.benefitId}>{data.benefitName}
            </option>)})}
          </select>
          </div>
          <div class="row form-group col-md-4">
            <label for="inputEmail3">Remark</label>
            <input type="text" style={{display:'block'}} value={remark} class="input-control1" id="inputEmail3" placeholder="Enter your remark" onChange={(e)=>handleChange("remark",e)}/>
					</div>
          <div class="row form-group col-md-4">
            <label for="inputEmail3">Claimed Amount</label>
            <input type="number" style={{display:'block'}} value={amount} class="input-control1" id="inputEmail3" placeholder="Enter your amount" onChange={(e)=>handleChange("amount",e)}/>
					 </div></>
              }
          </div>
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

export default ClaimInsert


 