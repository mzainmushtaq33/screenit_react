import React from 'react';
import { Outlet } from 'react-router-dom';

const MinimalLayout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};

export default MinimalLayout;