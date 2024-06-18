import React from "react";
import {Card, CardHeader, CardContent, Typography} from '@mui/material';

const FamilyCard = ({family}) => {
    return (

        <Card>
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
      </Card>
    )
}
export default FamilyCard;