import React, {  useState,useEffect }from 'react';
import './App.css';

/*
first view:
the calendar

get curr day and populate the calendar
*/
function App() {
    const [currTime, setTime]=useState(0)
    /*
    useEffect(()=>
    {
        fetch('/time').then(res=>res.json())
        .then(data=>
        {
            let time = `${data.h}:${data.m<10 ? '0'+data.m.toString(): data.m}`
            setTime(time)
        })
    },[])
    */
   const mon=
   {
       0:"Jan",
       1:"Feb",
       2:"Mar",
       3:"Apr",
       4:"May",
       5:"Jun",
       6:"Jul",
       7:"Aug",
       8:"Sept",
       9:"Oct",
       10:"Nov",
       11:"Dec"
   }

   const [state,setState]=useState(
       {
           cYear:"#year",
           cDay:"#day",
           cMonth:"#month",

           
       }
   )

   const getDate=()=>
   {
       const d=new Date()
       const m=d.getMonth()
       const y=d.getFullYear()
       const days = getDays(m+1,y)//fetch days in curr month, 0indexed
       setState({
           cYear:y,
           cDay:days,
           cMonth:mon[m]
       })
    }
    /*prev=>{
   
    ...prev,
    key:val
    }
    */
    
   const getDays=(mon,yr)=>
   {
       return new Date(yr,mon,0).getDate()
   }

   useEffect(()=>
   {
       getDate()
   },[])
   let days=[]
   for(let i=0;i<state.cDay;i++)
   {
       days.push(<h5 
                    key={i+1} 
                    className="d"
                  >{i+1}</h5>)
   }
    return (
        <div className="App">
            <h1 id="cMonth"><span className="arrow">◄</span>&nbsp;&nbsp;&nbsp;{state.cMonth}&nbsp;&nbsp;&nbsp;<span className="arrow">►</span></h1>
            <div id="inner-grid">
                {days/*insert days*/}
            </div>
        </div>
    );
    }

export default App;
