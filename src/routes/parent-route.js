import { useRoutes } from 'react-router-dom';
import MainRoutes from './main-routes';
import AuthRoutes from './auth-routes';
import config from './config';

// routes

// ==============================|| ROUTING RENDER ||============================== //

export const userInfo = JSON.parse(localStorage.getItem('screenItOnInfo'));
const ParentRoute = () => {
const userInfoData = JSON.parse(localStorage.getItem('screenItOnInfo'));

    return useRoutes([userInfoData?.token ? MainRoutes : [],!userInfoData?.token && AuthRoutes, ], config.basename);
};

export default ParentRoute;
