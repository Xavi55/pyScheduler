import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'

function Grid(match)
{

    console.log(match)
    let vars= match.match.params
    return(
        <div id="grid">
            <Link  id="home" to={'/'}>Home</Link>
            <h2 id="gTitle">{vars.month} {vars.day}</h2>
            <div id="content">
                <h2>8am</h2><h2 className="block">-</h2>
                <h2>9am</h2><h2 className="block">-</h2>
                <h2>10am</h2><h2 className="block">-</h2>
                <h2>11am</h2><h2 className="block">-</h2>
                <h2>12am</h2><h2 className="block">-</h2>
                <h2>1pm</h2><h2 className="block">-</h2>
                <h2>2pm</h2><h2 className="block">-</h2>
                <h2>3pm</h2><h2 className="block">-</h2>
                <h2>4pm</h2><h2 className="block">-</h2>
                <h2>5pm</h2><h2 className="block">-</h2>
                <h2>6pm</h2><h2 className="block">-</h2>
                <h2>7pm</h2><h2 className="block">-</h2>
                <h2>8pm</h2><h2 className="block">-</h2>
            </div>
        </div>
    )
}
export default Grid