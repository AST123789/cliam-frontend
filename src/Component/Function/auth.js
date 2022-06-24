import { toast } from 'react-toastify'

const API_Base_Url = process.env.REACT_APP_API_BASE_URL;

export const LoginApi = async (reqdata) => {

    try {
        
        const response = await fetch(API_Base_Url + "login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + this.state.AccessToken
            },
            body: JSON.stringify({
                "username": reqdata.username,
                "password": reqdata.password
            })
        })

        // if (response.status === 401) {
        //     toast.error('Your Session has been expired, Please login again.');
        //     return window.setTimeout(function () {
        //         localStorage.clear();
        //         window.location.href = "/#/";
        //     }, 1000);
        // }
        const result = await response.json();

        if (response.ok) {
            localStorage.setItem("username",result.username)
            localStorage.setItem("userid",result.mid)
            return result;
        }
        else if(response.status === 400) {
            toast.error(result.errors[0])
        }
        else if(result.status === 500){
            toast.error(result.message);
        }

    } catch (error) {
        toast.error('Something went wrong , Please try again later.')
    }
};