import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

import styles from './Layout.less';
import MainHeader from './MainHeader'
import MainSider from './MainSider'

function MainLayout({ children, location, isSiderCollapsed, toggleSider }) {

  console.log(location)

  return (
    <Layout className={styles.layout}>
      <MainSider
        location={location}
        isSiderCollapsed={isSiderCollapsed}
      />
      <Layout>
        <MainHeader
          location={location}
          isSiderCollapsed={isSiderCollapsed}
          toggleSider={toggleSider}
        />
        <Content className={styles.content}>
          <div>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
