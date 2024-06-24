import React from 'react';
import Header from './Header'; // Adjust the path as necessary
import { Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container maxWidth="md" style={{ marginTop: '20px' }}>
                {children}
            </Container>
        </div>
    );
}

export default Layout;
