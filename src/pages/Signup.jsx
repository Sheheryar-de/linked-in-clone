import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = `${firstName} ${lastName}`;
      await createUser(name, email, password);
      toast.success("Successfully Signed Up!", {
        position: "top-center",
        autoClose: 1000,
        onClose: () => {
          navigate("/feed");
        },
      });
    } catch (e) {
      toast.error("Error while signing you up!", {
        position: "top-center",
        autoClose: 1000,
      });
      console.log(e.message);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl">Join LinkedIn now — it’s free!</h1>
      </div>
      <div className="h-auto w-[100%] flex items-top justify-center my-8">
        <div className="block rounded-lg w-[400px] bg-white text-black px-8 py-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            {/* <!--Email input--> */}
            <div className="w-full">
              <h4 className="text-sm font-semibold">Email</h4>
              <input
                type="email"
                label="Email address"
                value={email}
                required
                className="mb-6 w-full outline-[1px] outline-black border-[2px] border-black rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* <!--Password input--> */}
            <div className="w-full">
              <h4 className="text-sm font-semibold">Password</h4>
              <input
                type="password"
                label="Password"
                value={password}
                required
                className="mb-6 w-full outline-[1px] outline-black border-[2px] border-black rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="text-xs text-gray-600 text-center mb-4">
              By clicking Agree & Join or Continue, you agree to the LinkedIn
              <Link to="#" className="text-[#0a66c2] font-semibold">
                {" "}
                User Agreement
              </Link>
              ,{" "}
              <Link to="#" className="text-[#0a66c2] font-semibold">
                Privacy Policy
              </Link>
              , and{" "}
              <Link to="#" className="text-[#0a66c2] font-semibold">
                Cookie Policy
              </Link>
              .
            </p>

            {/* <!--Submit button--> */}
            <button
              className="bg-[#0a66c2] text-white py-[10px] hover:bg-blue-300 w-full rounded-full"
              type="submit"
            >
              Agree & Join
            </button>
          </form>
          <div className="my-6 flex items-center">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-3 text-gray-600">or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

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
          </div>

          <p className="mt-[18px] text-center">
            Already on LinkedIn?{" "}
            <Link className="text-blue-600 font-semibold" to={"/signin"}>
              Sign In
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
