import React from 'react';
import { NavLink } from "react-router-dom";
import {Input, Select, Button} from "antd";

const NavHeader = () => {
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
              <Input.Group>
                  <Select defaultValue="issue" size="large" style={{width:"20%"}}>
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
              </Input.Group>
          </div>
          {/* 登录按钮 */}
          <div className="loginBtnContainer">
              <Button type="primary" size="large">注册/登录</Button>
          </div>
      </div>
  );
}

export default NavHeader;
