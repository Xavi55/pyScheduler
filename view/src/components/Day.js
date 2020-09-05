import React, { useState,useEffect } from 'react';

function Day(props)
{
    useEffect(()=>
    {
        console.log('y')
    },[])
    return(
        <div className="d">
            {props.day}
        </div>
    )
}
export default Day