import React, { useEffect, useState } from "react";
import "./ServiceProviderModal.css";
import { apiRequest } from "../../utils/api";

function ServiceProviderModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    designation: "",
    experience: "",
    govtIdType: "",
    govtIdNumber: "",
  });

  const serviceOptions = [
    "Electrician",
    "Plumber",
    "HVAC Technician",
    "Roofing Specialist",
    "Appliance Repair",
    "Carpet Cleaning",
    "Pest Control",
    "Wildlife Control",
    "Restoration Services",
    "Home Security",
  ];

  useEffect(() => {
    if (isOpen) setVisible(true);
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  };

  // ✅ SUBMIT HANDLER (CORRECT)
  const handleSubmit = async () => {
    try {
      await apiRequest("/provider/register", "POST", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        designation: formData.designation,
        experience: formData.experience,
        govtIdType: formData.govtIdType,
        govtIdNumber: formData.govtIdNumber,
      });

      alert(
        "Application submitted successfully. Our team will review it."
      );
      handleClose();
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className={`sp-overlay ${visible ? "show" : "hide"}`}>
      <div className={`sp-modal ${visible ? "open" : "close"}`}>
        <button className="sp-close" onClick={handleClose}>✕</button>

        <h2 className="sp-title">Register as Service Provider</h2>
        <p className="sp-subtitle">
          Join MyZipExperts and grow your service business
        </p>

        <div className="sp-form">

          <input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Create Password (for dashboard login)"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <select
            value={formData.designation}
            onChange={(e) =>
              setFormData({ ...formData, designation: e.target.value })
            }
          >
            <option value="">Select Service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <input
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
          />

          <select
            value={formData.govtIdType}
            onChange={(e) =>
              setFormData({ ...formData, govtIdType: e.target.value })
            }
          >
            <option value="">Select Government ID</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="driving">Driving License</option>
          </select>

          <input
            placeholder="Government ID Number"
            value={formData.govtIdNumber}
            onChange={(e) =>
              setFormData({ ...formData, govtIdNumber: e.target.value })
            }
          />

          <button className="sp-submit" onClick={handleSubmit}>
            Submit Application
          </button>

          <p className="sp-note">
            Your application will be reviewed by our team before approval.
          </p>

        </div>
      </div>
    </div>
  );
}

export default ServiceProviderModal;
