import axios from 'axios'


//importation mte3 postcontact
export const postContact = async(values)=>{
    const addingUSer = await axios.post('http://localhost:4000/auth/register',{...values})
}



export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get('http://localhost:4000/auth/uracount',{headers:{Authorization:token}} );
    return data 
}
