import React, { lazy, Suspense } from 'react'
// 导入字体图标样式
import './assets/fonts/iconfont.css'

// 这个是虚拟化长列表的样式
import 'react-virtualized/styles.css'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// 导入封装的授权组件
import AuthRoute from './components/AuthRoute'

// 全局的样式
import './App.css'

// 导入子组件

// import Home from './views/Home'
// import Login from './views/Login'
// import CityList from './views/CityList'
// import Map from './views/Map'
// import Detail from './views/Detail'
// import Rent from './views/Rent'
// import RentAdd from './views/Rent/Add'
// import RentSearch from './views/Rent/Search'

const Home = lazy(() => import('./views/Home'))
const Login = lazy(() => import('./views/Login'))
const CityList = lazy(() => import('./views/CityList'))
const Map = lazy(() => import('./views/Map'))
const Detail = lazy(() => import('./views/Detail'))
const Rent = lazy(() => import('./views/Rent'))
const RentAdd = lazy(() => import('./views/Rent/Add'))
const RentSearch = lazy(() => import('./views/Rent/Search'))
const Hooks = lazy(() => import('./hooks'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="app">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/citylist" component={CityList} />
            <Route path="/map" component={Map} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/hooks" component={Hooks} />

            {/* 下面这些访问之前需要先做鉴权 */}
            <AuthRoute exact path="/rent">
              <Rent />
            </AuthRoute>

            <AuthRoute path="/rent/add">
              <RentAdd />
            </AuthRoute>

            <AuthRoute path="/rent/search">
              <RentSearch />
            </AuthRoute>

            {/* 当我们需要渲染的内容足够简单的时候，没必要单独定义一个组件 */}
            <Route
              path="/test"
              render={props => {
                console.log('test render', props)
                return <div>我是一个test组件</div>
              }}
            />

            <Redirect exact from="/" to="/home" />
          </Switch>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
