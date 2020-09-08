import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'

function Day(props)
{

    return(
        <div className="d" id={props.today?'today':null}>
            <Link to={`/${props.year}/${props.month}/${props.day}`}>
                {props.day}
            </Link>
        </div>
    )
}
export default Day