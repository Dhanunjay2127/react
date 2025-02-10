import React, { useState, useEffect } from "react";
import getUserData from "./UserProfileApi";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData().then((data) => setUser(data.results[0]));
  }, []);

  const handleClick = () => {
    getUserData().then((data) => {
      console.log(data.results[0]);
      setUser(data.results[0]);
    });
  };

  return (
    <>
      {user && (
        <div className="todo" style={{ textAlign: "center" }}>
          <h3>
            {user.name.title}. {user.name.first} {user.name.last}
          </h3>
          <p>{user.phone}</p>
          <p>
            {user.location.street.name}, {user.location.city}, {user.location.state}
          </p>
          <button onClick={handleClick} className="next-user">
            Next User
          </button>
        </div>
      )}
    </>
  );
}

export default UserProfile;
