import React, { useState } from 'react'

import Ipl from './ipldata';
import Dashboard from './Dashboard';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';


import "../styles/home.css";





function Home(props) {

    const [state, setState] = useState(0);

    var userName = props.userName;
    // console.log(props);

    return (
        <span>
          
 
           

            <ul className="Nav">

                
                    <Link className="link"  onClick={() => { setState(0) }} >ABOUT GAME</Link>
               
               
                    <Link className="link" onClick={() => { setState(1) }} >MY DASHBOARD</Link>
               
                    <Link className="link"  onClick={() => { setState(2) }} > PLAY LIVE MATCH </Link>
                

            </ul>
       <div> </div>
            { (state == 2) && <Ipl state={state} setState={setState} userName={userName} set />}
            { (state == 1) && <Dashboard userName={userName} />}
        </span>
    )
}

export default Home;