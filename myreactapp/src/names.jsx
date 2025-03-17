import React from 'react'
import { users } from "./data"; 
<link href="/src/styles.css" rel="stylesheet"></link>
const names =() =>{
return(
    <div>
    <h1 className='headings'>Names</h1>
    <div className="user-cards">
    {users.map((user) => (
            <div key={user.id} className="card">
              <div className="card-info">
                <h3>{user.name}</h3>
              </div>
            </div>
          ))}
    </div>
    </div>
)
}
export default names