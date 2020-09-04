import React, {  useState,useEffect }from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [currTime, setTime]=useState(0)
    useEffect(()=>
    {
        fetch('/time').then(res=>res.json())
        .then(data=>
        {
            let time = `${data.h}:${data.m<10 ? '0'+data.m.toString(): data.m}`
            setTime(time)
        })
    },[])
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <br/>
            Current time is {currTime}
        </header>
    </div>
    );
    }

export default App;
