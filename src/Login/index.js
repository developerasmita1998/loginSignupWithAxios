import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { handleError } from "../utils/commonFun";

const Login=()=>{
    const [error,setError] = useState('')
    const [data,setData] = useState([])
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    const navigate = useNavigate();

    const validation = ()=>{
      
          setError('')

          if(!email){
            setError('please enter valid email')
             return false;
          }

          if(!password){
            setError('please enter valid password')

            return false;
         }
         return true;


         } 


        const handleLogin = () =>{
         const isValid = validation();
         if(isValid){
           loginApiCall();
         }
          };
       
       const loginApiCall = async()=>{
         try{
            let data = {
               "email":email,
               "password":password
             };
             let url="http://localhost:4000/login";

             let option = {
                 method:"POST",
                 url:url,
                 headers:{
                     Accept:"application/json",
                     "Content-Type":"application/json",
                  },
                  data: data,
 
             }

      const response = await axios(option);
      navigate("/signup")
      
      } catch (error) {
         // Check if the error is a server response error
       let err =  handleError(error)
       setError(err)

       }
     };





       

    return(
    <div>

    <div>
       <input type="email"
       value={email}
       placeholder="please enter valid email"
       onChange={(e)=>setEmail(e.target.value)}

       /> 
    </div>

      
       <div>
       <input type="password"
       value={password}
       placeholder="please enter valid password"
       onChange={(e)=>setPassword(e.target.value)}
       /> 
    </div>
    <div>
      <button onClick={handleLogin}>Login</button>  
    </div>
    {error&& <label>{error}</label>}
    </div>


 )

}
export default Login;