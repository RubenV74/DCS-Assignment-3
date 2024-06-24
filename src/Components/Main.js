import React, { useEffect, useState } from 'react';
import {Grid, Container, CircularProgress, Button} from '@mui/material';
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
                <Button onClick={()=>{
                    navigate("/family/create");
                }}>+</Button>
                <Grid container spacing={3}>
                    {families.map((family) => (
                        <Grid item xs={12} sm={6} md={4} key={family._id}>
                            <FamilyCard family={family}/>
                        </Grid>
                    ))}
                </Grid>
            </>   )}
        </Container>
    );

}

export  default  Main;