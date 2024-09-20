import React, { useCallback, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import './css/App.css';
import RouterConfig from './router';
import LoginForm from './components/LoginForm';

const { Header, Footer, Content } = Layout;

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

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

        <LoginForm isShown={showLoginForm} handelCancel={loginFormCancelHandler} />
      </>
    </ConfigProvider>
  );
}

export default App;
