import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="">
        <div className="bg-gray-100 mx-[auto] pt-[10px] w-[95%] md:w-[98%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%]">
          <AuthContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route
                  exact
                  path="/feed"
                  element={
                    <ProtectedRoute>
                      <Feed />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </AuthContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
