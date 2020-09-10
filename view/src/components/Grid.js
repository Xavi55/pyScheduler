import React from 'react';
import { Link } from 'react-router-dom'

function Grid(match)
{
    let vars= match.match.params

    const options={
        pathname:`/Form`,
        params:{
            year:vars.year,
            month:vars.month,
            day:vars.day,
            time:"SOMETIME"
        }
    }

    return(
        <div id="grid">
            <Link  id="home" to={'/'}>Go back</Link>
            <h2 id="gTitle">{vars.month} {vars.day}</h2>
            <div id="content">
                <h2>8am</h2><div><Link className={"bLink"} to={options}><h2 className="block">Name</h2></Link><Link className={"bLink"} to={'/Form'}><h2 className="block">Name2</h2></Link></div>
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