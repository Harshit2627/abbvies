import React from 'react';
import { ConfigProvider, Layout, Space } from 'antd';
import GlobalHeader from '../header';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const MainLayout: React.FC = () => (
    <ConfigProvider
    
    theme={{
      token: {
        colorPrimary: '#1677FF',
        colorBgBase: '#00b96b',
        colorBgContainer: '#1677FF',
        colorBgLayout: '#ffff',
        colorText: "#ffff",
        colorBgTextActive: '#ffff',
        
      },
    }}
  >
  <Space direction="vertical" style={{ width: '100%', height:"100%" }} size={[0, 48]}>
    <Layout>
      <Header style={{backgroundColor:"#1677FF"}}><GlobalHeader/></Header>
      <Content ><Outlet/></Content>
      <Footer >Footer</Footer>

    </Layout>
  </Space>
  </ConfigProvider>
);

export default MainLayout;