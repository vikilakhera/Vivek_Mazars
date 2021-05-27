import React, {useState} from 'react';
import profile_img from "./img/profile_img.png";
import "./profile_dropdown.css";
import * as FaIcons from 'react-icons/fa'; 
import {useHistory} from "react-router-dom";

const hashLogout = {
    customer: "cust_id",
    admin: "admin_id",
    tl: "tl_id"
};

const Profile = ({userType}) => {
    const [isActive, setIsActive] = useState(false);
    const [isLoggedOut, setLoggedOut] = useState(false);
    const history = useHistory();
    

    const toggleActive = () =>{
        setIsActive(!isActive);
    };

    const Logout = () =>{
        console.log(hashLogout[userType]);
        localStorage.removeItem(hashLogout[userType]);
        setLoggedOut(true);
        history.push(`/${userType}/login`);
    };

    return(
        <div className="action">
            <div className="profile">
                <img src={profile_img} onClick={() => toggleActive()} alt="profile pic"/>
                <div className={isActive ? "menu active" : "menu"}>
                    <ul>
                        <li><i><FaIcons.FaUser fill="black"/></i><a href="#">My Profile</a></li>
                        <li><i><FaIcons.FaLock fill="black"/></i><a href="#" onClick={Logout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;