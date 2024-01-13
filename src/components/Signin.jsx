import React, { useState } from "react";
// import { auth } from "../firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

export default function Signin() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const { signIn } = UserAuth();
const history = useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up
//       history('/feed')
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await signIn(email, password)
    history('/feed')
  } catch (e) {
    console.log(e.message)
  }
};

return (

    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <div className="block w-[400px] rounded-lg bg-white text-black p-6 mb-[200px] lg:mb-[100px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="text-[25px] font-semibold text-blue-400 ml-[34px] mb-[20px]">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}
         className="flex flex-col items-center justify-center">
          {/* <!--Email input--> */}
          <input
            type="email"
            label="Email address"
            value={email}
            required
            className="mb-6 outline-[1px] outline-gray-400 border-[1.5px] p-[10px] w-[80%] rounded"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* <!--Password input--> */}
          <input
            type="password"
            label="Password"
            value={password}
            required
            className="mb-6 outline-[1px] outline-gray-400 border-[1.5px] p-[10px] w-[80%] rounded"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <!--Submit button--> */}
            <button className="bg-blue-400 w-[75%] text-white py-[10px] px-[15px] hover:bg-blue-300 w-[max-content] rounded-full" type="submit">Sign In</button>
          
        </form>
        <p className="text-blue-400 ml-[34px] mt-[15px]">Need an account! <Link className="text-blue-600 underline" to={'/signup'}>Sign Up</Link></p>

      </div>
    </div>
  );
}