import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={user?.photoUrl} alt="profile" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {user?.firstName} {user?.lastName}
        </h2>

        <p>{user?.emailId}</p>
        <p>Age: {user?.age}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;