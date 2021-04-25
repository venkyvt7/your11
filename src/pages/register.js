import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../styles/register.css'
function Register() {



  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const[ userExits,setuserExits]=useState(1);

  function register(e)
  {
       e.preventDefault();
   fetch(`https://hidden-inlet-19769.herokuapp.com/register`, {
        method:'POST',
        headers:{
           "Content-Type":"application/json"
        }
             ,
        body:JSON.stringify({
       userName,
       password,

        })
        

   }).then((e)=>{
          if(e.status==500)
         {
              alert("user already exits");
         } 

         else
         {
                 alert("registration succesfull");

         }
     
     }
   ).
   catch()

  }


    return (

      <div> 
          <div>
          {/* <h1>   Welcome To YOur11.com </h1>  */}

          <nav class="navv"> 
        < Link class="linkw" to="/login">  Login   </Link>
        <Link class="linkw" to="/register"> Register </Link>
        </nav> 
        </div> 
        { userExits &&<div>
           
           
               <h1 class="login112">    WELCOME NEW USER <br/>  PLEASE REGISTER  HERE AND THEN LOGIN  </h1> 

      
          <form  class="form2"   onSubmit={register}>  
             <br/>
             <input  class="det2"  placeholder="username" onChange={(e)=>{setUserName(e.target.value)}}/>
             <br/>
             <input  class="det2" type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
                   <br/>
                <button  class="det2" id="det212" type="submit" > Register</button>

                
           <br/>
          </form>

        </div>}
        </div>
    )
}

export default Register
