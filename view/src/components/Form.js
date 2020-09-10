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
            color:"b",

            redirect:false
        }
    )

    useEffect(()=>
    {
        let params = props.location.params

        if (params !== undefined )
        {
            setState(prev=>
                {
                    return{
                        ...prev,
                        year:params.year,
                        month:params.month,
                        day:params.day,
                    }
                })
        }
        //console.log('form',props)
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
    }

    const handleSumbit=(e)=>
    {
        e.preventDefault()
        console.log(state)

        fetch('/')
        .then(res=>console.log(res))
        .catch(err=>{
            console.log(err)
        })
        //start redirect
        setState(prev=>
        {
          return{
              ...prev,
              redirect:true
          }  
        })

    }
    if(state.redirect || props.location.params ===undefined)
    {
        return(
            <Redirect to={'/'}/>
        )
    }
    return(
        <form id="form" onSubmit={(e)=>handleSumbit(e)}>
            <label>Name:</label>
            <input id="name" maxLength="20" name="name" required type="text" autoFocus onChange={(e)=>handleChange(e)} />
            <br/>
            <label>Email address:</label>
            <input name="email" type="email" required onChange={(e)=>handleChange(e)}/>
            <br/>
            <label>Phone #:</label>
            <input name="phNum" maxLength="10" type="tel" required onChange={(e)=>handleChange(e)}/>
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
                name="text"
                placeholder="Your message here!"
                rows={6}
                cols={25}
                maxLength={125}
                onChange={(e)=>handleChange(e)}
            />
            <br/>
            <input type="submit"/>
        </form>
    )
}
export default Form