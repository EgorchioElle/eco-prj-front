
export const LOGIN_ROUTE: string = '/log-in';
export const SIGNUP_ROUTE: string = '/sign-up';
export const ABOUT_ROUTE: string = '/about';


export const userColors: string[] = [
    '#EF4A5B',
    '#4ae184',
    '#13AFB2',
    '#ff1753',
    '#008bc9',
    '#795D9C',
];

export const toInitials = (username: string) => {
    return username.split(' ').map(word => word[0]).join('');
};
