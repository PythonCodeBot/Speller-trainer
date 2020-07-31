import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const TopBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    UserName
                </Typography>
                <Button color="inherit" >Logout</Button>
            </Toolbar>
        </AppBar>

    )
}