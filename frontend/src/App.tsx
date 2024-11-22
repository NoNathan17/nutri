import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Bodybuilding from "./pages/bodybuilding"
import WeightLoss from "./pages/weightloss"
import GeneralHealth from "./pages/health"
import Nutri from "./pages/nutri"
import Footer from "./components/footer"
import Navbar from './components/navbar'
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bodybuilding"
              element={
                <ProtectedRoute>
                  <Bodybuilding />
                </ProtectedRoute>
              }
            />
            <Route
              path="/weightloss"
              element={
                <ProtectedRoute>
                  <WeightLoss />
                </ProtectedRoute>
              }
            />
            <Route
              path="/health"
              element={
                <ProtectedRoute>
                  <GeneralHealth />
                </ProtectedRoute>
              }
            />
            <Route
            path="/nutri"
            element={
              <ProtectedRoute>
                <Nutri />
              </ProtectedRoute>
            }
            />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App