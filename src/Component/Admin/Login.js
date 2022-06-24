import React, { useState } from 'react'
import { LoginApi } from '../Function/auth'
import { Link , useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

    const [emailid, setemailid] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();

    var onSubmit = async ()=>{
        try{
			if(emailid === ""){
				alert("Please enter username")
			}
	
			else if(password === ""){
				alert("Please enter password")
			}

			var req={
				'username':emailid,
				'password':password
			}

			LoginApi(req).then(res =>{
				const result = res;
				if(result !== undefined){
					if(result.jwtAuthToken !== undefined){
						sessionStorage.setItem("token",result.jwtAuthToken)
						toast.success("Login successful")
						history.push("/billList")
					}
					else{
						setemailid("")
						setpassword("")
					}
				}
				else{
					setemailid("")
					setpassword("")
				}
			}).catch();
		}catch(error){
			console.log(error);
		}
    }    
    
    return (
        <div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<div class="login100-pic js-tilt" data-tilt>
						<img src="logo.png" alt="IMG"/>
					</div>

					<form class="login100-form validate-form">
						<span class="login100-form-title">
							Member Login
						</span>

						<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input class="input100" type="text" value={emailid} onChange={(e)=>setemailid(e.target.value)} name="email" placeholder="Username"/>
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Password is required">
							<input class="input100" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="pass" placeholder="Password"/>
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>
						
						<div class="container-login100-form-btn">
							<Link to='#' onClick={onSubmit} class="login100-form-btn">
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default Login
