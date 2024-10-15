import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, List, Popover, Avatar, Image } from 'antd';
import styles from '../css/LoginAvatar.module.css';
import { UserOutlined } from '@ant-design/icons';
import {clearUserInfo, changeUserLoginStatus } from '../redux/userSlices';
import { useNavigate } from 'react-router-dom';

/**
 * display user avatar if logged in, otherwise display login / register button
 */
const LoginAvatar = (props) => {
  const { isLogin, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listClickHandler = (item) => {
    if(item === 'Logout'){ 
      const token = localStorage.getItem('userToken');
        if(token){
            localStorage.removeItem('userToken');
        }

      // clear user info in state
      dispatch(clearUserInfo());
      dispatch(changeUserLoginStatus(false));
      navigate('/');
    }else{
       // navigate to profile page
       navigate('/interviews');
    }
  }

  let loginStatus = null;
  if (isLogin) {
    //display avatar with popover menu
    const content = (
      <List
        dataSource={['Profile', 'Logout']}
        size='large'
        renderItem={(item) => {
          return (
            <List.Item
              style={{ cursor: 'pointer' }}
              onClick={() => listClickHandler(item)}
            >
              {item}
            </List.Item>
          );
        }}
      />
    );
    loginStatus = (
      <Popover content={content} trigger='hover' placement='bottom'>
        <div className={styles.avatarContainer}>
          <Avatar
            src={<Image src={userInfo?.avatar} />}
            size='large'
            icon={<UserOutlined />}
          />
        </div>
      </Popover>
    );
  } else {
    // otherwise display login / register button
    loginStatus = (
      <Button type='primary' size='large' onClick={props.loginHandler}>
        Register / Login
      </Button>
    );
  }

  return <div>{loginStatus}</div>;
};

export default LoginAvatar;
