import React, {useEffect, useRef, useState} from "react";
import {Card, CardContent, Typography, Container, Button, TextField, FormControl, FormGroup} from '@mui/material';
import {useParams } from 'react-router-dom';
import {CircularProgress} from "@mui/material";
import {getFamilyById} from "../Requests/FamilyRequests";
import  {editFamily} from "../Requests/FamilyRequests";

const FamilyPage =  () => {
    const {familyId} = useParams();
    const [family, setFamily] = useState({});
    const [loading, setLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const[familyName, setFamilyName] = useState("");
    const [familyMembers, setFamilyMembers] = useState([]);


    const onChangeFamilyName = (e) => setFamilyName(e.target.value);
    const onChangeFamilyMember = (idx,e) => {
        const updatedMembers = [...familyMembers]; // Create a copy of familyMembers
        updatedMembers[idx] = e.target.value; // Update the specific member at idx
        setFamilyMembers(updatedMembers); // Update state with the modified copy
    }
    const onSubmitFamilyEdit = (e) =>{
        editFamily(family._id, {
            name: familyName,
            members: familyMembers
        }).then(()=>setIsEdit(false))

    }
    useEffect(() => {
        getFamilyById(familyId)
            .then((data) => {
                setFamily(data);
                setFamilyName(data.name)
                setFamilyMembers(data.members)
                setLoading(false);
            })
    }, []);
    return (
        loading ? <CircularProgress/> :
        <Container className={'FamilyCard'} >
            <Card className={'FamilyCard'}>
                {!isEdit ?
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
                        <Button onClick={() => setIsEdit(true)}>Edit</Button>
                    </CardContent> :
                    <form onSubmit={onSubmitFamilyEdit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    onChange={onChangeFamilyName}
                                    defaultValue={family.name}
                                    label="Family Name"
                                />
                                {family.members.map((member, idx) => (
                                    <TextField
                                        key={idx}
                                        variant="outlined"
                                        onChange={(e) => onChangeFamilyMember(idx, e)}
                                        defaultValue={member}
                                        label={`Member ${idx + 1}`}
                                    />
                                ))}
                            </FormGroup>
                            <Button type="submit">Save</Button>
                            <Button>Delete</Button>
                            <Button>Cancel</Button>
                        </FormControl>
                    </form>
                }
            </Card>
        </Container>
    );
}


export default FamilyPage;