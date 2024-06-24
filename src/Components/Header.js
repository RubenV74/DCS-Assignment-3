import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Container maxWidth="md" style={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
                        Families Management
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
