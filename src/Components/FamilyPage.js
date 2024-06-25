import React, {useEffect, useRef, useState} from "react";
import {Card, CardContent, Typography, Container, Button, TextField, FormControl, FormGroup} from '@mui/material';
import {useParams, useNavigate } from 'react-router-dom';
import {CircularProgress} from "@mui/material";
import {deleteFamily, getFamilyById} from "../Requests/FamilyRequests";
import  {editFamily} from "../Requests/FamilyRequests";
import BackButton from "./BackButton";
const FamilyPage =  () => {
    const {familyId} = useParams();
    const [family, setFamily] = useState({});
    const [loading, setLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [familyName, setFamilyName] = useState("");
    const [familyMembers, setFamilyMembers] = useState([]);

    const  navigate =useNavigate();
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

    const popFamilyMember = (idx) =>{
         familyMembers.splice(idx, 1);
        setFamilyMembers(familyMembers);
        setFamily({...family, members: familyMembers})
    }

    const addMember = () => {
        const updatedMembers = [...familyMembers, ''];
        setFamilyMembers(updatedMembers);
        setFamily({...family, members: updatedMembers});
    }

    const onClickDeleteFamily = () => {
        deleteFamily(familyId).then((r)=> navigate('/'))
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
            <BackButton/>
            <Card className={'FamilyCard'}>
                {!isEdit ?
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            {familyName}
                        </Typography>
                        {familyMembers.map((member) => {
                            return (
                                <Typography variant="body2" component="p">
                                    {member}
                                </Typography>
                            )
                        })}
                        <Button onClick={() => setIsEdit(true)}>Edit</Button>
                    </CardContent> :
                    <form onSubmit={onSubmitFamilyEdit}  style={{width: '100%'}}>
                        <FormControl  style={{width: '100%'}}>
                            <FormGroup  style={{width: '100%'}}>
                                <TextField
                                    style={{width: '80%', marginTop:'3%', marginLeft:'2%', marginBottom: '2%'}}
                                    onChange={onChangeFamilyName}
                                    defaultValue={family.name}
                                    label="Family Name"
                                />
                                {familyMembers.map((member, idx) => (
                                    <div style={{display:'flex', flexWrap: 'wrap' }}>
                                    <TextField
                                        style={{width: '80%', marginTop:'3%', marginLeft:'2%', marginBottom: '0'}}
                                        key={idx}
                                        variant="outlined"
                                        onChange={(e) => onChangeFamilyMember(idx, e)}
                                        value={member}
                                        placeholder={member}
                                        label={`Member ${idx + 1}`}
                                    />
                                    <Button style={{alignSelf:'center'}} onClick={(e)=> popFamilyMember(idx)}>X</Button>
                                    </div>
                                ))}
                            </FormGroup>
                            <Button onClick={() => {
                                addMember()
                            }}>Add member </Button>
                            <Button type="submit">Save</Button>
                            <Button onClick={()=>{
                                onClickDeleteFamily();
                            }}>Delete </Button>
                            <Button onClick ={() => {
                                setIsEdit(false)
                                window.location.reload()
                            }} >Cancel</Button>
                        </FormControl>
                    </form>
                }
            </Card>
        </Container>
    );
}


export default FamilyPage;