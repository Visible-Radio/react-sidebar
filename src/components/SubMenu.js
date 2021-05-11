import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #e1e9fc;
  border-left: 0.25rem solid transparent;
  height: 3.5rem;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0.5rem;
  }

  div:nth-of-type(2) {
    margin-left: auto;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #252831;
    border-left: 0.25rem solid #632ce4;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
  background-color: #414757;
  height: 3.5rem;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #f5f5f5;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [ subNavOpen, setSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    setSubNavOpen(!subNavOpen);
  }

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && toggleSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>
            {item.title}
          </SidebarLabel>
        </div>
        <div>
          {
            item.subNav && subNavOpen
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null
          }
        </div>
      </SidebarLink>
      {
        subNavOpen && item?.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>
                {item.title}
              </SidebarLabel>
            </DropdownLink>
          )
        })
      }
    </>
  )
}

export default SubMenu
