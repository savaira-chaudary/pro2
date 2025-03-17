import React from "react";

const UserList = ({ users, deleteUser, startEditing, startViewing }) => {
  return (
    <div>
        <h1 className="text-4xl font-bold mb-4  text-green-800">Student dashboard</h1>
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left text-1xl border-r">#</th>
            <th className="px-4 py-2 text-left text-blue-900 border-r">Name</th>
            <th className="px-4 py-2 text-left text-blue-600 border-r">Username</th>
            <th className="px-4 py-2 text-left text-green-700 border-r">Email</th>
            <th className="px-4 py-2 text-left text-yellow-500 border-r">Phone</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b odd:bg-blue-100 even:bg-green-100 ">
              <td className="px-4 py-2 border-r ">{user.id}</td>
              <td className="px-4 py-2 border-r">{user.name}</td>
              <td className="px-4 py-2 border-r">{user.username}</td>
              <td className="px-4 py-2 border-r">{user.email}</td>
              <td className="px-4 py-2 border-r">{user.phone}</td>
              <td className="px-4 py-2 space-x-2">
              <button
                  onClick={() => startEditing(user)}
                  className="bg-blue-700 text-white px-4 py-2 rounded-md "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md "
                >
                  Delete
                </button>
                <button
                  onClick={() => startViewing(user)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserList;
