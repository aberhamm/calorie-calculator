import HomeView from '../views/HomeView';
import RunningView from '../views/RunningView';
import TripsView from '../views/TripsView';

export default [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/running',
        name: 'Running',
        component: RunningView,
    },
    {
        path: '/trips',
        name: 'Trips',
        component: TripsView,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView'),
    },
];