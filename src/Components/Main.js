import React, { useEffect, useState } from 'react';
import { Grid, Container, CircularProgress } from '@mui/material';
import FamilyCard from './FamilyCard';
import { getAllFamilies } from '../Requests/FamilyRequests';


const Main = ()=>{

    const [families, setFamilies] = useState([]);
    const [loading, setLoading] = useState(true);

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
                <Grid container spacing={3}>
                    {families.map((family) => (
                        <Grid item xs={12} sm={6} md={4} key={family._id}>
                            <FamilyCard family={family} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );

}

export  default  Main;