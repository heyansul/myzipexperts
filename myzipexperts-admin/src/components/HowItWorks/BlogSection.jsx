import "./BlogSection.css";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Home Maintenance Tasks for Every Season",
    desc:
      "From changing filters to sealing windows, discover essential...",
    image: "/assets/Blog_Section/Mask group (4).svg",
  },
  {
    id: 2,
    title: "How to Choose the Right Electrician",
    desc:
      "Learn what to look for when hiring a professional electrician for your home.",
   image: "/assets/Blog_Section/Mask group (4).svg",
  },
  {
    id: 3,
    title: "Plumbing Tips Every Homeowner Should Know",
    desc:
      "Avoid costly repairs with these simple plumbing maintenance tips.",
    image: "/assets/Blog_Section/Mask group (4).svg",
  },
  {
    id: 4,
    title: "Why Regular Pest Control Matters",
    desc:
      "Protect your home from infestations with regular pest control services.",
   image: "/assets/Blog_Section/Mask group (4).svg",
  },
  {
    id: 5,
    title: "HVAC Maintenance Checklist",
    desc:
      "Ensure comfort year-round with this HVAC maintenance checklist.",
   image: "/assets/Blog_Section/Mask group (4).svg",
  },
   {
    id: 5,
    title: "HVAC Maintenance Checklist",
    desc:
      "Ensure comfort year-round with this HVAC maintenance checklist.",
   image: "/assets/Blog_Section/Mask group (4).svg",
  },
];

function BlogSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? blogs.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Blog Updates</h2>

        <div className="blog-arrows">
          <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext} className="dark">›</button>
        </div>
      </div>

      <div className="blog-carousel">
        <div
          className="blog-track"
          style={{
            transform: `translateX(-${index * 320}px)`,
          }}
        >
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>

                <button className="read-more">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;