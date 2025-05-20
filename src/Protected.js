import Header from "./Header";
import {useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Protected(props) {
    const navigate = useNavigate();
    let Cmp=props.cmp;

    

    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            navigate('/register');
        }
    },[]);
return (
  <div>
    <Cmp />
  </div>
);


}
export default Protected;
