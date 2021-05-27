import React, {useState, useEffect } from "react";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import "./login.css";

const hashUrl = {
  customer: "customers",
  admin: "admin",
  tl: "tl"
}
const hashId = {
      customer: "user_id",
      admin: "userid",
      tl: "id"
    }
function Login() {
    const [user_id, setUserId] = useState("");
    const [password, setUserPassword] = useState("");
    const params = useParams();
    const history = useHistory();
    
    useEffect(() => {
      let token = null;
      if(params.userType === "customer"){
        token = localStorage.getItem("cust_id");
      }
      else if(params.userType === "admin"){
        token = localStorage.getItem("admin_id"); 
      }
      else{
       token = localStorage.getItem("tl_id");
      }
      if(token){
        history.push(`/${params.userType}/dashboard`);
      }
    },[]);
  
    async function login(e){
      try{
        e.preventDefault();
        let formData = new FormData();
        formData.append(`${hashId[params.userType]}`, user_id);
        formData.append("password", password);
        if(params.userType === "tl"){
          formData.append("type", "tl");
        }
        const data = await axios.post(`https://mazarsapi.multitvsolution.com/mazarapi/v1/${hashUrl[params.userType]}/login`, formData, {headers:{
          'content-type': 'multipart/form-data'
        }})
        console.log(data);
        console.log(params.userType);
        if(data.data.code){
          if(params.userType === "customer"){
            localStorage.setItem("cust_id", data.data["user_id"]);
          }
          else if(params.userType === "admin"){
            localStorage.setItem("admin_id", data.data["user id"]); 
          }
          else{
            localStorage.setItem("tl_id", data.data["user id"]);
          }
          
          history.push(`/${params.userType}/dashboard`);
        }
        else{
          alert("something went wrong");
        }
        }
      catch(error){console.log(error)}
    }

    
    return (
      <div className="container ">
        <form onSubmit={login} className="form-signin login-box">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col input">
              <label><h4>Email</h4></label>
              <input
                className="email"
                type="text"
                name="user_id"
                onChange={(event) => {setUserId(event.target.value)}}
                placeholder="Enter Email"
              />
              <label><h4>Password</h4></label>
              <input
                className="email"
                type="password"
                name="user_password"
                onChange={(event) => {setUserPassword(event.target.value)}}
                placeholder="Enter Password"
              />
              <br/>
              <input className="sign-in-btn" type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    );
  
}
export default Login;
