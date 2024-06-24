import React, { useEffect, useState } from 'react';
import {Box, Container, CircularProgress, Button} from '@mui/material';
import FamilyCard from './FamilyCard';
import { getAllFamilies } from '../Requests/FamilyRequests';
import {useParams, useNavigate } from 'react-router-dom';

const Main = ()=>{
    const [families, setFamilies] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        getAllFamilies().then((families)=> {
            setFamilies(families);
            setLoading(false);
        });
    }, []);

    return (<Container>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            width: 70, // Adjust width as needed
                            height: 70, // Adjust height as needed
                            fontSize: '2rem', // Adjust font size as needed
                            borderRadius: '50%', // Makes the button circular
                            fontWeight: 'bold', // Makes the text bold
                            textTransform: 'none', // Keeps text in original case
                        }}
                        onClick={() => navigate("/family/create")}
                    >
                        +
                    </Button>
                <Box sx={{ display: 'flex', flexDirection: 'row' , flexWrap: 'wrap', justifyContent: 'space-around'}} >
                    {families.map((family) => (
                            <FamilyCard family={family}/>
                    ))}
                </Box>
            </>   )}
        </Container>
    );

}

export  default  Main;