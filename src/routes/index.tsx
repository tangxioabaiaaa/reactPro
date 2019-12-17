import React, {lazy} from 'react'
import {Redirect} from 'react-router-dom'
import {RouteConfig} from 'react-router-config'

const routes: RouteConfig[] = [
  //首页
  {
    path: '/home',
    component: lazy(()=>import('../pages/common/home')),
  },
  //数据统计
  {
    path: '/statistics/funds',
    component: lazy(()=>import('../pages/statistics/statistics-funds')),
    breadcrumb: ['数据统计','资金统计'],
  },
  {
    path: '/statistics/monitor',
    component: lazy(()=>import('../pages/statistics/statistics-monitor')),
    breadcrumb: ['数据统计','数据监控'],
  },
  {
    path: '/statistics/sales',
    component: lazy(()=>import('../pages/statistics/statistics-sales')),
    breadcrumb: ['数据统计','销量统计'],
  },
  {
    path: '/statistics/client',
    component: lazy(()=>import('../pages/statistics/statistics-client')),
    breadcrumb: ['数据统计','客户统计'],
  },
  //客户管理
  {
    path: '/client/detail',
    component: lazy(()=>import('../pages/client/client-detail')),
    breadcrumb: ['客户管理','客户详情'],
  },
  {
    path: '/client/edit',
    component: lazy(()=>import('../pages/client/client-edit')),
    breadcrumb: ['客户管理','编辑资料'],
  },
  {
    path: '/client/add',
    component: lazy(()=>import('../pages/client/client-add')),
    breadcrumb: ['客户管理','新增客户'],
  },
  {
    path: '/client/contract_manage',
    component: lazy(()=>import('../pages/client/contract-manage')),
    breadcrumb: ['客户管理','合同管理'],
  },
  {
    path: '/client/contract_detail',
    component: lazy(()=>import('../pages/client/contract-detail')),
    breadcrumb: ['客户管理','合同详情'],
  },
  {
    path: '/client/member_manage',
    component: lazy(()=>import('../pages/client/member-manage')),
    breadcrumb: ['客户管理','会员管理'],
  },
  {
    path: '/client/member_list',
    component: lazy(()=>import('../pages/client/member-list')),
    breadcrumb: ['客户管理','会员列表'],
  },
  {
    path: '/client/member_point',
    component: lazy(()=>import('../pages/client/member-point')),
    breadcrumb: ['客户管理','会员积分'],
  },
  //营销活动
  {
    path: '/activity/overview',
    component: lazy(()=>import('../pages/activity/activity-overview')),
    breadcrumb: ['营销活动','活动总览'],
  },
  {
    path: '/activity/list',
    component: lazy(()=>import('../pages/activity/activity-list')),
    breadcrumb: ['营销活动','活动列表'],
  },
  //办公辅助
  {
    path: '/office/notice',
    component: lazy(()=>import('../pages/office/office-notice')),
    breadcrumb: ['办公辅助','内部通知'],
  },
  {
    path: '/office/calendar',
    component: lazy(()=>import('../pages/office/office-calendar')),
    breadcrumb: ['办公辅助','个人日历'],
  },
  //系统设置
  {
    path: '/setting/message_new',
    component: lazy(()=>import('../pages/setting/message-new')),
    breadcrumb: ['系统设置','新建消息'],
  },
  {
    path: '/setting/message_detail',
    component: lazy(()=>import('../pages/setting/message-detail')),
    breadcrumb: ['系统设置','消息详情'],
  },
  {
    path: '/setting/employee_add',
    component: lazy(()=>import('../pages/setting/employee-add')),
    breadcrumb: ['系统设置','新增员工'],
  },
  {
    path: '/setting/employee_manage',
    component: lazy(()=>import('../pages/setting/employee-manage')),
    breadcrumb: ['系统设置','联系人管理'],
  },
  {
    path: '/setting/log_manage',
    component: lazy(()=>import('../pages/setting/log-manage')),
    breadcrumb: ['系统设置','日志管理'],
  },
  {
    path: '/setting/authority_manage',
    component: lazy(()=>import('../pages/setting/authority-manage')),
    breadcrumb: ['系统设置','权限管理'],
  },
  //错误界面
  {
    path: '/error',
    component: lazy(()=>import('../pages/common/error'))
  },
  //没有权限界面
  {
    path: '/forbidden',
    component: lazy(()=>import('../pages/common/forbidden'))
  },
  //路径错误
  {
    path: '/not-match',
    component: lazy(()=>import('../pages/common/not-match'))
  },
  {
    path: '**',
    render: ()=><Redirect to="/not-match"/>
  },
]

export default routes;