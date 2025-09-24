import { useEffect, useRef } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiCodechef } from "react-icons/si";
import "../Style/SectionTwo.css";

const SectionTwo = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section2">
      {[
        { icon: <SiCodechef className="img"/>, title: "Master Chef" },
        { icon: <ImSpoonKnife className="img" />, title: "Quality Food" },
        { icon: <FaCartPlus className="img" />, title: "Online Order" },
        { icon: <TfiHeadphoneAlt className="img" />, title: "24/7 Service" },
      ].map((item, index) => (
        <div
          key={index}
          className="box"
          ref={(el) => (boxesRef.current[index] = el)}
        >
          {item.icon}
          <h3>{item.title}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            quod deserunt vel fugit quaerat consectetur!
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
