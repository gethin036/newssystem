import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Sider } = Layout;

// const newList = []
const filterMenu = (menuList, find) => {
  menuList.forEach(item => {
    if (item.children) {
      item.children = filterMenu(item.children, [])
    }
    if (item.pagepermisson === 1) {
      find.push(item)
    }
    if (item.rightId) {
      delete item.rightId;
    }
  })
  return find
}
export default function SideBar() {
  const [collapsed] = useState(false);
  const [menu, setMenu] = useState([])
  const [defaultKey, setKeys] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  // 数据请求
  useEffect(() => {
    axios.get('http://localhost:6300/rights?_embed=children').then(res => {
      // console.log(res.data)
      const aa = filterMenu(res.data, []).map(item => {
        const { children, ...other } = item
        if(item.children.length) return item
          return other
      })
      console.log(filterMenu(res.data, []))
      setMenu(aa)
    })
  }, [])

  // 获取路由参数
  useEffect(() => {
    const pathname = location.pathname
    console.log(pathname)
    setKeys([pathname])
  }, [location])

  const handleMenuClick = (url) => {
    console.log(url)
    navigate(url)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{display: 'flex', height: '100%', 'flexDirection': 'column'}}>
        <div style={{flex: 1, 'overflow': 'auto'}}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={defaultKey}
            items={menu}
            onClick={({key}) => handleMenuClick(key)}
          />
        </div>
      </div>
    </Sider>
  )
}
