import React, { useEffect, useState } from "react";
import "../Style/SectionSeven.css";

export default function SectionSeven() {
  const testimonials = [
    {
      image: "/testimonals/testimonial-1.jpg",
      name: "John Doe",
      profession: "Chef",
      feedback: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      image: "/testimonals/testimonial-2.jpg",
      name: "Jane Smith",
      profession: "Food Blogger",
      feedback: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      image: "/testimonals/testimonial-3.jpg",
      name: "Emily Johnson",
      profession: "Customer",
      feedback: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getClassName = (index) => {
    if (index === currentIndex) return "carousel-item active";
    if (index === (currentIndex + 1) % testimonials.length)
      return "carousel-item next";
    if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    )
      return "carousel-item prev";
    return "carousel-item";
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div className={getClassName(index)} key={index}>
            <div className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.profession}</p>
              <p>"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
