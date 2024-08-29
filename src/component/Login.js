import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState()
 
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)
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
        <h1 className="text-white font-bold text-3xl mb-4">Sign In</h1>
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
          Sign In
        </button>
        <h3 className="text-white">New to Netflix? Sign up now.</h3>
      </form>
    </div>
  );
};

export default Login;
