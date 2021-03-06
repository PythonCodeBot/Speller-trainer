import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles(() => ({
    TypographyStyle: {
        flex: 1
    }
}))


export const TopBar = () => {
    const classes = useStyle();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.TypographyStyle} variant="h6">
                    UserName
                </Typography>
                <Button variant="contained" color="secondary" >Logout</Button>
            </Toolbar>
        </AppBar>

    )
}

