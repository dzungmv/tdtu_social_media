import routesCofig from '~/config/routes';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Search from '~/pages/Search';

const publicRoutes = [
	{
		path: routesCofig.home,
		component: Home,
	},

	{
		path: routesCofig.login,
		component: Login,
		layout: null,
	},
	{
		path: routesCofig.search,
		component: Search,
		layout: null,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
