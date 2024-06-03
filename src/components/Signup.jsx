import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <div className="block w-[400px] rounded-lg bg-white text-black p-6 mb-[200px] lg:mb-[100px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="text-[25px] font-semibold text-blue-400 ml-[34px] mb-[20px]">
          Register Now
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          {/* <!--First name input--> */}
          <input
            type="text"
            label="First name"
            value={firstName}
            required
            className="mb-6 outline-[1px] outline-gray-400 border-[1.5px] p-[10px] w-[80%] rounded"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* <!--Last name input--> */}
          <input
            type="text"
            label="Last name"
            value={lastName}
            required
            className="mb-6 outline-[1px] outline-gray-400 border-[1.5px] p-[10px] w-[80%] rounded"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

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
          <button
            className="bg-blue-400 text-white py-[10px] px-[15px] hover:bg-blue-300 w-[max-content] rounded-full"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <p className="text-blue-400 ml-[34px] mt-[15px]">
          Need an account!{" "}
          <Link className="text-blue-600 underline" to={"/"}>
            Sign In
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
