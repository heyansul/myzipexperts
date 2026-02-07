import { useState } from "react";
import "../../styles/Header.css";
import Profile_Default from "/assets/Profile_Default.svg";

function Header({ onLoginClick, onProfileClick, onMenuClick }) {
  const [user] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>☰</button>

        <div className="logo">
          <span className="logo-img">
            <img className="logo-img"
              src="/assets/Header/brandlogo.png"
              alt="MyZipExpert"
            />
          </span>
        </div>
      </div>

      {!user ? (
        <button className="login-btn" onClick={onLoginClick}>
          Login
        </button>

      ) : (
        <div
          className="profile-btn"
          onClick={onProfileClick ? onProfileClick : () => { }}
        >
          <img
            src={Profile_Default}
            alt="Profile"
            className="profile-avatar"
          />
        </div>
      )}
     
    </header>
  );
}

export default Header;
