import React from 'react'
import { users } from "./data"; 
const Email =() =>{
return(
    <div>
        <h1 className='headings'>Emails</h1>
        <div className="user-cards">
     {users.map((user) => (
             <div key={user.id} className="card">
               <div className="card-info">
                 <h3>{user.name}</h3>
                 <p>Email: {user.email}</p>
               </div>
             </div>
           ))}
    </div>
    </div>
)
}
export default Email