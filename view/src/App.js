/*
first view:
the calendar

get curr day and populate the calendar
*/
import React, {  useState,useEffect }from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

//custom components
import Day from './components/Day'
import Grid from './components/Grid'

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
           trav:0,
           today:false
       }
   )

   const handleLeftArrow=()=>
   {
       if(state.trav<-3)
       {
           console.log("Can't go back any further.")
       }
       else
       {
           setState(prev=>
            {
                return{
                    ...prev,
                    trav:state.trav-1
                }
            })
       }
       console.log(state.trav)
   }
   const handleRightArrow=()=>
   {
       console.log('larrow')   
   }

   const getDate=()=>
   {
       const d=new Date()
       const m=d.getMonth()
       const y=d.getFullYear()
       const today=d.getDate()
       const days = getDays(m+1,y)//fetch days in curr month, 0indexed
       setState(prev=>
        {
            return{
                ...prev,
               cYear:y,
               cDay:days,
               cMonth:m,
               today:today
            }
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
                today={i+1===state.today?true:null}
                key={i+1}
                day={i+1}
                month={mon[state.cMonth]}
                year={state.cYear}
            />
        )
        /*<h5 
                        key={i+1} 
                        className="d"
                    >{i+1}</h5>)*/
    }
    
    return (
        <Router>
            <Route
                path={'/'}
                exact={true}
            >
                <div className="App">
                    <h1 id="cMonth"><span className="arrow" onClick={handleLeftArrow}>◄</span>&nbsp;&nbsp;&nbsp;{mon[state.cMonth]}&nbsp;&nbsp;&nbsp;<span className="arrow" id="rarrow">►</span></h1>
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
            </Route>
            <Route
                path={'/:year/:month/:day'}
                exact={true}
                render={(props) => (
                    <Grid {...props} day={state.cDay} />
                  )}
            />
        </Router>        
    );
}
export default App;
