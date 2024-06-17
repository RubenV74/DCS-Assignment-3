import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import {getAllFamilies} from '../Requests/FamilyRequests'
 const FamilyCard = () => {

    const [families, setFamilies] = useState([]);

    useEffect (()=>{
        getAllFamilies().
            then((families) => setFamilies(families.data))
     },[])

    return (
       families.map((family)=>{
           return (
               <div>
                   <h1>family.name</h1>
                   <h2>Members:</h2>
                   family.members.map((member) =><p>member</p>);
               </div>
                   )
       })
    )
}
export default FamilyCard