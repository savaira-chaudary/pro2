import React from 'react'
import { users } from "./data"; 
<link href="/src/styles.css" rel="stylesheet"></link>
const Contact =() =>{
return(
    <div>
        <h1 className='headings'>Contacts</h1>
        <div className="user-cards">
         {users.map((user) => (
                <div key={user.id} className="card">
                  <div className="card-info">
                    <h3>{user.name}</h3>
                    <p>Contact: {user.contact}</p>
                  </div>
                </div>
              ))}
    </div>
    </div>
)
}
export default Contact