import { useEffect, useRef } from "react";
import "./PopularOffers.css";

const offers = [
  {
    title: "Summer Special Offer!",
    subtitle: "AC TUNE UP",
    price: "$79",
    img: "/assets/Popular_offers/Popular_offer_1.svg",
  },
  {
    title: "Upgrade Your Security",
    subtitle: "ALARM SYSTEM INSTALLATION",
    price: "$299",
    img: "/assets/Popular_offers/Popular_offer_2.svg",
  },
  {
    title: "Plumbing Solutions",
    subtitle: "PROFESSIONAL PLUMBING SERVICES",
    price: "$59 /hour",
    img: "/assets/Popular_offers/Popular_offer_1.svg",
  },
  {
    title: "Deep Cleaning",
    subtitle: "FULL HOME CLEANING",
    price: "$149",
    img: "/assets/Popular_offers/Popular_offer_2.svg",
  },
];

function PopularOffers() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  // ✅ Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="offers">
      <div className="offers-header">
        <h2>Popular Offers</h2>

        <div className="offers-nav">
          <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext}>›</button>
        </div>
      </div>

      <div className="offers-slider" ref={sliderRef}>
        {[...offers, ...offers].map((item, index) => (
          <div className="offer-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="offer-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>

              <div className="offer-footer">
                <span>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularOffers;
