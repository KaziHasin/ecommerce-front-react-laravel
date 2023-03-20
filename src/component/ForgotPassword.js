import React,{ useState } from 'react'
import axios from 'axios';


export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

          
        axios.post("http://localhost:8000/api/resetpasswordmail", {
            email: email
            // akashkazi012@gmail.com
        })
        .then((res) =>{

            console.log(res)


            setMessage(res.data.message);

            setEmail("");
        })
        .catch((error) => {
            console.error(error);
          });


      }
    
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Send"/>
    </form>

    {message && <p>{message}</p>}


    </div>
  )
}
