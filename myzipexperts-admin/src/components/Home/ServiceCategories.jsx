import { useEffect, useState } from "react";
import "./ServiceCategories.css";

const services = [
  { name: "Pest Control", icon: "/assets/Hero_section/Pest-control-img.svg" },
  { name: "Wildlife", icon: "/assets/Hero_section/Wildlife-img.svg" },
  { name: "Plumbing", icon: "plumbing.svg" },
  { name: "Roof", icon: "roof.svg" },
  { name: "Restoration", icon: "restoration.svg" },
  { name: "Electrician", icon: "electrician.svg" },
  { name: "Appliance", icon: "appliance.svg" },
  { name: "HVAC", icon: "hvac.svg" },
  { name: "Carpet Cleaning", icon: "carpet.svg" },
  { name: "Home Security", icon: "security.svg" },
];

function ServiceCategories() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔥 Detect screen size properly
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleServices =
    isMobile && !showAll ? services.slice(0, 5) : services;

  return (
    <section className="services">
      <h2>Find the Right Support for Your Home Needs</h2>
      <p>
        Browse our wide range of specialized service categories and
        connect with our most trusted professionals to achieve all your
        home goals.
      </p>

      <div className="services-grid">
        {visibleServices.map((item) => (
          <div key={item.name} className="service-card">
            <img
              src={item.img}
              alt={item.name}
              className="service-img"
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* MOBILE ONLY */}
      {isMobile && (
        <button
          className="view-all"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View less" : "View all"}
        </button>
      )}
    </section>
  );
}

export default ServiceCategories;
