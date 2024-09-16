import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/slices/userSlice";
import { LANGUAGE_SUPPORTED, LOGO } from "../utils/constants";
import { handleToggelInput } from "../redux/slices/gptSlice";
import { changeLanguage } from "../redux/slices/configSlice";

const Header = () => {
  const showGptSearchBar = useSelector((store) => store.gpt.toggleInput);
  const langKey = useSelector((store) => store.config.language)
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(deleteUser());
        navigate("/");
      }
    });

    // cleanUp function for unmount state
    return () => unSubscribe();
  }, []);

  const handleToggleShowInputField = () => {
    dispatch(handleToggelInput());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between items-center w-full absolute px-10 py-6 bg-gradient-to-b from-black z-10 top-0">
      <div>
        <img className="w-48 " src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex justify-between items-center gap-x-3">
          <button
            className="bg-indigo-700 px-6 py-2 text-white font-medium rounded-lg mr-3 text-lg"
            onClick={handleToggleShowInputField}
          >
            {!showGptSearchBar ? "GPT Search" : "Home Page"}
          </button>
          {showGptSearchBar && (
            <select
              onChange={handleLanguageChange}
              className="px-4 py-2.5  outline-none rounded-lg text-white bg-[#E50914]"
            >
              {LANGUAGE_SUPPORTED.map((lang) => (
                <option
                  selected={lang.identifier === langKey && lang.name}
                  value={lang.identifier}
                  key={lang.identifier}
                  className=""
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <div className="flex gap-x-1">
            <img
              className="w-10 h-10 rounded-full"
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
        </div>
      )}
    </div>
  );
};

export default Header;
