import React, {useState, useLayoutEffect} from "react";
import { Tab, Tabs, TabPanel } from 'react-tabs';
import Tl_Proposal_Table from "./tl_proposal_table";
import "./tl.css"
import "../../../node_modules/react-tabs/style/react-tabs.css";


function Tl_Proposal_Tabs(props) {
    const [tabIndex, setTabIndex] = useState(() => 0);
    console.log(tabIndex);
    console.log(props);
    useLayoutEffect(() =>{
        setTabIndex(props.location.index || 0);
    },[props.location.index])
    const myStyle1={
        padding: "12px",
        backgroundColor: "grey",
        color: "white",
        borderRadius: "50px",
        
    }
    const myStyle2={
        padding: "12px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "50px",
        
        
    }


    return (
        <div className="home">
            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <div className="tabs" style={{fontSize: "17px", marginTop: "4%"}}>
                    <Tab style={tabIndex===0 ? myStyle2 : myStyle1}>Pending for acceptance</Tab>
                    <Tab style={tabIndex===1 ? myStyle2 : myStyle1}>Inprogress</Tab>
                    <Tab style={tabIndex===2 ? myStyle2 : myStyle1}>Complete</Tab>
                </div>
                <TabPanel>
                    <p>this is first tab</p>
                </TabPanel>
                <TabPanel>
                    <Tl_Proposal_Table />
                </TabPanel>
                <TabPanel>
                    <p>this is 3rd tab</p>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Tl_Proposal_Tabs;