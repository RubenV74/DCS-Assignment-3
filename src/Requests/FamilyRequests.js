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

const getFamiliesByName = async (name)=> {
   return await axios.get(BASE_URL + '/name/' + name)
       .then((res)=> res.data[0])
       .catch((err)=> console.log(err))
}

const getFamiliesByMember = async (member)=> {
   return await axios.get(BASE_URL + '/member/' + member)
       .then((res)=> res.data[0])
       .catch((err)=> console.log(err))
}

// familyRouter.post("/", familyController.createFamily);
const createFamily = async (family) => {
   return await axios.post(BASE_URL, family)
       .then((res) => res.data)
       .catch((err) => console.log(err));
};

// familyRouter.put("/", familyController.editFamily);
const editFamily = async (id, family) => {
   return await axios.put(BASE_URL,{
      query: {_id: id} ,
      data: family
   } )
       .then((res) => res.data)
       .catch((err) => console.log(err));
};


// familyRouter.delete("/", familyController.deleteFamily);
const deleteFamily = async (id) => {
   return await axios.delete(`${BASE_URL}/${id}`)
       .then((res) => res.data)
       .catch((err) => console.log(err));
};



export {
   getAllFamilies,
   getFamilyById,
   editFamily,
   getFamiliesByName,
   getFamiliesByMember,
   createFamily,
   deleteFamily
};
