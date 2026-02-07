import "../../styles/UserDrawer.css"
import { useEffect, useState } from "react";
import Profile_Default from "../../assets/Profile_Default.svg";

function UserDrawer({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // match CSS duration
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };


  return (
    <div
      className={`drawer-overlay ${visible ? "show" : "hide"}`}
      onClick={handleClose}
    >
      <div
        className={`drawer ${visible ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Arrow */}
        <button className="drawer-close" onClick={handleClose}>
          ←
        </button>

        {/* User Info */}
        <div className="drawer-header">
          <img src={Profile_Default} alt="User" className="drawer-avatar" />
          <div>
            <p className="drawer-name">{user?.name || "Jane Doe"}</p>
            <p className="drawer-email">{user?.email}</p>
          </div>
        </div>

        {/* Menu */}
        <div className="drawer-menu">
          <div className="drawer-item">SERVICE HISTORY</div>
          <div className="drawer-item">LIKED SERVICES</div>
          <div className="drawer-item">SETTINGS</div>
        </div>

        {/* Social Icons */}
        <div className="drawer-social">
          <a href="#" aria-label="Facebook">
            <img
              src="/assets/Footer/Footer_facebook.svg"
              alt="Facebook"
              className="drawer-social-icon"
            />
          </a>

          <a href="#" aria-label="Instagram">
            <img
              src="/assets/Footer/Footer_Insta.svg"
              alt="Instagram"
              className="drawer-social-icon"
            />
          </a>

          <a href="#" aria-label="Twitter / X">
            <img
              src="/assets/Footer/Footer_X.svg"
              alt="Twitter"
              className="drawer-social-icon"
            />
          </a>
        </div>


        {/* Logout */}
        <button className="drawer-logout" onClick={handleLogout}>
          ⎋ LOGOUT
        </button>

      </div>
    </div>
  );
}

export default UserDrawer;