import React from 'react';
import { NavLink } from "react-router-dom";
import {Input, Select, Space} from "antd";
import LoginAvatar from './LoginAvatar';

const NavHeader = (props) => {
  return (
      <div className="headerContainer">
          {/* 头部 logo */}
          <div className="logoContainer">
              <div className="logo"></div>
          </div>
          {/* 头部导航 */}
          <nav className="navContainer">
              <NavLink to="/" className="navgation">Issues</NavLink>
              <NavLink to="/books" className="navgation">Books</NavLink>
              <NavLink to="/interviews" className="navgation">Interviews</NavLink>
          </nav>
          {/* 搜索框 */}
          <div className="searchContainer">
              <Space.Compact>
                  <Select defaultValue="issue" size="large" style={{width:"30%"}}>
                      <Select.Option value="issue">issues</Select.Option>
                      <Select.Option value="book">books</Select.Option>
                  </Select>
                  <Input.Search
                      placeholder="search term"
                      allowClear
                      enterButton="Search"
                      size="large"
                      style={{
                          width:"70%"
                      }}
                  />
              </Space.Compact>
          </div>
          {/* 登录按钮 */}
          <div className="loginBtnContainer">
              <LoginAvatar loginHandler={props.loginHandler}/>
          </div>
      </div>
  );
}

export default NavHeader;
