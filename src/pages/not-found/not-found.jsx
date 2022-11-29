import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../routes/parent-route';
import { DASHBOARD, LOGIN } from '../../routes/slug';
// import { user_check } from '../../routes/routings';

const NotFound = () => {
    return (
        <Container sx={{ mt: 1, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Link to={userInfo?.token ? DASHBOARD : LOGIN} style={{ fontSize: '15px', border: '2px solid blue', padding: '10px 20px' }}>
                Dashboard
            </Link>
            <img
                width="auto"
                src="https://raw.githubusercontent.com/dev-abuhasan/dev-abuhasan/master/not-found-abu.png"
                alt=""
                style={{ maxHeight: '500px', marginTop: '10px' }}
            />
        </Container>
    );
};

export default NotFound;
