import { useRoutes } from 'react-router-dom';
import MainRoutes from './main-routes';
import AuthRoutes from './auth-routes';
import config from './config';

// routes

// ==============================|| ROUTING RENDER ||============================== //
export const userInfo = JSON.parse(localStorage.getItem('screenItOnInfo'));

const ParentRoute = () => {
    return useRoutes([AuthRoutes, userInfo?.token ? MainRoutes : []], config.basename);
};

export default ParentRoute;
