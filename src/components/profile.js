import React from "react";
import { useAuth } from "../context/index";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Profile;
