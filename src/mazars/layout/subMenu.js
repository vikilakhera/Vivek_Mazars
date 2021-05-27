import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #2B345F;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    

    &:hover {
        font-size: 22px;
        border-left: 4px solid #fa626b;
        cursor: pointer;
        color: #fa626b;
    }
    `;

const SidebarIcon = styled.span`
    background: white;
    padding: 4px 8px 8px 8px;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px #f0f0f0;
    font-size: 20px;

    &:hover{
        box-shadow: 0 0 7px 1px #fa626b;
    }
    `;

const SidebarLabel = styled.span`
    margin-left: 23px;
    font-family: 'Comfortaa', cursive, 'Times New Roman', Times, serif;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .7px;

    
    `;

const DropdownLink = styled(Link)`
    background: #252831;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    
    &:hover {
      background: green;
      cursor: pointer;
    }
  `;

  const SubMenu = ({item, color, setActiveSidebar, sidebarNo}) => {
      const [subNav, setSubNav] = useState(false);
      const showSubNav = () => setSubNav(!subNav);

      return(
        <>
            <SidebarLink style={{background: color ? "#f0f0f0" : "white"}} color={color} to={item.path}
            >
                <div>
                    <SidebarIcon>{item.icon}</SidebarIcon>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>
            {subNav && 
                item.subNav.map((item, index) => {
                    return(
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
            })}
        </>
      );
  };

  export default SubMenu;