import React,{useState, useEffect} from "react";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import "../final.css";
import "./tl.css";

function Edit_Proposal(){
    const params = useParams();
    const url = `https://mazarsapi.multitvsolution.com/mazarapi/v1/tl/getProposalDetail?id=${params.proposal_id}`;
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(data.amount);
    const [misc, setMisc] = useState(data.misc1);
    const [description, setDescription] = useState(data.misc2);
    const [errormsg, setErrormsg] = useState({amounterr: "", misc1err: "", misc2err: ""});
    const history = useHistory();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
      const users = await axios.get(url);
      console.log(users.data);
      const art = users.data.result;
      setData(art);
  };
    const HandleSubmit = async (e) => {
        if(errormsg.amounterr || errormsg.misc1err || errormsg.misc2err){
            alert("Please fill form properly!");
        }
        else{
            try{
                e.preventDefault();
                let formData = new FormData();
        
                formData.append("assign_no", data.assign_no);
                formData.append("name", data.name);
                formData.append("id", data.id);
                formData.append("amount", amount);
                formData.append("payable", data.payable_through);
                formData.append("misc1", misc);
                formData.append("misc2", description);
        
                const p_data = await axios.post(`https://mazarsapi.multitvsolution.com/mazarapi/v1/tl/updateProposal`, formData, {headers:{
                  'content-type': 'multipart/form-data'
                }})
                console.log(p_data.data.code);
                if(p_data.data.code){
                    history.push({
                        pathname: "/tl/proposal",
                        index: 1
                    });
                    console.log("Proposal successfully send!")   
                }
              }
              catch(error){console.log(error)}
        }
  };

    const inputHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        let err = "";

        if(name === "amount"){
            if(!Number(val) && val !== ""){
                err = <strong>Please enter a valid amount!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    amounterr: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    amounterr: ""
                }))
                setAmount(val);
            }
        }
        else if(name === "misc1"){
            if(val === ""){
                err = <strong>Please enter a valid input!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    misc1err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    misc1err: ""
                }))
                setMisc(val);
            }
        }
        else if(name === "misc2"){
            if(val === ""){
                err = <strong>Please enter a valid input!</strong>
                setErrormsg(prevState => ({
                    ...prevState,
                    misc2err: err
                }))
            }
            else{
                setErrormsg(prevState => ({
                    ...prevState,
                    misc2err: ""
                }))
                setDescription(val);
            }
        }
    }
    return(
        <div className="home">
            <div className="form-wrap">
                <div className="nav">
                    <button className="go-back" onClick={() => history.push({pathname:"/tl/proposal", index:1})}>Go Back</button>
                    <pre className="heading">Edit Proposal      </pre>
                </div>
                <form className="form" onSubmit={(e) => {HandleSubmit(e)}} >
                    <span className="row">
                        <div className="col">
                            <label>Query No.</label><br/>
                            <input className="form-input"  type="text" placeholder="query no." value={data.assign_no}/>
                        </div>
                        <div className="col">
                            <label>Customer Name</label><br/>
                            <input className="form-input" type="text" value={data.name}/>
                        </div>
                    </span>
                    <span className="row">
                        <div className="col">
                            <label>Amount</label><br/>
                            <input className="form-input" type="text" name="amount" placeholder="enter amount" defaultValue={data.amount} onChange={inputHandler} /><br/>
                            {errormsg.amounterr}
                        </div>
                        <div className="col">
                            <label>Payable By Through</label><br/>
                            <select className="form-input" name="payment" id="payment">
                                <option value="none" selected disabled hidden>{data.payable_through ? data.payable_through : "--select--"}</option>
                                <option value="neft" >NEFT</option>
                                <option value="debit">DEBIT CARD</option>
                                <option value="credit">CREDIT CARD</option>
                                <option value="upi">UPI</option>
                                <option value="wallet">Wallet</option>
                            </select>
                        </div>
                    </span>
                    <span className="row">
                        <div className="col">
                            <label>Misc 1</label><br/>
                            <input className="form-input" name="misc1" type="text" defaultValue={data.misc1} onChange={inputHandler} /><br/>
                            {errormsg.misc1err}
                        </div>
                        <div className="col">
                            <label>Proposal Description</label><br/>
                            <textarea rows="3" className="form-input" type="text" name="misc2" defaultValue={data.misc2} onChange={inputHandler} /><br/>
                            {errormsg.misc2err}
                        </div>
                    </span>
                    <input className="submit-btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Edit_Proposal;