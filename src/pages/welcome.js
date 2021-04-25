import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/welcome.css'
import iplimage from '../images/ipl.png';
 function Welcome() {
    return (
        <div>
      

          <nav class="navv"> 
        < Link class="linkw" to="/login">  Login   </Link>
        <Link class="linkw" to="/register"> Register </Link>
      

        </nav> 
        <h1 class="welcometo">   Welcome To YOur11.com </h1> 
        <div class="imgipl" >  <img   src={iplimage} alt="this is car image" /></div> 
        </div>
    )
}
export default Welcome;