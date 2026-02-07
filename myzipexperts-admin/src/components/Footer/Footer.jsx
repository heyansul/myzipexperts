import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT / LOGO */}
        <div className="footer-brand">
          <img
            src="/assets/Header/brandlogo.png"
            alt="MyZipExpert"
            className="footer-logo"
          />

          <p className="footer-text">
            123, abc street, city, state,<br />
            country, 123456
          </p>

          <p className="footer-text">hello@companyname.com</p>
          <p className="footer-text">0987654321</p>

          <div className="footer-social">
            <img src="/assets/Footer/Footer_facebook.svg" alt="Facebook" />
            <img src="/assets/Footer/Footer_Insta.svg" alt="Instagram" />
            <img src="/assets/Footer/Footer_X.svg" alt="Twitter" />
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
        </div>

        {/* FOR CUSTOMERS */}
        <div className="footer-links">
          <h4>For Customers</h4>
          <a href="#">Blog</a>
          <a href="#">Register</a>
          <a href="#">Contact Us</a>
        </div>

        {/* EXTRA */}
        <div className="footer-extra">
          <a href="#">Become an Affiliate</a>
          <a href="#">Register as Service Provider</a>
        </div>

      </div>

      <div className="footer-bottom">
        © Copyright 2026, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
