import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';
import Alone from '~/pages/Alone';

const publicRoutes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/following',
		component: Following,
	},
	{
		path: 'login',
		component: Login,
		layout: null,
	},
	{
		path: '/alone-page',
		component: Alone,
		layout: null,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
