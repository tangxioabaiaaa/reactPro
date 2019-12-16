import React, {Suspense} from 'react';
import { Layout } from 'antd';
import AppHeader from './layout/header'
import AppSlide from './layout/sider'
import AppBreadcrumb from './layout/breadcrumb'
import Loading from './pages/common/loading'
import Login from './pages/common/login'
import renderRoutes from './routes/renderRoutes'
import routes from './routes'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

const { Content } = Layout;

const App: React.FC = () => {
  const isLogin = useSelector(state=>(state as any).getIn(['user', 'isLogin']));
  return (
    <Router>
      {/* 登录鉴权 */}
      <Switch>
        <Route path="/login" component={Login}/>
        <Route render={()=>{
          if(isLogin){
            return <AppLayout/>
          }else{
            return <Redirect to="/login"/>
          }
        }}/>
      </Switch>
    </Router>
  );
}

const AppLayout: React.FC = () => {
  const role = useSelector(state=>(state as any).getIn(['user', 'userInfo', 'role']));
  return (
    <Layout className="app">
      {/* 头部 */}
      <AppHeader/>

      <Layout>
        {/* 侧边栏 */}
        <AppSlide/>
        
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* 面包屑 */}
          <AppBreadcrumb/>
          {/* 主内容 */}
          <Content className="app-content">
            <Suspense fallback={<Loading/>}>
              {renderRoutes(routes, role)}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;


