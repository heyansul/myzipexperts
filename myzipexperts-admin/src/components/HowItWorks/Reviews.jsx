import { useEffect, useRef, useState } from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Andrew Sarma",
    role: "Entrepreneur",
    rating: 5,
    text: "Outstanding platform for home services! Easy to use, transparent pricing, and reliable professionals.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Andrew Sarma",
    role: "Entrepreneur",
    rating: 5,
    text: "Easy to use, transparent pricing, and reliable professionals. Highly recommend!!",
    avatar: "https://i.pravatar.cc/80?img=13",
  },
  {
    name: "Andrew Sarma",
    role: "Entrepreneur",
    rating: 5,
    text: "A must-try platform for any homeowner looking for trusted local services.",
    avatar: "https://i.pravatar.cc/80?img=14",
  },
  {
    name: "Andrew Sarma",
    role: "Entrepreneur",
    rating: 5,
    text: "A must-try platform for any homeowner looking for trusted local services.",
    avatar: "https://i.pravatar.cc/80?img=14",
  },
  {
    name: "Andrew Sarma",
    role: "Entrepreneur",
    rating: 5,
    text: "A must-try platform for any homeowner looking for trusted local services.",
    avatar: "https://i.pravatar.cc/80?img=14",
  },
];

function Reviews() {
  const [active, setActive] = useState(0);
  const startPos = useRef(0);
  const isMobile = window.innerWidth < 768;

  // 🔁 Auto loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    startPos.current = isMobile
      ? e.touches[0].clientY
      : e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endPos = isMobile
      ? e.changedTouches[0].clientY
      : e.changedTouches[0].clientX;

    if (startPos.current - endPos > 50) {
      setActive((prev) => (prev + 1) % reviews.length);
    } else if (endPos - startPos.current > 50) {
      setActive((prev) =>
        prev === 0 ? reviews.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">
        What Customers <br></br>Say About Us
      </h2>

      {/* ⭐ REVIEWS CAROUSEL */}
      <div
        className={`reviews-carousel ${isMobile ? "vertical" : "horizontal"}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-card ${index === active ? "active" : ""}`}
            style={{
              transform: isMobile
                ? `translateY(${(index - active) * 110}%)`
                : `translateX(${(index - active) * 110}%)`,
            }}
          >
            <div className="review-left-bar"></div>

            <img
              src={review.avatar}
              alt={review.name}
              className="review-avatar"
            />

            <div className="review-content">
              <h4>{review.name}</h4>
              <span>{review.role}</span>

              <div className="stars">★★★★★</div>

              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 📊 STATS SECTION (THIS WAS MISSING) */}
      <div className="review-stats">
        <div className="stat-card">
          <h3>12K+</h3>
          <p>Satisfied Customers</p>
        </div>

        <div className="stat-card">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>

        <div className="stat-card">
          <h3>25K+</h3>
          <p>Service Providers</p>
        </div>

        <div className="stat-card">
          <h3>4.9</h3>
          <p>Star Ratings</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
