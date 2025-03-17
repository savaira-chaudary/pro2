import React from 'react'
import { users } from "./data"; 
<link href="/src/styles.css" rel="stylesheet"></link>
const images =() =>{
return(
    <div>
    <h1 className='headings'>Images</h1>
    <div className="user-cards">
    {users.map((user) => (
            <div key={user.id} className="card">
                <img src={user.image} alt={user.name} className="card-img" />
              <div className="card-info">
                <h3>{user.name}</h3>
              </div>
            </div>
          ))}
    </div>
    </div>
)
}
export default images