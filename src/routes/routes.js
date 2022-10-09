import config from '~/config';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Group from '~/pages/Group';
import Profile from '~/pages/Profile/Profile';
import Study from '~/pages/Study';
import Friend from '~/pages/Friend';
import Messenger from '~/pages/Messenger';
import Chatbot from '~/pages/Chatbot';

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
    {
        path: config.routes.friends,
        component: Friend,
    },
    {
        path: config.routes.chatbot,
        component: Chatbot,
    },
    {
        path: config.routes.messenger,
        component: Messenger,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
