import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError } from "../utils/commonFun";
const Signup = ()=>{
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [optionSelect,setOptionSelect] = useState('')
    const  [dob,setDob] = useState('')
    const [address,setAddress] = useState('')
    const [zipCode,setZipCode] = useState('')

    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setOptionSelect(event.target.value);
      };

  const validation = ()=>{
    setError('')

     if(!firstName){
        setError('please enter first name')
        return false;
     }

     if(!lastName){
        setError('please enter last name')
        return false;
     }

     if(!mobile){
        setError('please enter last name')
        return false;
     }

     if(!email){
        setError('please enter valid email')
        return false;
     }

     if(!password){
        setError('please enter strong password')
        return false;
     }
     if(!optionSelect){
        setError('please select gender')
        return false;
     }

     if(!dob){
        setError('please choose date')
        return false;
     }
     if(!address){
        setError('please enter address')
        return false;
     }

     if(!zipCode){
        setError('please enter zipCode')
        return false;
     }
    return true;
    }

    const handleSignup = () => {
        const isValid = validation();
        if (isValid) {
           registerApiCall();
        }
      };
    
    const registerApiCall = async()=>{
        try{
          let data={
                "firstName": firstName,
                "lastName": lastName,
                "mobile": mobile,
                "email": email,
                "password":password ,
                "gender":optionSelect ,
                "dateOfBirth": dob,
                "address": address,
                "zipcode":zipCode 
              }
              

            let url="http://localhost:4000/register";

            let option = {
                url:url,
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                 },
              data:data
            }
            const response = await axios(option);            
            setData(response.data.data)
            navigate("/");


}
        catch(error){
            let err = handleError(error);
            setError(err)
        }

    }
return(
<div  className="body">
    <div>
    <input 
    type="text"
    placeholder="enter first name"
    value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}
    />
</div>

<div>
<input 
    type="text"
    placeholder="enter last name"
    value={lastName}
    onChange={(e)=>setLastName(e.target.value)}
    />
</div>

<div>
<input 
    type="number"
    placeholder="enter mobile number"
    value={mobile}
    onChange={(e)=>setMobile(e.target.value)} 
    />
</div>

<div>
<input 
    type="email"
    placeholder="enter valid email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)} 
    />
</div>

<div>
<input 
    type="password"
    placeholder="enter valid password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)} 
    />
</div>

<div>
    Gender
    <label>
    <input
            type="radio"
            value="male"
            checked={optionSelect === 'male'}
            onChange={handleOptionChange}
          />
    </label>
    male
</div>

<div>
    <label>
    <input
            type="radio"
            value="female"
            checked={optionSelect === 'female'}
            onChange={handleOptionChange}
          />

    </label>
    female
</div>

<div>
    <input 
     type="date"
     value={dob}
     onChange={(e)=>setDob(e.target.value)}


    />
</div>

<div>
    <input 
     type="text"
     value={address}
     onChange={(e)=>setAddress(e.target.value)}
 />
</div>

<div>
    <input 
     type="number"
     value={zipCode}
     onChange={(e)=>setZipCode(e.target.value)}
 />
</div>

<div>
    <button onClick={handleSignup}>Signup</button>
</div>
 {error&&<label>{error}</label>}
</div>
)
} 
export default Signup;
