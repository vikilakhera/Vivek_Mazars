import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";
import { IconContext } from "react-icons/lib";
import Footer from "./footer";
import MazarsLogo from "./img/logo.png";
import Profile from "./profile";
import {
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap,
    NavSearch,
    headerColors,
    sidebarIndex
} from "./sidebarStyled";


const Sidebar = (props) => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const [authData, setAuthData] = useState([]);
    const [headColor, setHeadColor] = useState("");

    const [activeSidebar, setActiveSidebar] = useState(0);

  const params = useParams();

  useEffect(() => {
    setActiveSidebar(sidebarIndex[props.location.pathname])
  },[props.location.pathname])

  useEffect(() => {
      const userType = props.match.params.userType;
    if (!userType) {
      setAuthData(SidebarData["customer"]);
      setHeadColor(headerColors["customer"]);
      return;
    }
    setAuthData(
      SidebarData[userType] ? SidebarData[userType] : []
    );
    setHeadColor(
        headerColors[userType] ? headerColors[userType] : "black"
    );
    console.log(props)
    
  }, [props.match.params.userType]);


    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <Nav bg={headColor}>
                    <Profile userType={props.match.params.userType}/>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <NavSearch>
                            <i
                                style={{
                                    padding: "10px",
                                    fontSize: "25px",
                                    
                                }}
                                >
                                <AiIcons.AiOutlineSearch/>
                            </i>
                            <input
                                style={{
                                    height: "40px",
                                    padding: "5px",
                                    marginTop: "13px",
                                    width: "150px",
                                    
                                }}
                                type="text" placeholder="search..."/>
                    </NavSearch>
                    
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <span style={{display: "flex"}}>
                        <img src={MazarsLogo} alt="logo" style={{
                                width: "38px",
                                height: "40px",
                                margin: "15px 8px 15px 15px"
                            }} 
                        />
                        <h2 style={{
                            color: "black",
                            paddingTop: "20px",
                            fontFamily: "'Comfortaa', cursive, 'Times New Roman', Times, serif",
                            letterSpacing: "2px"
                        }}>Mazars</h2>

                        <NavIcon tp="#">
                            <AiIcons.AiOutlineClose size={20} style={{fill: "black"}} onClick={showSidebar} />
                        </NavIcon>
                    </span>
                    <SidebarWrap>
                        
                        {authData.map((item, index) => {
                            return <SubMenu item={item} key={index} color={index == activeSidebar} setActiveSidebar={setActiveSidebar} sidebarNo={index}/>;
                        })}
                    </SidebarWrap>
                </SidebarNav>
                <Footer/>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;