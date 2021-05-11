import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib"
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  top: 0;
  left: ${props => props.sidebarOpen ? '0' : '-100%'};
  position: fixed;
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  transition: left 250ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
    <IconContext.Provider value={{color: `#fff`}}>
      {/* Nav is the bar all the way across the top */}
      <Nav>
        {/* NavIcon is our router Link tag that links home */}
        <NavIcon to="#">
          {/* hamburger menu icon */}
          <FaIcons.FaBars onClick={toggleSidebar}/>
        </NavIcon>
        {/* SidebarNav is our actual sidebar outer wrapper */}
        <SidebarNav sidebarOpen={sidebarOpen}>
          {/* SidebarWrap is...just a div with width 100%...? */}
          <SidebarWrap>
            <NavIcon to="#">
              {/* hamburger menu icon */}
              <AiIcons.AiOutlineClose onClick={toggleSidebar}/>
            </NavIcon>
            {
              SidebarData.map((item, index) => {
                return <SubMenu key={index} item={item} />;
              })
            }
          </SidebarWrap>
        </SidebarNav>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Sidebar;
