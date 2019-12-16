type SlideItemType = {
  id: string,
  title: string,
  path: string
}
interface SiderConfigInterface{
  id: string,
  title: string,
  icon: string,
  children: SlideItemType[]
}

const SiderConfig: SiderConfigInterface[] = [
  {
    id: 'statistics',
    title: '数据统计',
    icon: 'line-chart',
    children: [
      {
        id: 'statistics-funds',
        title: '资金统计',
        path: '/statistics/funds',
      },
      {
        id: 'statistics-monitor',
        title: '数据监控',
        path: '/statistics/monitor',
      },
      {
        id: 'statistics-sales',
        title: '销量统计',
        path: '/statistics/sales',
      },
      {
        id: 'statistics-client',
        title: '客户统计',
        path: '/statistics/client',
      }
    ]
  },
  {
    id: 'client',
    title: '客户管理',
    icon: 'global',
    children: [
      {
        id: 'client-detail',
        title: '客户详情',
        path: '/client/detail',
      },
      {
        id: 'client-edit',
        title: '编辑资料',
        path: '/client/edit',
      },
      {
        id: 'client-add',
        title: '新增客户',
        path: '/client/add',
      },
      {
        id: 'contract-manage',
        title: '合同管理',
        path: '/client/contract_manage',
      },
      {
        id: 'contract-detail',
        title: '合同详情',
        path: '/client/contract_detail',
      },
      {
        id: 'member-manage',
        title: '会员管理',
        path: '/client/member_manage',
      },
      {
        id: 'member-list',
        title: '会员列表',
        path: '/client/member_list',
      },
      {
        id: 'member-point',
        title: '会员积分',
        path: '/client/member_point',
      },
    ]
  },
  {
    id: 'activity',
    title: '营销活动',
    icon: 'pie-chart',
    children: [
      {
        id: 'activity-overview',
        title: '活动总览',
        path: '/activity/overview',
      },
      {
        id: 'activity-list',
        title: '活动列表',
        path: '/activity/list',
      }
    ]
  },
  {
    id: 'office',
    title: '办公辅助',
    icon: 'unordered-list',
    children: [
      {
        id: 'office-notice',
        title: '内部通知',
        path: '/office/notice',
      },
      {
        id: 'office-calendar',
        title: '个人日历',
        path: '/office/calendar',
      }
    ]
  },
  {
    id: 'setting',
    title: '系统设置',
    icon: 'setting',
    children: [
      {
        id: 'message-new',
        title: '新建消息',
        path: '/setting/message_new',
      },
      {
        id: 'message-detail',
        title: '消息详情',
        path: '/setting/message_detail',
      },
      {
        id: 'employee-add',
        title: '新增员工',
        path: '/setting/employee_add',
      },
      {
        id: 'employee-manage',
        title: '联系人管理',
        path: '/setting/employee_manage',
      },
      {
        id: 'log-manage',
        title: '日志管理',
        path: '/setting/log_manage',
      },
      {
        id: 'authority-manage',
        title: '权限管理',
        path: '/setting/authority_manage',
      }
    ]
  },
]

export default SiderConfig;