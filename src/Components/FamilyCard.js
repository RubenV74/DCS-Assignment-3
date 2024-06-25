import React from "react";
import {Card, CardHeader, CardContent, Typography, Button} from '@mui/material';
import {useNavigate} from "react-router-dom";

const FamilyCard = ({family,cardColor, textColor, T }) => {
    const navigate = useNavigate();

    return (
        <Card style={{ width: 300, height: 200 , marginTop: 20, backgroundColor: backgroundColor, }} hoverable>
        <Button onClick={()=> navigate(`family/${family._id}`)} style={{width: '100%', height: '100%',  padding: 0}}>
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