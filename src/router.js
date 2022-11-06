/**
 * 约定式路由
 */
import React, { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import MainLayout from './components/MainLayout';

// 懒加载的路由组件的的导入方式
// webpack 魔法注释 webpackChunkName
// 生产环境打包后 static/js/[name].chunk.js(进入该路由才会加载对应的js)
const PageOne = lazy(() => import(/* webpackChunkName: 'PageOne' */ './pages/PageOne'));
const PageTwo = lazy(() => import(/* webpackChunkName: 'PageTwo' */ './pages/PageTwo'));
const PageThree = lazy(() => import(/* webpackChunkName: 'PageThree' */ './pages/PageThree'));

// <div>loading...</div>
// 根据需求可变更为需要的过渡动画
export default function RootRouter() {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<Router>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="one" element={<PageOne />} />
						<Route path="two" element={<PageTwo />} />
						<Route path="three" element={<PageThree />} />
					</Route>
					{/* 重定向到首页 */}
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</Suspense>
	);
}
