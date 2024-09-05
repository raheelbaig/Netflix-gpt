import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/slices/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignoutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(deleteUser());
        navigate("/")
      }
    });

    // cleanUp function for unmount state 
    return () => unSubscribe()
  }, []);

  return (
    <div className="flex justify-between items-center w-full absolute px-10 py-6 bg-gradient-to-b from-black z-10">
      <div>
        <img
          className="w-48 "
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex justify-between items-center gap-x-2">
          <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user Icon" />
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
