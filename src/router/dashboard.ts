import { _import, _importLayout } from '../common/index'

export default {
  path: '/Dashboard',
  name: 'Dashboard',
  redirect: '/Dashboard/Index',
  component: _importLayout(),
  meta: { title: '框架介绍' },
  children: [
    {
      path: 'Index',
      name: 'DashboardIndex',
      component: _import('Dashboard/Index'),
      meta: {
        title: '框架介绍',
        icon: 'el-icon-menu'
      }
    },
    {
      path: 'GitHub',
      name: 'DashboardGitHub',
      component: _import('Dashboard/GitHub'),
      meta: {
        title: 'GitHub',
        icon: 'el-icon-service'
      }
    }
  ]
}
