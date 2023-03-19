import React from 'react';
import { ConfigProvider, Layout, Space } from 'antd';
import GlobalHeader from '../header';
import { Outlet } from 'react-router-dom';
import { GlobalFooter } from '../footer';

const { Header, Footer, Content } = Layout;

const MainLayout: React.FC = () => (
    <ConfigProvider
    
    theme={{
      token: {
        // colorPrimary: '#1677FF',
        colorBgBase: '#F1EFEF',
        colorBgContainer: '#1677FFAC',
        colorBgLayout: '#ffff',
        colorText: "#E2E2E2",
        colorBgTextActive: '#ffff',
        colorFillContent: "#FFFFFF",
        colorLink: "#E2E2E2",
        colorLinkHover: "#FFFFFF"
      },
    }}
  >
  <Space direction="vertical" style={{ width: '100%', height:"100%" }} size={[0, 48]}>
    <Layout>
      <Header style={{backgroundColor:"#2E82A6B8",position: 'sticky', top: 0, zIndex: 1, width: '100%' }}  ><GlobalHeader/></Header>
      <Content ><Outlet/></Content>
      <Footer style={{backgroundColor:"#2E82A6B8"}}><GlobalFooter/></Footer>

    </Layout>
  </Space>
  </ConfigProvider>
);

export default MainLayout;