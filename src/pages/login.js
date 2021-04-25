import React, {useState} from 'react'
import Ipl from '../ipl/ipldata'
import Home from '../ipl/home'
import {Link} from 'react-router-dom';
import '../styles/login.css'
function Register() {



  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const[ userExits,setuserExits]=useState(1);
  const[logins,setLogins]=useState(1);


  function login(e)
  {
       e.preventDefault();
   fetch(`https://hidden-inlet-19769.herokuapp.com/login`, {
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
          if(e.status==403)
         {
              alert("invalid");
         } 

         else
         {
             setLogins(0);
                 alert("loginsuccesfull");

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
        < Link class="linkw" to="/login">         {(logins)?(<span>LOGIN</span>): (<span>YOU ARE Logined in {userName} </span>)}       </Link>
        <Link class="linkw" to="/register"> Register </Link>
        </nav> 
        </div>
               
        {  logins==1 && userExits==1 &&<div>
            <h1 class="login11">   Login </h1>

      
          <form  class="form1" onSubmit={login}>  
             
             <input class="det" placeholder="username" onChange={(e)=>{setUserName(e.target.value)}}/>
             <br/>
             <input class="det"  type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
                <br/>
                <button class="det" id="det1"  type="submit" > LOGIN </button>

                
           <br/>
          </form>

        </div>} 

        {
             logins==0 && <Home userName={userName}/>

        }
        </div>
    )
}

export default Register
