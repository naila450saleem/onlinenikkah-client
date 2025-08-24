import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { ProfileCompletion } from "./components/ProfileCompletion";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ViewProfile from "./pages/ViewProfile";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";

// 👇 import anonymous login + write test data
import { signInAnon, writeTestData } from "./firebase/auth";

function App() {
  // 👇 Run only once when app starts
  useEffect(() => {
    signInAnon()
      .then((user) => {
        console.log("✅ Anonymous login successful:", user.uid);

        // 👇 Save test data in Firebase
        writeTestData(user.uid)
          .then(() => console.log("✅ Test data saved in DB"))
          .catch((err) => console.error("❌ DB error:", err));
      })
      .catch((error) => {
        console.error("❌ Login failed:", error.message);
      });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/complete-profile" element={<ProfileCompletion />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/view-profile/:userId" element={<ViewProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
}

export default App;
