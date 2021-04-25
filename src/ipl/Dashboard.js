import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../styles/dashboard.css'
import ipldata from './ipldata';

 function Dashboard1(props) {
  let initailData= { points: [],
_id:"",
userName:"",
match:[] ,
__v: 5
 }
 
    const[Dashboardata,setDashboardata]=useState(initailData);
    const userName=props.userName;
    // console.log(props);
    useEffect(() => {
      
     axios(`https://hidden-inlet-19769.herokuapp.com/Dashboard/${userName}`)
        .then(res=> {return   res.data})
        .then((res)=>{ setDashboardata(res)})
        .catch();
        
    },[]);
    // useEffect(() => {
    //     let fetchTodos = async (state) => {
    //         let resp = await fetch("`http://localhost:4000/Dashboard/${userName}");
    //         let data1 = await resp.data;
    //         console.log(resp.body);
    //         setDashboardata(data1);
    //     };
    //     fetchTodos();
    // }, []);

    // console.log(Dashboardata);
   
    return (
        <div>
             <h1 className="DashboardS"> Dashboard of  user {props.userName}</h1>
             <ul>  

                 <table  className="table">
                  <tr className="tr">  
                       <th className="th" > Match Information</th>
                       <th className="th" >  Points </th>
                  </tr>
                      
                  { Dashboardata!=null && Dashboardata.points.map((data,index)=>{ return  <tr  className="tr">  <td className="td" >   {Dashboardata.match[index]}</td> <td  className="td" >  {data} </td></tr>  })}
                 
                 
                  </table >
                
                  </ul>
             
       <br/>
       <br/>
       <br/>

      
        </div>
    );
}

export default Dashboard1;