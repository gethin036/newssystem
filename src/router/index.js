import React from 'react'
import { useRoutes } from 'react-router-dom'
import LayOut from '../layout'
import Login from '../views/login'
import Home from '../views/home'
import UserManageList from '../views/user-manage/list'
import RoleList from '../views/right-manage/role-list'

export default function IndexRouter () {
  const routerConfig = [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <LayOut />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'user-manage/list',
          element: <UserManageList />
        },
        {
          path: 'right-manage/role/list',
          element: <RoleList />
        }
      ]
    }
  ]

  return useRoutes(routerConfig)
}
