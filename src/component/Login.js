import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const name = useRef(null); // you get the name in side the " name.current.value " because of useRef return an object you can find inside this.
  const email = useRef(null); // you get the name in side the " email.current.value " because of useRef return an object you can find inside this.
  const password = useRef(null); // you get the name in side the " password.current.value " because of useRef return an object you can find inside this.

  const handleChangeForm = () => {
    setIsSignin(!isSignin);
  };

  const handleSubmitButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignin) {
      // Sign Up Login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/68862554?v=4&size=64",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log("User Successfully Sign in" + user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img
          className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/f69907c1-91ed-48b1-ad82-f02be95c906b/PK-en-20240820-TRIFECTA-perspective_WEB_989d253a-926b-41b7-963c-5aedb99875dd_medium.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/55 w-3/12 py-10 px-10 mx-auto left-0 right-0 my-36 rounded-lg"
      >
        <h1 className="text-white font-bold text-3xl mb-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700 outline-none text-white rounded-[4px]"
            type="text"
            placeholder="Enter Full Name"
          />
        )}

        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700 outline-none text-white rounded-[4px]"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 mt-4 mb-2 w-full bg-gray-700 outline-none text-white rounded-[4px]"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 mb-6 font-semibold">{errorMessage}</p>
        <button
          className=" w-full text-white px-4 py-3 bg-[#E50914] rounded-[4px] mb-4"
          onClick={handleSubmitButton}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="text-white cursor-pointer" onClick={handleChangeForm}>
          {isSignin
            ? "New to Netflix? Sign up now."
            : "Already Sign up. Sign in now."}
        </h3>
      </form>
    </div>
  );
};

export default Login;
