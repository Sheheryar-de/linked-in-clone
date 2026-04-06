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
    <div className="mx-[auto] pt-[10px] max-w-7xl">
      {isLandingPage ? (
        <AuthNavbar isTrue={true} />
      ) : isAuthPage ? (
        <AuthNavbar isTrue={false} />
      ) : (
        <DashboardNavbar />
      )}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signin" element={<Signin />} />
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
      {isAuthPage || isLandingPage ? <Footer /> : null}
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
