import OverviewPage from './overview';
import AboutPage from './about';

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
    }
];

export default routes;