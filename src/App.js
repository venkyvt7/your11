import React from 'react';
import logo from './logo.svg';

import './App.css';
import  IPL from './ipl/ipldata.js'
import Welcome from './pages/welcome.js';
import Register from './pages/register.js';
import Dashboard from './ipl/Dashboard.js'
import Login from './pages/login';
import {BrowserRouter as Router,Link,Route,Switch,} from 'react-router-dom';

// import {useSelector,useDispatch } from 'react-redux';
function App() {
     
  
  // const count =useSelector((state)=>state.counter.count)


  return (
    <div >
       <Router> 
     
      <Switch>  

           
            <Route exact path="/" >  <Welcome/> </Route>
            <Route exact path="/register" >  <Register/> </Route>
            <Route exact path="/login" >  <Login/> </Route>
            <Route exact path="/dashboard" >  <Dashboard/> </Route>
      </Switch>

      </Router> 
    </div>
  );
}

export default App;
