import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PageTransition from "./components/PageTransition/PageTransition";
import Home from "./pages/Home";
import UserDrawer from "./components/UserDrawer/UserDrawer";
import Header from "./components/Header/Header";
import MenuDrawer from "./components/MenuDrawer/MenuDrawer";
import AuthModal from "./components/AuthModal/AuthModal";
import Services from "./pages/Services";
import ServiceProviderRegistration from "./pages/ServiceProviderRegistration";


// other imports...

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* GLOBAL UI */}
      <UserDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <Header
        onLoginClick={() => setIsAuthOpen(true)}
        onProfileClick={() => setDrawerOpen(true)}
        onMenuClick={() => setMenuOpen(true)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* ROUTES WITH PAGE TRANSITION */}
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/sp-registration" element={<ServiceProviderRegistration />} />

        {/* {
            <Route path="/services" element={<Services />} />
        } */}
        {/* <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PageTransition>
              <Dashboard />
            </PageTransition>
          }
        /> */}
      </Routes>

      {/* GLOBAL DRAWERS */}
      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;
