import React, {useEffect, useState} from "react";
import { Card, CardContent, Typography, Container } from '@mui/material';
import {useParams } from 'react-router-dom';
import {CircularProgress} from "@mui/material";
import {getFamilyById} from "../Requests/FamilyRequests";


const FamilyPage =  () => {
    const {familyId} = useParams();
    const [family, setFamily] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getFamilyById(familyId)
            .then((data) => {
                setFamily(data);
                setLoading(false);
            })
    }, []);
    return (
        loading ? <CircularProgress/> :
        <Container className={'FamilyCard'} >
            <Card className={'FamilyCard'} >
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {family.name}
                    </Typography>

                        {family.members.map((member) => {
                            return (
                                <Typography variant="body2" component="p">
                                    {member}
                                </Typography>
                            )
                        })}

                </CardContent>
            </Card>
        </Container>
    );
}




export default  FamilyPage;