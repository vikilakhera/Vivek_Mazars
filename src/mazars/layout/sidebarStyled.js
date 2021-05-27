import styled from "styled-components";
import { Link} from "react-router-dom";

export const Nav = styled.div`
  background-image: ${(props) => props.bg || "black"};
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
`;
  
export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  display: none;
  @media (max-width: 767px){
      display: block;
      margin-top: 15px;
      fill: black;
  }
`;
  
export const SidebarNav = styled.nav`
  background: white;
  background-size: cover;
  width: 250px;
  height: 100vh;
  display: block;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 11 !important;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  box-shadow: 8px 0px 15px -10px #aaaba7;
  @media (max-width: 767px){
    left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
  }
  @media (min-width: 768px){
      left: 0;
  }
`;
  
export const SidebarWrap = styled.div`
  width: 100%;
`;

export const NavSearch = styled.div`
  margin-bottom: 10px;
  margin-left: 260px;
  display: flex;
  @media (max-width: 767px){
      margin-left: 0;
  }
`;

export const headerColors = {
    customer: "linear-gradient(to bottom right, black, #8a0909)",
    admin: "linear-gradient(to bottom right, black, #0e8996)",
    tl: "linear-gradient(to bottom right, black, #999c1a)",
    tp: "linear-gradient(to bottom right, black, #1c8f14)"
}


export const sidebarIndex = {
    "/customer/dashboard": 0,
    "/customer/queries": 1,
    "/customer/proposal": 2,
    "/customer/assignment": 3,
    "/customer/schedule": 4,
    "/customer/feedback": 5,
    "/admin/dashboard": 0,
    "/admin/queries": 1,
    "/admin/tax-professionals": 2,
    "/admin/tax-professionals/add-tp": 2,
    "/admin/proposal": 3,
    "/admin/assignment": 4,
    "/tl/dashboard": 0,
    "/tl/queries": 1,
    "/tl/proposal": 2,
    "/tl/proposal/edit-proposal/:proposal_id": 2,
    "/tl/assignment": 3,
    "/tp/dashboard": 0,
    "/tp/queries": 1,
    "/tp/proposal": 2,
    "/tp/assignment": 3,
}