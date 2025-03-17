import React from "react";

const ViewUser = ({ user, setViewingUser }) => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4 text-green-800 ">Student Profile</h1>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <div>
      <p className="mb-2 text-3xl font-bold"><strong>Name:</strong> {user.name}</p>
        <p className="mb-2"><strong>Username:</strong> {user.username}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
        <div>
            <p>Address: `{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}`</p>
        </div>
      </div>
      <button
        onClick={() => setViewingUser(null)}
        className="bg-green-800 text-white px-4 py-2 rounded-md mt-4"
      >
        Back
      </button>
    </div>
    </div>
  );
};

export default ViewUser;
