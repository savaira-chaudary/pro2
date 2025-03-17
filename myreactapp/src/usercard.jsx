
import React from "react";
import { users } from "./data"; 
<link href="/src/styles.css" rel="stylesheet"></link>

const UserCard = () => {
  return (
    <div className="user-cards">
      {users.map((user) => (
        <div key={user.id} className="card">
          <img src={user.image} alt={user.name} className="card-img" />
          <div className="card-info">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Contact: {user.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;