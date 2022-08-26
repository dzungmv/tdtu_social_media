import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Search from '~/pages/Search';

const publicRoutes = [
	{
		path: config.routes.home,
		component: Home,
	},

	{
		path: config.routes.login,
		component: Login,
		layout: null,
	},
	{
		path: config.routes.search,
		component: Search,
		layout: null,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
