import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <CDBSidebar textColor="#fff" backgroundColor="#333" height="100-min-vh">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <NavLink
          to="/"
          exact
          className="text-decoration-none"
          style={{ color: 'inherit' }}
        >
          Everlasting Gospel
        </NavLink>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <CDBSidebarMenu>
          <NavLink exact to="/Home" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="bi bi-menu-up fs-5s">Dashboard</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/Documentary" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="bi bi-file-earmark-richtext-fill fs-5">Documentary</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/Quotes" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="bi bi-chat-right-quote-fill fs-5">Quotes</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/MorningEvolution" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="bi bi-highlights fs-5">Morning Evolution</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/profile" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/Signup" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Signup</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/analytics" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">
              Analytics
            </CDBSidebarMenuItem>
          </NavLink>

          <NavLink
            exact
            to="/hero404"
            target="_blank"
            activeClassName="activeClicked"
          >
            <CDBSidebarMenuItem icon="exclamation-circle">
              404 page
            </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div>
          <hr />
          <p className='text-success'>@civeDeverlopers</p>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
