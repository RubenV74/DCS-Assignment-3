import React, { useEffect, useState } from 'react';
import {Box, Container, CircularProgress, Button} from '@mui/material';
import FamilyCard from './FamilyCard';
import { getAllFamilies } from '../Requests/FamilyRequests';
import {useParams, useNavigate } from 'react-router-dom';



const cardColors = {
    greenCard: {
        cardColor:         '#B9FF66', //green
        headingTextColor: '#191A23', // black
        textHighlightColor: '#FFFFFF',
        textColor: '#191A23',// grey
    },
    greyCard: {
        cardColor: '#FFFFFF',
        headingTextColor:  '#191A23',
        textHighlightColor: '#B9FF66',
        textColor: '#191A23',
    },
    blackCard:{
        cardColor:'#191A23',
        headingTextColor: '#191A23',
        textHighlightColor:'#FFFFFF',
        textColor: '#FFFFFF'
    }
}

const applyCardColor = (idx) =>{
    switch (idx) {
        case 0:
            return cardColors.greyCard;
        case 1:
            return cardColors.blackCard;
        case 2:
            return cardColors.greenCard;
    }
}


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

    return (<Container style={{marginBottom: '5%'}}>
            {loading ? (
                <CircularProgress
                    style={{
                        width:'100px',
                        height:'100px',
                    position: "fixed",
                    top: '50%',
                    left: '47%'
                }}/>
            ) : (
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            position:"fixed",
                            left: '15%',
                            top: '11%',
                            backgroundColor: '#B9FF66',
                            color: 'black',
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
                    {families.map((family, idx) => (
                            <FamilyCard family={family} {...applyCardColor(idx%3)}/>
                    ))}
                </Box>
            </>   )}
        </Container>
    );

}

export  default  Main;