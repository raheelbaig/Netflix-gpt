import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignoutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between items-center w-full absolute px-10 py-6 bg-gradient-to-b from-black z-10">
      <div>
        <img
          className="w-48 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex justify-between items-center gap-x-2">
          <img
            className="w-10 h-10"
            src={user.photoURL}
            alt="user Icon"
          />
          <button
            className="text-white font-semibold text-lg"
            onClick={handleSignoutUser}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
