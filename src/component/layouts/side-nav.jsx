import React from 'react';
import { Box } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import { dashboard_v1, devices_v1, help_v1, location_v1, media_v1, playlist_v1, schedules_v1, screen_v1, templates_v1, widgets_v1 } from '../../services/svg/svg-icon';
import * as slug from '../../routes/slug.js';
import logoImg from '../../services/images/logoMain.png';
import './layouts.scss';

export const navItem = [
    { title: '', name: '', icon: dashboard_v1, url: slug.DASHBOARD, logo: true },
    // { title: '', name: 'Test', icon: dashboard_v1, url: slug.TEST, disabled: false },
    { title: '', name: 'Dashboard', icon: dashboard_v1, url: '/', },
    { title: '', name: 'Screen', icon: screen_v1, url: slug.SCREENS, url2: slug.ADD_SCREEN },
    { title: '', name: 'Media', icon: media_v1, url: slug.MEDIA },
    { title: '', name: 'Templates', icon: templates_v1, url: slug.TEMPLATES, url2: slug.ADD_TEMPLATE, url3: slug.SEL_TEMPLATE },
    { title: '', name: 'Playlist', icon: playlist_v1, url: slug.PLAYLISTS },
    { title: '', name: 'Schedules', icon: schedules_v1, url: slug.SCHEDULES, url2: slug.ADD_SCHEDULES },
    { title: '', name: 'Widgets', icon: widgets_v1, url: slug.WIDGETS, url3: slug.SEL_WIDGETS },
    { title: '', name: 'Devices', icon: devices_v1, url: slug.DEVICES },
    { title: '', name: 'Location', icon: location_v1, url: slug.LOCATION },
    { title: '', name: 'Help', icon: help_v1, url: slug.HELP, bottom: true },
    //extra root
    { title: '', name: 'Account', icon: help_v1, url: slug.ACCOUNT_PROFILE, disabled: true },
    { title: '', name: 'Users', icon: help_v1, url: slug.USERS, disabled: true },
    { title: '', name: 'Profile', icon: help_v1, url: slug.ACCOUNT_SETTINGS, disabled: true },
    { title: '', name: 'Add Screen', icon: help_v1, url: slug.ADD_SCREEN, disabled: true },
    { title: '', name: 'Add Template', icon: help_v1, url: slug.ADD_TEMPLATE, disabled: true },
    { title: '', name: 'Select Template', icon: help_v1, url: slug.SEL_TEMPLATE, disabled: true },
    { title: '', name: 'Select Widgets', icon: help_v1, url: slug.SEL_WIDGETS, disabled: true },
    { title: '', name: 'Add Schedule', icon: help_v1, url: slug.ADD_SCHEDULES, disabled: true },

];

const SideNav = () => {

    const { pathname } = useLocation();
    return (
        <div className='mainSideNav'>
            <div className='child_side_nav'>
                {
                    navItem.map((d, i) =>
                        d?.logo ?
                            <Box className={`menuListItem logoNav ${d.disabled ? 'd-none' : ''}`} key={i}>
                                <Link to={`${d.url}`} className={``}>
                                    <img src={logoImg} alt="" width="60px" />
                                </Link>
                            </Box>
                            : !d?.bottom ?
                                <Box className={`menuListItem ${d.disabled ? 'd-none' : ''}`} key={i}>
                                    <Link to={`${d.url}`} className={`${pathname === d.url ? 'active' : pathname === d.url2 ? 'active' : pathname === d.url3 ? 'active' : ''}`}>
                                        {d.icon}
                                        {d.name}
                                    </Link>
                                </Box>
                                :
                                <Box className={`marginTopA menuListItem ${d.disabled ? 'd-none' : ''}`} key={i}>
                                    <Link to={`${d.url}`} className={`${pathname === d.url ? 'active' : pathname === d.url2 ? 'active' : pathname === d.url3 ? 'active' : ''}`}>
                                        {d.icon}
                                        {d.name}
                                    </Link>
                                </Box>
                    )
                }
            </div>
        </div >
    );
};

export default SideNav;