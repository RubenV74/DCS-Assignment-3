import React from 'react';
import {AppBar, Toolbar, Typography, Container, Button} from '@mui/material';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Container maxWidth="md" style={{ textAlign: 'center' }}>
                    <Button style={{all:'unset'}} onClick={(e)=>navigate('/')}>
                    <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
                        Families Management
                    </Typography>
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
