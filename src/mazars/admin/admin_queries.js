import React, {useState} from "react";
import { Tab, Tabs, TabPanel } from 'react-tabs';
import "../../../node_modules/react-tabs/style/react-tabs.css";


function Admin_Queries() {
    const [tabIndex, setTabIndex] = useState(0);
    const myStyle1={
        padding: "12px",
        backgroundColor: "grey",
        color: "white",
        borderRadius: "50px",
        margin: "0px 139px",
        
    }
    const myStyle2={
        padding: "12px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "50px",
        margin: "0px 139px",
        
    }


    return (
        <div className="home">
            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <div style={{fontSize: "17px", marginTop: "4%"}}>
                    <Tab style={tabIndex==0 ? myStyle2 : myStyle1}>Pending for acceptance</Tab>
                    <Tab style={tabIndex==1 ? myStyle2 : myStyle1}>Inprogress</Tab>
                    <Tab style={tabIndex==2 ? myStyle2 : myStyle1}>Complete</Tab>
                </div>
                <TabPanel>
                    <p>this is first tab</p>
                </TabPanel>
                <TabPanel>
                    <p>this is second tab</p>

                </TabPanel>
                <TabPanel>
                    <p>this is 3rd tab</p>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Admin_Queries;