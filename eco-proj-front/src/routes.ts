import { routeType } from './utils/types';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from './utils/consts';

export const publicRoutes: routeType[] = [
  {
    id: 1,
    title: 'Log In',
    path: LOGIN_ROUTE,
  },
  {
    id: 2,
    title: 'Sign Up',
    path: SIGNUP_ROUTE,
  },
];
