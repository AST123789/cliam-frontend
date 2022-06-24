import axios from 'axios';
import React from 'react'
import {toast} from 'react-toastify'
import Axios from 'axios'
import { useHistory } from 'react-router';
import { Policy } from '@material-ui/icons';

const API_Base_Url4 = process.env.REACT_APP_API_BASE_URL4;

export const ProviderData = async (policyid) => {
    
    try {
        const response = await fetch(API_Base_Url4 + `getChainOfProviders/${policyid}`, {
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
        alert(error)
    }
};


export const BenfitsData = async (policyid) => {
    try {
        
        const response = await fetch(API_Base_Url4+`getEligibleBenefits/${policyid}/${localStorage.getItem("userid")}`, {
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

export const EligibleCLaimAmount = async (policyid) => {
    
    try {
        const response = await fetch(API_Base_Url4 + `getEligibleClaimAmount/${policyid}/${localStorage.getItem("userid")}`, {
            method: "POST",
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