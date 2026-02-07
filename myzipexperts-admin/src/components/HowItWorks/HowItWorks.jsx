import "./HowItWorks.css";
import { useEffect, useState } from "react";

  const steps = [
  {
    img: "/assets/SEO-pana 1.svg",
    text: "Discover Trusted Local Home Service Providers",
  },
  {
    img: "/assets/SEO-pana 1.svg",
    text: "Choose the Right Service Provider for Your Needs",
  },
  {
    img: "/assets/SEO-pana 1.svg",
    text: "Connect and Book Directly with Confidence",
  },
];


 function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  // 🔁 Auto loop (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="how-it-works">
      <h2 className="how-title">How it works</h2>

      {/* MOBILE VIEW */}
      <div className="how-mobile">
        <img
          src={steps[activeStep].img}
          alt="How it works"
          className="how-image"
        />

        <div className="how-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`how-step ${index === activeStep ? "active" : ""}`}
            >
              <span className="dot"></span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="how-desktop">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <img src={step.img} alt="Step" />
            <div className="step-number">{index + 1}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default HowItWorks;