import {Button} from "@mui/material";
import {IoIosArrowBack} from "react-icons/io";
import React from "react";
import { useNavigate } from "react-router-dom";


const BackButton =()=> {
    const navigate = useNavigate();
    return (
        <Button
            onClick={()=> navigate('/')}
            variant="contained"
            color="primary"
            style={{
                position:"absolute",
                left: '15%',
                top: '11%',
                backgroundColor: '#B9FF66',
                color: '#191A23',
                width: 65, // Adjust width as needed
                height: 65, // Adjust height as needed
                fontSize: '2rem', // Adjust font size as needed
                borderRadius: '50%', // Makes the button circular
                fontWeight: 'bold', // Makes the text bold
                textTransform: 'none', // Keeps text in original case
            }}
        >
            <IoIosArrowBack style={{color: 'black'}} />
        </Button>
    )
}

export default BackButton;