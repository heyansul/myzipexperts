import { useEffect, useState } from "react";
import "../../styles/MenuDrawer.css"

function MenuDrawer({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) setVisible(true);
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div
      className={`menu-overlay ${visible ? "show" : "hide"}`}
      onClick={handleClose}
    >
      <div
        className={`menu-drawer ${visible ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Arrow */}
        <button className="menu-close" onClick={handleClose}>
          ←
        </button>

        {/* Menu */}
        <div className="menu-items">
          <div className="menu-item">ABOUT US</div>
          <div className="menu-item">SERVICES</div>
          <div className="menu-item">SUPPORT</div>
          <div className="menu-item">BLOG</div>
        </div>

        {/* Social Icons */}
        <div className="menu-social">
          <img src="/assets/Footer/Footer_facebook.svg" alt="Facebook" />
          <img src="/assets/Footer/Footer_Insta.svg" alt="Instagram" />
          <img src="/assets/Footer/Footer_X.svg" alt="Twitter" />
        </div>
      </div>
    </div>
  );
}

export default MenuDrawer;
