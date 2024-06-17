import  axios  from 'axios';


const BASE_URL = 'http://localhost:3000/api/families'
const getAllFamilies = async ()=>{
   return await axios.get(BASE_URL)
}


export {getAllFamilies};