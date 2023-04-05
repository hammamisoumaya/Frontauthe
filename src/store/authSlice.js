import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"authuser",
    initialState:[{
        id:1,
        name:"soumaya",
        email:"soumaya@gmail.com",
        password:"test123456789."
       
    }],
    reducers:{
        setContacts:(state,action)=>{
            return action.payload
        }
    }
})

export const {setContacts} = authSlice.actions
export default authSlice.reducer