import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd';

import SideBar from './SideBar'
import TopHeader from './TopHeader'
import './layout.less'

const { Content } = Layout;
export default function LayOut() {
  return (
    <Layout className="news-layout">
       <TopHeader />
      <Layout className="site-layout">
        <SideBar />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
