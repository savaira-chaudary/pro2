import './App.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./home.jsx";
import EditUser from "./update.jsx";
import ViewUser from "./view.jsx"; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  const deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  const startEditing = (user) => {
    setEditingUser(user);
    setViewingUser(null); 
  };

  const startViewing = (user) => {
    setViewingUser(user);
    setEditingUser(null); 
  };

  const saveUser = (updatedUser) => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        updatedUser
      )
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        );
        setEditingUser(null);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="container mx-auto p-4">
      {viewingUser ? (
        <ViewUser user={viewingUser} setViewingUser={setViewingUser} />
      ) : editingUser ? (
        <EditUser user={editingUser} saveUser={saveUser} />
      ) : (
        <UserList
          users={users}
          deleteUser={deleteUser}
          startEditing={startEditing}
          startViewing={startViewing} 
        />
      )}
    </div>
  );
};

export default App;
