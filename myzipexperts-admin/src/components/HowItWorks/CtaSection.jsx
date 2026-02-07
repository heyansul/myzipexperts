import "./CtaSection.css";
import { useState } from "react";

function CtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // 🔒 BACKEND API (later)
    // POST /api/newsletter
    console.log("Email submitted:", email);

    setEmail("");
  };

  return (
    <section className="cta-wrapper">
      <div className="cta-box">
        <h2>Join Our Mailing List</h2>

        <p>
          Get access to premium offers, exclusive discounts,
          latest trends and home hacks, delivered straight to
          your inbox!
        </p>

        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            <img
              src="/assets/CTA/send-icon.svg"
              alt="Send"
            />
          </button>
        </form>
      </div>
    </section>
  );
}

export default CtaSection;
