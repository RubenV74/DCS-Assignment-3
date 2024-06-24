import React, {useState} from "react";
import {Button, TextField, FormControl, FormGroup} from '@mui/material';
import {useNavigate } from 'react-router-dom';
import {createFamily} from "../Requests/FamilyRequests";

const CreateFamilyPage =  () => {
    const [name, setName] = useState("");
    const [members, setMembers] = useState([]);

    const navigate = useNavigate();
    const onChangeFamilyName = (e)=>{
        setName(e.target.value);
    }

    const onChangeFamilyMember = (idx,e) => {
        const updatedMembers = [...members]; // Create a copy of familyMembers
        updatedMembers[idx] = e.target.value; // Update the specific member at idx
        setMembers(updatedMembers); // Update state with the modified copy
    }

    const popFamilyMember = (idx) =>{
        members.splice(idx, 1);
        setMembers(members);
    }

    const addMember = () => {
        const updatedMembers = [...members, ''];
        setMembers(updatedMembers);
    }

    const submitNewFamily = (e) => {
        e.preventDefault()
        createFamily({name, members})
            .then(r=>navigate('/'));

    }

    return (
        <div>
            <form onSubmit={submitNewFamily}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            onChange={onChangeFamilyName}
                            defaultValue={name}
                            label="Family Name"
                        />
                        {members.map((member, idx) => (
                            <div style={{ flexWrap: 'wrap' }}>
                                <TextField
                                    key={idx}
                                    variant="outlined"
                                    onChange={(e) => onChangeFamilyMember(idx, e)}
                                    value={member}
                                    placeholder={member}
                                    label={`Member ${idx + 1}`}
                                />
                                <Button onClick={(e)=> popFamilyMember(idx)}>X</Button>
                            </div>
                        ))}
                    </FormGroup>
                    <Button onClick={() => {
                        addMember()
                    }}>Add member </Button>
                    <Button type="submit">Save</Button>
                    <Button onClick ={() => {
                        navigate('/')
                    }} >Cancel</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default CreateFamilyPage;

