import { Redirect } from 'react-router-dom'
import React, {  useState,useEffect }from 'react';

function Form(props)
{
    const [state,setState] =useState(
        {
            name:null,
            phNum:null,
            email:null,
            text:null,
            day:null,
            month:null,
            year:null,
            color:null,

            redirect:false
        }
    )

    useEffect(()=>
    {
        console.log('form',props)
    },[])

    const handleChange=(e)=>
    {
        let x=e.target.name
        let value = e.target.value
        setState(prev=>
            {
                return{
                    ...prev,
                    [x]:value
                }
            })
        console.log(state)
    }

    const handleSumbit=(e)=>
    {
        e.preventDefault()
        //change state
        //start redirect

    }
    if(state.redirect)
    {
        return(
            <Redirect to={'/'}/>
        )
    }
    return(
        <form id="form">
            <label>Name:</label>
            <input id="name" name="name" required type="text" autoFocus onChange={(e)=>handleChange(e)} />
            <br/>
            <label>Email address:</label>
            <input name="email" type="email" required onChange={(e)=>handleChange(e)}/>
            <br/>
            <label>Phone #:</label>
            <input name="phNum"  type="tel" required onChange={(e)=>handleChange(e)}/>
            <br/>
            <label>Color:</label>
            <select name="color" onChange={(e)=>handleChange(e)}>
                <option id="blue">b</option>
                <option id="orange">o</option>
                <option id="green">g</option>
                <option id="yellow">y</option>
            </select>
            <br/>
            <textarea
                placeholder="Your message here!"
                rows={6}
                cols={25}
                maxLength={125}
                onChange={(e)=>handleChange(e)}
                required
            />
            <br/>
            <input type="submit" onClick={(e)=>handleSumbit(e)}/>
        </form>
    )
}
export default Form