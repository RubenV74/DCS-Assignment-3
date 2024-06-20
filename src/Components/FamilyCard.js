import React from "react";
import {Card, CardHeader, CardContent, Typography, Button} from '@mui/material';
import {useNavigate} from "react-router-dom";

const FamilyCard = ({family}) => {
    const navigate = useNavigate();

    return (
        <Card>
        <Button onClick={()=> navigate(`family/${family._id}`)}>
        <CardContent>
            <Typography variant="h5" component="div">
                {family.name}
            </Typography>
                {
                    family.members.map((member, idx) =>
                    {
                    return(
                    <Typography variant="body2" color="text.secondary">
                         {member}
                        </Typography>
                    )})}
              </CardContent>
        </Button>
        </Card>
    )
}
export default FamilyCard;