import  axios  from 'axios';

const BASE_URL = process.env.REACT_APP_DEV_SERVER

const getAllFamilies = async ()=>{
   return  await axios.get(BASE_URL)
       .then((res)=> res.data)
       .catch((err)=> console.log(err))
}

const getFamilyById = async (id)=> {
   return await axios.get(BASE_URL + '/id/' + id)
       .then((res)=> res.data[0])
       .catch((err)=> console.log(err))
}



export {
   getAllFamilies,
   getFamilyById};
