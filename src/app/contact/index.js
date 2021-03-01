import OverviewPage from './overview';
import AboutPage from './about';
import UserPage from './user';
import UserIdPage from './userId';

const routes = [
    {
        path: '/',
        exact: true,
        component: OverviewPage
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage
    },
    {
        path: '/user',
        exact: true,
        component: UserPage
    },
    {
        path: '/user/:userId',
        exact: true,
        component: UserIdPage
    }
];

export default routes;