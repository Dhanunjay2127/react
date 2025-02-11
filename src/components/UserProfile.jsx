import React, { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/CountSlice";

function UserProfile() {
  const [searchParams] = useSearchParams();
  console.log("user attributes ", useParams());
  console.log("query strings ", searchParams.get("id"));
  //http://localhost:3000/user/dhanunjaya?id=1
  const dispatch = useDispatch();
  let userData = useSelector((state) => state);
  userData = userData.user.user;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchData());
  };

  return (
    <>
      {userData && (
        <div className="todo" style={{ textAlign: "center" }}>
          <h3>
            {userData.name.title}. {userData.name.first} {userData.name.last}
          </h3>
          <p>{userData.phone}</p>
          <p>
            {userData.location.street.name}, {userData.location.city}, {userData.location.state}
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
