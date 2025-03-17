import React from 'react'
import { NavLink } from 'react-router-dom'
<link href="/src/styles.css" rel="stylesheet"></link>
const navbar =() =>{
return(
    <div>
        <nav>
           <NavLink className={(e)=> {return e.isActive? "red" : ""}} to="/"><li>Home</li></NavLink>
           <NavLink className={(e)=> {return e.isActive? "red" : ""}}to="/email"><li>Email</li></NavLink>
           <NavLink className={(e)=> {return e.isActive? "red" : ""}}to="/Contact"><li>Contact</li></NavLink>
           <NavLink className={(e)=> {return e.isActive? "red" : ""}}to="/names"><li>Names</li></NavLink>
           <NavLink className={(e)=> {return e.isActive? "red" : ""}}to="/images"><li>Images</li></NavLink>
        </nav>
    </div>
)
}
export default navbar