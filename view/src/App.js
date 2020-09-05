/*
first view:
the calendar

get curr day and populate the calendar
*/
import React, {  useState,useEffect }from 'react';
import './App.css';

//custom components
import Day from './components/Day'

function App()
{
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
           cMonth:m
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
    //how many days does the start of the month overlap?
    const skip = new Date(2020,state.cMonth,1).getDay()
    for(let i=0;i<skip;i++)
    {
        days.push(<div className="false">.</div>)
    }
    for(let i=0;i<state.cDay;i++)
    {
        days.push(
                <Day
                    key={i+1}
                    day={i+1}
                />
        )
        /*<h5 
                        key={i+1} 
                        className="d"
                    >{i+1}</h5>)*/
    }
    
    return (
        <div className="App">
            <h1 id="cMonth"><span className="arrow">◄</span>&nbsp;&nbsp;&nbsp;{mon[state.cMonth]}&nbsp;&nbsp;&nbsp;<span className="arrow">►</span></h1>
            <div id="inner-grid">
                <h4>Sun</h4>
                <h4>Mon</h4>
                <h4>Tue</h4>
                <h4>Wed</h4>
                <h4>Thur</h4>
                <h4>Fri</h4>
                <h4>Sat</h4>
                {days/*insert days*/}
            </div>
        </div>
    );
}
export default App;
