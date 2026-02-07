import { useState } from "react";
import ServiceProviderModal from "../components/ServiceProviderModal/ServiceProviderModal";
import Footer from "../components/Footer/Footer";
import "../styles/ServiceProviderRegistration.css";

function ServiceProviderRegistration() {
    const [spModalOpen, setSpModalOpen] = useState(false);
    return (
        <>

            {/* SECTION 1: HERO / TESTIMONIAL */}
            <section className="sp-hero">
                <div className="sp-hero-content">
                    <h1>
                        Grow Your Business with <span>MyZipExperts</span>
                    </h1>

                    <p className="sp-quote">
                        “I highly recommend MyZipExperts to fellow service providers.
                        Their platform offers great exposure and reliable customer leads.”
                    </p>

                    <p className="sp-author">
                        — Michael Davis, Davis HVAC Solutions
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => setSpModalOpen(true)}
                    >
                        Register as Service Provider
                    </button>

                </div>

                <div className="sp-hero-image">
                    <img
                        src="/images/provider-hero.png"
                        alt="Service Provider"
                    />
                </div>
            </section>

            {/* SECTION 2: WHY CHOOSE US */}
            <section className="sp-why">
                <h2>Why Choose Us?</h2>

                <div className="sp-why-grid">
                    <div className="sp-card">
                        <h3>Increased Visibility & Exposure</h3>
                        <p>
                            Boost your online presence with better rankings and
                            optimized provider profiles.
                        </p>
                    </div>

                    <div className="sp-card">
                        <h3>Cost Effective Solution</h3>
                        <p>
                            Maximize your marketing budget with flexible and
                            affordable plans.
                        </p>
                    </div>

                    <div className="sp-card">
                        <h3>Wide Customer Reach</h3>
                        <p>
                            Access a growing network of customers actively
                            looking for services.
                        </p>
                    </div>

                    <div className="sp-card">
                        <h3>Reputation & Trust Building</h3>
                        <p>
                            Gain credibility through ratings, reviews, and
                            verified customer feedback.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: EXPAND REACH */}
            <section className="sp-expand">
                <div className="sp-expand-text">
                    <h2>
                        Expand Your Reach and Connect with More Customers
                    </h2>

                    <p>
                        Join our trusted network and grow your business with
                        increased visibility and better opportunities.
                    </p>

                    <div className="sp-buttons">

                        <button
                            className="primary-btn"
                            onClick={() => setSpModalOpen(true)}
                        >
                            Register as Service Provider
                        </button>

                        <button className="secondary-btn">
                            Log in to Account
                        </button>
                        
                    </div>
                </div>

                <div className="sp-expand-image">
                    <img
                        src="/images/provider-expand.png"
                        alt="Service Provider"
                    />
                </div>
            </section>
            <ServiceProviderModal
                isOpen={spModalOpen}
                onClose={() => setSpModalOpen(false)}
            />

            <Footer />
        </>
    );
}

export default ServiceProviderRegistration;
