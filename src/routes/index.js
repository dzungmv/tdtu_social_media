import Home from '~/pages/Home';
import Following from '~/pages/Following';
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
		path: '/alone-page',
		component: Alone,
		layout: null,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
