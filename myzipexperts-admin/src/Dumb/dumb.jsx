import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import AuthModal from "./components/AuthModal/AuthModal";

function Login() {
  return <h2>Admin Login Page</h2>;
}

function Dashboard() {
  return <h2>Admin Dashboard</h2>;
}

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Header always visible */}
      <UserDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <Header
        onLoginClick={() => setIsAuthOpen(true)}
        onProfileClick={() => setDrawerOpen(true)}
      />


      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
