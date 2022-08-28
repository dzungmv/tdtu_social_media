import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Group from '~/pages/Group';
import Profile from '~/pages/Profile';
import Study from '~/pages/Study';

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
		path: config.routes.group,
		component: Group,
	},
	{
		path: config.routes.profile,
		component: Profile,
	},

	{
		path: config.routes.study,
		component: Study,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
