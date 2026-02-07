import React, { useEffect, useState } from "react";
import "./Serviceslist.css";

const SERVICE_CATEGORIES = [
  "Electrician",
  "Restoration",
  "Roof",
  "HVAC",
  "Plumbing",
  "Wildlife",
  "Pest Control",
  "Appliances",
  "Carpet Cleaning",
  "Home Security",
];

const mockServices = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: "MoldGuard Xpert Solutions",
  city: "Lawrence, Kansas",
  years: 7,
  rating: 4.8,
  reviews: "1k",
  urgent: i % 3 === 0,
  category: SERVICE_CATEGORIES[i % SERVICE_CATEGORIES.length],
  image: "/assets/Services_images/Services_img.svg",
  description:
    "Count on MoldGuard Xpert Solutions for reliable mold remediation services. ",
}));


export default function Services() {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({ rating: 0, urgent: false });

  useEffect(() => {
    setServices(mockServices); // later replace with API
  }, []);

  const filteredServices = services.filter((s) => {
    if (filters.rating && s.rating < filters.rating) return false;
    if (filters.urgent && !s.urgent) return false;

    if (
      selectedServices.length > 0 &&
      !selectedServices.includes(s.category)
    )
      return false;

    return true;
  });


  return (
    <>

      <section className="services-page">
        <h1>
          Our Services
          {/* Showing Results for <span>"Mold Remediation Services"</span> in Kansas */}
        </h1>

        <div className="services-meta">
          <span>Showing : {filteredServices.length} Results</span>

          <div className="applied-filters-wrapper">
            {/* <span className="showing-text">Showing:</span> */}

            <div className="applied-filters">
              {filters.rating > 0 && (
                <span onClick={() => setFilters({ ...filters, rating: 0 })}>
                  Above {filters.rating} Stars ✕
                </span>
              )}

              {filters.urgent && (
                <span onClick={() => setFilters({ ...filters, urgent: false })}>
                  Urgent ✕
                </span>
              )}
            </div>
          </div>

          {/* Desktop Sort | Filter */}
          <div className="desktop-sort-filter">
            <span onClick={() => setShowSort(true)}>Sort</span>
            <span className="divider">|</span>
            <span onClick={() => setShowFilter(true)}>Filter</span>
          </div>
        </div>


        <div className="services-list">
          {filteredServices.slice(0, visibleCount).map((service) => (
            <div className="service-page-card" key={service.id}>
              <img src={service.image} alt={service.name} />

              <div className="service-content">
                <div className="service-header">
                  <h3>{service.name}</h3>
                  <div className="service-actions">
                    <button className="icon-btn">♡</button>
                    <button className="icon-btn"><img id="share-service-img" src="/assets/Services_images/Share_img.svg"></img></button>
                  </div>
                </div>

                <p className="service-location">
                  {service.city} | {service.years}+ Years of Service
                </p>
                <div className="rating">
                  ⭐ {service.rating} ({service.reviews})
                </div>
                <p className="service-desc">{service.description}</p>

                <div className="service-footer">
                  <button className="service-outline-btn">Request Callback</button>
                  <button className="service-primary-btn"> <img id="ph-service-img" src="/assets/Services_images/Call_Number.svg" alt="Facebook" /> Show Number</button>
                </div>


              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredServices.length && (
          <div className="load-more">
            <button onClick={() => setVisibleCount((p) => p + 6)}>
              Load More Services
            </button>
          </div>
        )}
      </section>

      {/* Sticky Filter Bar (Mobile) */}
      <div className="sticky-filter">
        <div className="sticky-filter">
          <button onClick={() => setShowSort(true)}>Sort</button>
          <button onClick={() => setShowFilter(true)}>Filter</button>
        </div>

      </div>

      {showSort && (
        <div className="filter-modal">
          <div className="filter-box">

            {/* Header */}
            <div className="filter-header">
              <h3>Sort & Filters</h3>
              <button onClick={() => setShowSort(false)}>✕</button>
            </div>

            {/* Services */}
            <h4>Services</h4>
            <div className="service-options">
              {SERVICE_CATEGORIES.map((service) => (
                <button
                  key={service}
                  type="button"
                  className={`service-option ${selectedServices.includes(service) ? "active" : ""
                    }`}
                  onClick={() =>
                    setSelectedServices((prev) =>
                      prev.includes(service)
                        ? prev.filter((s) => s !== service)
                        : [...prev, service]
                    )
                  }
                >
                  {service}
                </button>
              ))}
            </div>


            {/* Rating */}
            <label className="filter-label">Rating</label>
            <select
              className="rating-select"
              value={filters.rating}
              onChange={(e) =>
                setFilters({ ...filters, rating: Number(e.target.value) })
              }
            >
              <option value={0}>All Ratings</option>
              <option value={3}>Above 3 Stars</option>
              <option value={4}>Above 4 Stars</option>
            </select>


            {/* Urgent */}
            <label className="checkbox">
              <input
                type="checkbox"
                checked={filters.urgent}
                onChange={(e) =>
                  setFilters({ ...filters, urgent: e.target.checked })
                }
              />
              Urgent Services Only
            </label>

            {/* Footer buttons */}
            <div className="filter-footer">
              <button
                className="clear-btn"
                onClick={() => {
                  setSelectedServices([]);
                  setFilters({ rating: 0, urgent: false });
                }}
              >
                Clear All
              </button>

              <button className="apply-btn" onClick={() => setShowSort(false)}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      {showFilter && (
        <div className="filter-modal">
          <div className="filter-box">

            {/* Header */}
            <div className="filter-header">
              <h3>Filters</h3>
              <button onClick={() => setShowFilter(false)}>✕</button>
            </div>

            {/* Rating */}
            <label className="filter-label">Rating</label>
            <select
              className="rating-select"
              value={filters.rating}
              onChange={(e) =>
                setFilters({ ...filters, rating: Number(e.target.value) })
              }
            >
              <option value={0}>All Ratings</option>
              <option value={3}>Above 3 Stars</option>
              <option value={4}>Above 4 Stars</option>
            </select>

            {/* Urgent */}
            <label className="checkbox">
              <input
                type="checkbox"
                checked={filters.urgent}
                onChange={(e) =>
                  setFilters({ ...filters, urgent: e.target.checked })
                }
              />
              Urgent Services Only
            </label>

            {/* Footer buttons */}
            <div className="filter-footer">
              <button
                className="clear-btn"
                onClick={() => setFilters({ rating: 0, urgent: false })}
              >
                Clear All
              </button>

              <button className="apply-btn" onClick={() => setShowFilter(false)}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="services-image-section">
  <img
    src="/assets/Services_images/Service-cta.svg"
    alt="Our Services"
  />
</div>


    </>
  );
}
