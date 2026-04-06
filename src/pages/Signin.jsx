import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import AppleIcon from "@mui/icons-material/Apple";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@mui/material/Checkbox";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = UserAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);

      toast.success("Successfully Signed in!", {
        position: "top-center",
        autoClose: 1000,
        onClose: () => {
          history("/feed");
        },
      });
    } catch (e) {
      toast.error("Error while signing in!", {
        position: "top-center",
        autoClose: 1000,
      });
      console.log(e.message);
    }
  };

  return (
    <div className="w-[100%] flex items-center justify-center">
      <div>
        <div className="block w-[330px] py-4 px-6 rounded-lg bg-white text-black shadow-lg shadow-black/20">
          <h1 className="text-3xl font-semibold text-black mb-[25px]">
            Sign In
          </h1>
          <div className="space-y-4">
            <button
              className="flex items-center justify-center text-black py-[10px] border border-black w-full font-semibold rounded-full"
              type="submit"
            >
              <GoogleIcon className="mr-2" style={{ color: "#4285F4" }} />
              Continue with Google
            </button>
            <button
              className="flex items-center justify-center text-black py-[10px] border border-black w-full font-semibold rounded-full"
              type="submit"
            >
              <MicrosoftIcon className="mr-2" style={{ color: "#F25022" }} />
              Sign in with MicroSoft
            </button>
            <button
              className="flex items-center justify-center text-black py-[10px] border border-black w-full font-semibold rounded-full"
              type="submit"
            >
              <AppleIcon className="mr-2" />
              Sign in with Apple
            </button>
          </div>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-3 text-gray-600">or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* <!--Email input--> */}
            <input
              type="email"
              label="Email address"
              value={email}
              required
              className="mb-6 outline-[1px] text-lg outline-sky-700 border border-black p-[10px] w-full rounded"
              placeholder="Email or Phone"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* <!--Password input--> */}
            <input
              type="password"
              label="Password"
              value={password}
              required
              className="mb-2 outline-[1px] text-lg outline-sky-700 border border-black p-[10px] w-full rounded"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-sky-700 font-semibold">Forgot password?</p>
            <div className="flex items-center mt-3 mb-2">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p>Keep me logged in</p>
            </div>

            {/* <!--Submit button--> */}
            <button
              className="bg-sky-700 text-white py-[17px] hover:bg-sky-900 w-full font-semibold rounded-full"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="text-black mt-[35px] text-center mb-7">
          New to LinkedIn?{" "}
          <Link className="text-sky-700 underline font-semibold" to={"/signup"}>
            Join now
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
