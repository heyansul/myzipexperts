import { useState } from "react";
import "./HeroSection.css";

const locations = ["New York", "Los Angeles", "Chicago", "Houston"];

function HeroSection() {
  const [location, setLocation] = useState("Location");
  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-heading">
            Your Gateway to <br />
            <span>Exceptional Home Services</span>
          </h1>

          <p>
            Take your home to new heights with local home services
            experts, right at your fingertips.
          </p>

          {/* SEARCH BAR */}
          <div className="search-box">

            {/* LOCATION */}
            <div
              className="location-box"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="zipcode-icon"><img
              src="/assets/Header/zipcode-icon.svg"
            /> {location}</span>
              <span className="arrow">⌄</span>

              {showDropdown && (
                <ul className="location-dropdown">
                  {locations.map((loc) => (
                    <li
                      key={loc}
                      onClick={() => {
                        setLocation(loc);
                        setShowDropdown(false);
                      }}
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* INPUT */}
            <input
              type="text"
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* SEARCH BUTTON */}
            <button className="search-btn"><img className="Search-icon"
              src="/assets/Search-icon.svg"
            /></button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-circle">
            <img
              src="/assets/Hero_section/Homepage.svg"
              alt="Service Expert"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
