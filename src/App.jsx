import React, { useCallback, useState, useEffect } from 'react';
import { ConfigProvider, Layout, message } from 'antd';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import './css/App.css';
import RouterConfig from './router';
import LoginForm from './components/LoginForm';
import { getUserByToken, getUserById } from './api/user';
import { useDispatch } from 'react-redux';
import { initUserInfo, changeUserLoginStatus } from './redux/userSlices';

const { Header, Footer, Content } = Layout;

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserByToken();
      // console.log(result);
      if (result.data) {
        // token is valid
        const { data } = await getUserById(result.data._id);
        dispatch(initUserInfo(data));
        dispatch(changeUserLoginStatus(true));
        // console.log(user)
      } else {
        // token is invalid or has expired
        message.warning(result.msg);
        localStorage.removeItem('userToken');
      }
    };
    if (localStorage.getItem('userToken')) {
      fetchData();
    }
  }, [dispatch]);

  const loginHandler = useCallback(() => {
    setShowLoginForm(true);
  }, []);

  const loginFormCancelHandler = useCallback(() => {
    setShowLoginForm(false);
  }, []);

  return (
    <ConfigProvider>
      <>
        {/* heaer */}
        <Header className='header'>
          <NavHeader loginHandler={loginHandler} />
        </Header>

        {/* routed pages */}
        <Content className='content'>
          <RouterConfig />
        </Content>

        {/* footer */}
        <Footer className='footer'>
          <PageFooter />
        </Footer>

        <LoginForm
          isShown={showLoginForm}
          handelCancel={loginFormCancelHandler}
        />
      </>
    </ConfigProvider>
  );
}

export default App;
