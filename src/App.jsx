import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Feed from "./components/Feed";
import ProtectedRoute from "./components/ProtectedRoute";

import AuthNavbar from "./components/AuthNavbar";
import DashboardNavbar from "./components/DashboardNavbar";
import Footer from "./components/Footer";

function AppLayout() {
  const location = useLocation();

  const authPaths = ["/signin", "/signup"];
  const landingPath = "/";

  const isAuthPage = authPaths.includes(location.pathname);
  const isLandingPage = location.pathname === landingPath;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="mx-auto pt-[10px] max-w-7xl w-full">
        {isLandingPage ? (
          <AuthNavbar isTrue={true} />
        ) : isAuthPage ? (
          <AuthNavbar isTrue={false} />
        ) : (
          <DashboardNavbar />
        )}
      </div>

      {/* Main Content */}
      <main className="flex-grow mx-auto max-w-7xl w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      {(isAuthPage || isLandingPage) && (
        <div className="mx-auto max-w-7xl w-full">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
