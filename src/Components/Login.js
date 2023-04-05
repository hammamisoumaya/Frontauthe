import React ,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate()

const [password,setPassword]=useState('')
const [email,setEmail]=useState('')



const handelLogin=async(values)=>{
try{
const res = await axios.post('http://localhost:4000/auth/login',values)
await localStorage.setItem('token',res.data.token)
navigate('/app/Private')
}catch(err){
  
console.log(err)
}
}
  return (
    <div className="login-form">
  <h2>Connexion Admin</h2>
  <form>
    <div className="form-group">
      <label htmlFor="username">Email:</label>
      <input type="text" placeholder="Email address "  value={email}  
            
            onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="password">Mot de passe:</label>
      <input type="password" placeholder="Password" value={password}  
            
            onChange={(e)=>setPassword(e.target.value)} />
    </div>
    <button className="btn-new" onClick={()=>handelLogin({email,password})} >login  Account</button>
  </form>
</div>
  )
}

export default Login