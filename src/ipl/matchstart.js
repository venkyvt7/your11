import React ,{useState}from 'react'
import '../styles/matchstart.css';

function Matchstart(props) {

      

    const [currentBall,setcurrentBall]=useState("");
    const [points1,setPoints1]=useState(null);
    const [match,setmatch]=useState(0);
    const [inning,setInning]=useState("1st Innings");

                        var state=props.sate;
                        var setState=props.setState;         

    var data=props.data;
     
var myteam1=props.myteam;
// console.log(props);

function resolveAfter5Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 300);
    });
  } 

async function LiveDashboard()
    {
      setmatch(1);

        var total=0.0;
        for (var i = 0; i < data.innings[0]['1st innings'].deliveries.length; i++) {

             

            for (var key in data.innings[0]['1st innings'].deliveries[i]) {
                
                setcurrentBall(key);
                // console.log(key);

                var x1 = (data.innings[0]['1st innings'].deliveries[i][key])

            //  console.log(x1);
             if(x1.runs!=undefined)
             {
                   
                    

                     var obj = myteam1.find(obj => obj.name ==x1.batsman);
                     if(obj!=undefined)
                     {
                        
                         total=total+x1.runs.batsman;

                         let temp111=total;
                         setPoints1(temp111);
                     }


             }
            
             if(x1.wicket!=undefined)
             { 
                console.log(x1)
                var obj = myteam1.find(obj => obj.name ==x1.bowler);
                if(obj!=undefined)
                {
                   let kind =(x1.wicket.kind);
                   let m=1;
                   
                   if(kind=="caught")
                   total=total+(25*m);

                   else if(kind=="bowled")
                   total=total+(33*m);

                   else if(kind=="run out")
                   total=total+(25*m);

                   else if(kind=="lbw")
                   total=total+(33*m);

                   else if(kind=="stumped")
                   total=total+(25*m);
                   else if(kind=="caught and bowled")
                   total=total+(40*m);

                   else if(kind=="hit wicket")
                   total=total+(25*m);

                   else
                   total=total;

                   let temp111=total;

                     setPoints1(temp111);

                }



             }

                const result = await resolveAfter5Seconds();
  
          
                
    
                break;
            }
    
        }

      ///2nd innings 
      setInning("2nd innings ");
      for (var i = 0; i < data.innings[1]['2nd innings'].deliveries.length; i++) {

             

            for (var key in data.innings[1]['2nd innings'].deliveries[i]) {
                
                setcurrentBall(key);
                // console.log(key);

                var x1 = (data.innings[1]['2nd innings'].deliveries[i][key])

            //  console.log(x1);
             if(x1.runs!=undefined)
             {
                   
                    

                     var obj = myteam1.find(obj => obj.name ==x1.batsman);
                     if(obj!=undefined)
                     {
                        
                         total=total+x1.runs.batsman;

                         let temp111=total;
                         setPoints1(temp111);
                     }


             }
            
             if(x1.wicket!=undefined)
             { 
                // console.log(x1)
                var obj = myteam1.find(obj => obj.name ==x1.bowler);
                if(obj!=undefined)
                {
                   let kind =(x1.wicket.kind);
                   let m=1;
                   
                   if(kind=="caught")
                   total=total+(25*m);

                   else if(kind=="bowled")
                   total=total+(33*m);

                   else if(kind=="run out")
                   total=total+(25*m);

                   else if(kind=="lbw")
                   total=total+(33*m);

                   else if(kind=="stumped")
                   total=total+(25*m);
                   else if(kind=="caught and bowled")
                   total=total+(40*m);

                   else if(kind=="hit wicket")
                   total=total+(25*m);

                   else
                   total=total;

                   let temp111=total;

                     setPoints1(temp111);

                }



             }

                const result = await resolveAfter5Seconds();
  
          
                
    
                break;
            }
    
            
        }
        setInning("MATCH FINISHED");
    
        // console.log(total);
        
        
    }
const match1=`${data.info.teams[0]} vs ${data.info.teams[1]}`;
 const userName1=props.userName;
 console.log(props);
 
 function submitthis(e){


    e.preventDefault();
    console.log(2332332);

  console.log(userName1);
    fetch(`https://hidden-inlet-19769.herokuapp.com/Dash`, {
         method:'POST',
         headers:{
            "Content-Type":"application/json"
         }
              ,
         body:JSON.stringify({
        userName1,
        points1,
        match1,

 
         })
         
 
    }).then().
    catch()

    
    setState(0)

 }

  function live(){

     

    return (<div> 

         <h1 className="head3"> CURRENT INNING {inning}</h1>
         <h1 className="head3" > CURRENT BALL {currentBall}</h1>
        
        <form onSubmit={submitthis}>
             <button className="button3"  > submit my match </button>
             </form>
       
     
          
      
       </div>)
  }

   function butt(){


    return (<div> 

<button  className="button3" onClick={LiveDashboard} > start the match </button> 

    </div>)
   }

    
    return (
        <div>
{/*             
           <h1>  Dashboard  </h1>  */}
           <table class="table3">
          <tr> <th class="th3"> my team </th>
        <th class="th3" > player points </th>
                </tr> 

           { myteam1.map((data)=>{return  <tr> <td class="th3" >  {data.name} </td>   <td class="th3"> {data.points} </td> </tr>} ) }
           </table>
           <h1 className="head3" > LIVE POINTS OF MY TEAM {points1}  </h1>
         
          {match==0 && butt()}
          {match==1 &&live()}
          
           </div>
        

        
    )
}

export default Matchstart;
