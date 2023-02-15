import { routeType } from './types';
import { HOME_ROUTE, LOGIN_ROUTE } from './utils/consts';

export const publicRoutes: routeType[] = [
  {
    id: 1,
    title: 'Home',
    path: HOME_ROUTE,
  },
  {
    id: 2,
    title: 'Log In',
    path: LOGIN_ROUTE,
  },
];
