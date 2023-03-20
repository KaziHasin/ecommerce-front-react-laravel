import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PasswordRest() {

  const [FormData, SetFormData] = useState({

    password:"",
    confirmpassword :""

  });

  const [message, setMessage] = useState('');
  const { token } = useParams();

  const handChange = (event)=>{
     
    const id = event.target.id;
    const value = event.target.value;
    SetFormData(values => ({...values, [id]: value}))
    
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmpassword } = FormData;
  
    axios.post(`http://localhost:8000/api/resetpassword/${token}`, {
      
    password,
    confirmpassword
  })
  .then((res) =>{

      console.log(res)


      setMessage(res.data.message);

      SetFormData({

        password:"",
        confirmpassword :""
    
      });;
  })
  .catch((error) => {
      console.error(error);
    });
  };
  
  return (
    <div><form onSubmit={handleSubmit}>
    <label>Enter New Password:
      <input
        type="password" 
        value={FormData.password}
        onChange={handChange} placeholder="Enter New Password" id='password'
      />
    </label>

    <label>Re-enter New Password:
      <input
        type="password" 
        value={FormData.confirmpassword}
        onChange={handChange} placeholder="Enter New Password" id='confirmpassword'
      />
    </label>
    <input type="submit" value="Send"/>
  </form>
  {message && <p>{message}</p>}
  </div>
  )
}
