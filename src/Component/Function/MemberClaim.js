import {toast} from 'react-toastify'

const API_Base_Url2 = process.env.REACT_APP_API_BASE_URL2;
const API_Base_Url3 = process.env.REACT_APP_API_BASE_URL3;

export const BillData = async () => {
    try {
        const response = await fetch(API_Base_Url2 + `viewBills/${localStorage.getItem("userid")}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        
        if (response.status === 403) {
            toast.error('Your Session has been expired, Please login again.');
            return window.setTimeout(function () {
                localStorage.clear();
                window.location.href = "/";
            }, 1000);
        }
        const result = await response.json();
        if (response.ok) {
            return result;
        }
        else if (response.status === 400) {
            toast.error(result.errors[0])
        }
        else if(result.status === 500){
            toast.error(result.message);
        }
    } catch (error) {
        toast.error('Something went wrong , Please try again later.')
    }
};

export const SubmitClaimData = async (req) => {
    try {
        const response = await fetch(API_Base_Url3 + "submitClaim", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body : JSON.stringify ({
                "remarks":req.remarks,
                "claimAmount":req.claimAmount,
                "hospitalId":req.hospitalId,
                "policyId":req.policyId,
                "benefitId":req.benefitId,
                "memberId":localStorage.getItem("userid")
            })
        })
        if (response.status === 403) {
            toast.error('Your Session has been expired, Please login again.');
            return window.setTimeout(function () {
                localStorage.clear();
                window.location.href = "/";
            }, 1000);
        }
        const result = await response.json();

        if (response.ok) {
            return result;
        }
        else if (response.status === 400){
            toast.error("Premium not paid")
        }
        else if(result.status === 500){
            toast.error(result.message);
        }
    } catch (error) {
        toast.error('Something went wrong , Please try again later.')
    }
};

export const FetchClaimData = async (id) => {
    try {
        const response = await fetch(API_Base_Url3 + `getClaimStatus/${id}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        
        if (response.status === 403) {
            toast.error('Your Session has been expired, Please login again.');
            return window.setTimeout(function () {
                localStorage.clear();
                window.location.href = "/";
            }, 1000);
        }
        const result = await response.json();
        if (response.ok) {
            return result;
        }
        else if (response.status === 400) {
            toast.error(result.errors[0])
        }
        else if(result.status === 500){
            toast.error(result.message);
        }
    } catch (error) {
        toast.error('Something went wrong , Please try again later.')
    }
};