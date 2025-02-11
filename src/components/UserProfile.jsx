import React, { useState, useEffect } from "react";
import getUserData from "./UserProfileApi";
import { useSearchParams, useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();
  console.log("user attributes ", useParams());
  console.log("query strings ", searchParams.get("id"));
  //http://localhost:3000/user/dhanunjaya?id=1

  useEffect(() => {
    getUserData().then((data) => setUser(data.results[0]));
  }, []);

  const handleClick = () => {
    getUserData().then((data) => {
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
