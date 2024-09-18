import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import './css/App.css';
import RouterConfig from './router';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <ConfigProvider>
      <>
        {/* heaer */}
        <Header className='header'>
          <NavHeader />
        </Header>

        {/* routed pages */}
        <Content className='content'>
          <RouterConfig/>
        </Content>

        {/* footer */}
        <Footer className='footer'>
          <PageFooter />
        </Footer>
      </>
    </ConfigProvider>
  );
}

export default App;
