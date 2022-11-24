import React, { useState } from 'react'
import { Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
const { Header } = Layout

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      <div className="logo">全球新闻发布管理系统</div>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  )
}
