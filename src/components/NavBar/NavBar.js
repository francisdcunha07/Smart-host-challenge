import React from 'react';
import { AppBar, Toolbar, MenuIcon, Typography, IconButton } from '@material-ui/core';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                Welcome To Hotel Management Portal
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;