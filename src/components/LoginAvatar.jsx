import React from 'react';
import { useSelector } from 'react-redux';
import { Button, List, Popover, Avatar } from 'antd';
import styles from '../css/LoginAvatar.module.css';
import { UserOutlined } from '@ant-design/icons';

/**
 * display user avatar if logged in, otherwise display login / register button
 */
const LoginAvatar = (props) => {
  const { isLogin } = useSelector((state) => state.user);

  let loginStatus = null;
  if (isLogin) {
    //display avatar with popover menu
    const content = (
      <List
        dataSource={['Profile', 'Logout']}
        size='large'
        renderItem={(item) => {
          return <List.Item style={{ cursor: 'pointer' }}>{item}</List.Item>;
        }}
      />
    );
    loginStatus = (
      <Popover content={content} trigger='hover' placement='bottom'>
        <div className={styles.avatarContainer}>
          <Avatar src='' preview={false} size='large' icon={<UserOutlined />} />
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
