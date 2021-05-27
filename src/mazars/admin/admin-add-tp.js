import React,{useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "../final.css";
import "./admin.css";

function Admin_Add_TP(){
    const history = useHistory();
    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
        pcat_id: "",
        cat_id: "",
        type: "",
        tp_id: ""
    });
    const [errormsg, setErrormsg] = useState({
        name_err: "",
        email_err: "",
        phone_err: "",
        pcat_err: "",
        cat_err: "",
        type_err: "",
        tp_err: ""

    })

    const HandleSubmit = async (e) => {
        if(errormsg.name_err || errormsg.phone_err || errormsg.pcat_err || errormsg.cat_err || errormsg.type_err || errormsg.tp_err || errormsg.email_err){
            alert("Please fill form properly!");
        }
        else{
            try{
                e.preventDefault();
                let formData = new FormData();
        
                formData.append("email", info.email);
                formData.append("name", info.name);
                formData.append("phone", info.phone);
                formData.append("pcat_id", info.pcat_id);
                formData.append("cat_id", info.cat_id);
                formData.append("type", info.type);
                formData.append("tp_id", info.tp_id);
        
                const p_data = await axios.post(`https://mazarsapi.multitvsolution.com/mazarapi/v1/tp/AddTaxProfessional`, formData, {headers:{
                  'content-type': 'multipart/form-data'
                }})
                console.log(p_data.data.code);
                if(p_data.data.code){
                    history.push({
                        pathname: "/admin/tax-professionals",
                    });
                    console.log("TP added successfully!")   
                }
              }
              catch(error){console.log(error)}
        }
  };

    const inputHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        let err = "";

        if(name === "name"){
            if(val === ""){
                err = <strong>Please enter a valid name!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    name_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    name_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    name: val
                }))
            }
        }
        else if(name === "email"){
            if(!(/@/.test(val))){
                err = <strong>Please enter a valid Email!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    email_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    email_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    email: val
                }))
            }
        }
        else if(name === "phone"){
            if(!Number(val) && val !== ""){
                err = <strong>Please enter a valid phone No.!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    phone_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    phone_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    phone: val
                }))
            }
        }
        else if(name === "pcat_id"){
            if(!Number(val) && val !== ""){
                err = <strong>Please enter a valid pcat Id!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    pcat_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    pcat_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    pcat_id: val
                }))
            }
        }
        else if(name === "cat_id"){
            if(!Number(val) && val !== ""){
                err = <strong>Please enter a valid cat Id!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    cat_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    cat_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    cat_id: val
                }))
            }
        }
        else if(name === "type"){
            if(val === ""){
                err = <strong>Please enter a valid type!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    type_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    type_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    type: val
                }))
            }
        }
        else if(name === "tp_id"){
            if(!Number(val) && val !== ""){
                err = <strong>Please enter a valid tp Id!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    tp_err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    tp_err: ""
                }))
                setInfo(prevState => ({
                    ...prevState,
                    tp_id: val
                }))
            }
        }
    }
    return(
        <div className="home">
            <div className="form-wrap">
                <div className="nav">
                    <button className="go-back" onClick={() => history.push({pathname:"/admin/tax-professionals", index:1})}>Go Back</button>
                    <pre className="heading">Add Tax Professonal      </pre>
                </div>
                <form className="form" onSubmit={(e) => {HandleSubmit(e)}} >
                    <span className="row">
                        <div className="col">
                            <label>Name</label><br/>
                            <input className="form-input"  type="text" name="name" placeholder="Enter name" onChange={inputHandler} /><br/>
                            {errormsg.name_err}
                        </div>
                        <div className="col">
                            <label>Email</label><br/>
                            <input className="form-input" type="email" name="email" placeholder="Enter email" onChange={inputHandler} /><br/>
                            {errormsg.email_err}
                        </div>
                    </span>
                    <span className="row">
                        <div className="col">
                            <label>Phone</label><br/>
                            <input className="form-input" type="text" name="phone" placeholder="Enter Phone No." onChange={inputHandler} /><br/>
                            {errormsg.phone_err}
                        </div>
                        <div className="col">
                            <label>Pcat Id</label><br/>
                            <input className="form-input" type="text" name="pcat_id" placeholder="Enter Pcat Id" onChange={inputHandler} /><br/>
                            {errormsg.pcat_err}
                        </div>
                    </span>
                    <span className="row">
                        <div className="col">
                            <label>Cat Id</label><br/>
                            <input className="form-input" name="cat_id" type="text" placeholder="Enter cat Id" onChange={inputHandler} /><br/>
                            {errormsg.cat_err}
                        </div>
                        <div className="col">
                            <label>Type</label><br/>
                            <input className="form-input" name="type" type="text" placeholder="Enter Type" onChange={inputHandler} /><br/>
                            {errormsg.type_err}
                        </div>
                        <div className="col">
                            <label>TP Id</label><br/>
                            <input className="form-input" name="tp_id" type="text" placeholder="Enter TP Id" onChange={inputHandler} /><br/>
                            {errormsg.tp_err}
                        </div>
                    </span>
                    <input className="submit-btn" type="submit" />
                </form>
            </div>
        </div>
    );
}
export default Admin_Add_TP;