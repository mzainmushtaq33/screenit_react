import { lazy } from 'react';
import * as slug from './slug';
import MinimalLayout from '../component/layouts/minimal-layout';
import Loadable from '../component/ui-components/loading/loadable';
import NotFound from '../pages/not-found/not-found';

// project imports;
const Login = Loadable(lazy(() => import('../pages/login/login.jsx')));
const SignUp = Loadable(lazy(() => import('../pages/login/sign-up.jsx')));
const ForgotPass = Loadable(lazy(() => import('../pages/login/forgot-pass.jsx')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: slug.HOME,
            element: <Login />
        },
        {
            path: slug.LOGIN,
            element: <Login />
        },
        {
            path: slug.REGISTER,
            element: <SignUp />
        },
        {
            path: slug.FORGOT_PASS,
            element: <ForgotPass />
        },
        {
            path: slug.NOT_FOUND,
            element: <NotFound />
        }
    ]
};

export default AuthRoutes;
