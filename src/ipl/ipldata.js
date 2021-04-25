import React, { useState } from 'react'
import data from '../JSON Files/335995.json';
import points from '../points.json';
import Matchstart from './matchstart';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom'

import '../styles/ipldata.css';

// const importAll = (r) => {
//     return r.keys().map(r);
//   };
  
//   const Datas = importAll(
//     require.context("../JSON FILES", false, /\.json$/)
//   )
  
//   var value1=335982+ parseInt(Math.random()*200);
// console.log(2222)
// console.log(Datas[0]);

function Ipldata(props) {
    
//   console.log(32333232322222222222322);
        //  console.log(props.userName);
    // console.log(props);
    const [selectPlayer, setselectPlayer] = useState([]);
    const [pointSum, setpointSum] = useState(0);
    const [page,setPage]=useState(0);

    let tt = data;
    var team1 = new Set();
    var team2 = new Set();
    var over = 0;


    var i = 0;
    // console.log(points);

    function selected(data, index,teamNo) {
        
        if (selectPlayer.length > 10) {
            alert("Players are grater than 11");

        }
        else if (pointSum > 100) {
            alert("You Points are greater than 100");
        }

        else {
          
            var tempteam=PointTeam1[index];
//  console.log(23232);
          if(teamNo==1)
          tempteam =PointTeam2[index];
          

             let temp={
                 name:data,
                 points:tempteam
             }
                
             let obj = selectPlayer.find(obj => obj.name ==data);
             
             if(obj==undefined)
             {setselectPlayer([...selectPlayer,temp]);
                var pt=pointSum+parseFloat(tempteam);
                
              setpointSum(pt);
             }

           
            //  console.log(obj);
        }


    }

    function deleteSelected(data,points)
    {
        var pt=pointSum-parseFloat(points);
                
        setpointSum(pt);
            let temp=[];
         for(i=0;i<selectPlayer.length;i++)
         { 
              if(selectPlayer[i].name==data)
              {

              }
              else
              temp.push(selectPlayer[i]);

         }

         setselectPlayer(temp);

    }

    function submitform(){
         
        let temp=1-page;
        setPage(temp);

    }


    for (var i = 0; i < tt.innings[0]['1st innings'].deliveries.length; i++) {
        for (var key in tt.innings[0]['1st innings'].deliveries[i]) {

            var x1 = (tt.innings[0]['1st innings'].deliveries[i][key]);

            team1.add(x1.batsman);
            team2.add(x1.bowler);
            team1.add(x1.non_striker);

            //    console.log(x1.wicket);
            if (x1.wicket != undefined) {
                    
                   if(x1.wicket.fielders!=undefined)
                team2.add(x1.wicket.fielders[0]);

            }

            break;
        }

    }

    for (var i = 0; i < tt.innings[1]['2nd innings'].deliveries.length; i++) {
        for (var key in tt.innings[1]['2nd innings'].deliveries[i]) {
            // examples
            // console.log( key);
            var x1 = (tt.innings[1]['2nd innings'].deliveries[i][key]);
            // console.log( x1.batsman);     
            team2.add(x1.batsman);
            team1.add(x1.bowler);
            team2.add(x1.non_striker);

            //    console.log(x1.wicket);
            if (x1.wicket != undefined) {
                if (x1.wicket.kind != "bowled")
                 
               { if(x1.wicket.fielders!=undefined)
                    team1.add(x1.wicket.fielders[0]);
               }
            }

            break;
        }

    }

    const finalTeam1 = Array.from(team1);
    const finalTeam2 = Array.from(team2);


    var PointTeam1 = [], PointTeam2 = [];

    for (let i = 0; i < finalTeam1.length; i++) {
        //  console.log(finalTeam1[i]);
        for (let j = 0; j < points.length; j++) {


            if ((points[j].Players) == (finalTeam1[i])) {
                //    console.log(points[j].Players)
                PointTeam1.push(points[j]['Credit Value']);
                break;

            }
        }

    }

    for (let i = 0; i < finalTeam2.length; i++) {
        for (let j = 0; j < points.length; j++) {


            if (points[j].Players == finalTeam2[i]) {
                PointTeam2[i] = points[j]['Credit Value'];
                break;
            }
        }

    }
    function v(index){return (<button onClick={() => selected(finalTeam2[index],index,1)} > select </button> )}


    function call(){
     return ( 
         
         <div> 
                {window.scrollTo({  
                top: document.documentElement.scrollHeight, 
                // bottom:-10000, 
                behavior: 'smooth'
               
              })}
               <h1 class="head2"> my selected players  </h1>

        <table class="table2">
              <tr> <th class="th2"> <h2 class="head2">  Total points {pointSum}</h2></th></tr> 
            
        {selectPlayer.map((data)=>{return <tr> <td class="td2"> {data.name} {data.points}   <button onClick={()=>deleteSelected(data.name,data.points)}> Delete </button></td> </tr> })} 
      
        </table>
    
        <button   class="button1"onClick={()=>{submitform()}}>   <h1> Click here </h1> to START LIVE MATCH </button> 
   
     <br/> 
     <br/>
     <br/>
     <br/>

    
      </div> )

    }

    // console.log(PointTeam1);

    return (


     <div>

       
         { page==0 && 
        <div>
              <h1 class="DashboardS1"> Welcome {props.userName}</h1>
  
            <h2 class="matchname">  {data.info.teams[0]} vs {data.info.teams[1]}  </h2>
            <h4 class="matchname" >  Venue {data.info.city} at {data.info.venue}</h4>

            <p class="matchname" >  {data.info.toss.winner} will  {data.info.toss.decision}</p>
            <h2 class="matchname"> Select Your Team  </h2>
            
            <table class="table1">
                <tr>
                    <th class="th1"> {data.innings[0]['1st innings'].team}</th>
                    <th class="th1" > Points</th>
                    <th class="th1">Select from Team 1</th>
                    <th class="th1"> {data.innings[1]['2nd innings'].team} </th>
                    <th class="th1">  Points</th>
                    <th class="th1" >Select from Team 2</th>
                   

                </tr>

 
            
                    {finalTeam1.map((data, index) => { return  <tr>  
                        <td class="td1"> {data}   </td>  
                        <td class="td1">{PointTeam1[index]} </td>  
                         <td class="td1">  <button onClick={() => selected(data,index,0)}> select </button>  </td> 
                         <td class="td1"> {  (finalTeam2[index]!=undefined)?finalTeam2[index]:null }   </td>  
                        <td class="td1" >{ (finalTeam2[index]!=undefined)?PointTeam2[index]:null  }   </td>  
                         <td class="td1">     {   
                                     (finalTeam2[index]!=undefined)?v(index):null }
                         </td > 



                         </tr> } ) }
            

                {/* <tr>
                    <th> {data.innings[1]['2nd innings'].team} </th>
                    {finalTeam2.map((data, index) => { return <li> {data}  {PointTeam2[index]}  <button onClick={() => selected(data,index,0)} > select </button> </li> })}
                </tr> */}
                            
                            <br/> 
     <br/>
     <br/>
     <br/>
            </table>
       

            {(selectPlayer.length!=0)?call():null}
     



        </div> }

        {
            page ==1 && <Matchstart myteam={selectPlayer}  data={data}  state={props.state} setState={props.setState}     userName={props.userName}/> 
        }
     

        </div>
    )
}

export default Ipldata;



