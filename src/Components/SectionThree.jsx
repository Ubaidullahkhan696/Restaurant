import { useState, useEffect, useRef } from "react";
import "../Style/SectionThree.css";

const SectionThree = () => {
  const [years, setYears] = useState(1);
  const [chefs, setChefs] = useState(1);
  const [startCount, setStartCount] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    // Years counter
    let startYears = 1;
    const endYears = 15;
    const yearsInterval = setInterval(() => {
      startYears += 1;
      setYears(startYears);
      if (startYears === endYears) clearInterval(yearsInterval);
    }, 100);

    // Chefs counter
    let startChefs = 1;
    const endChefs = 50;
    const chefsInterval = setInterval(() => {
      startChefs += 1;
      setChefs(startChefs);
      if (startChefs === endChefs) clearInterval(chefsInterval);
    }, 50);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(chefsInterval);
    };
  }, [startCount]);

  return (
    <div className="main-showcase">
      <div className="images">
        <div className="row-one">
          <img className="showImg" src="/about-1.jpg" alt="" />
          <img id="img-2" className="soSmall showImg" src="/about-2.jpg" alt="" />
        </div>
        <div className="row-two">
          <img id="img-3" className="soSmall showImg" src="/about-3.jpg" alt="" />
          <img className="showImg" src="/about-4.jpg" alt="" />
        </div>
      </div>

      <div className="about-us" ref={counterRef}>
        <div className="about">
          <h5>about us</h5>
        </div>
        <div className="heading">
          <h1>Welcome to Resturant</h1>
        </div>
        <div className="paragraph">
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
            <br />
            <br /> Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
            stet lorem sit clita duo justo magna dolore erat amet
          </p>
        </div>
        <div className="experience-papular">
          <div className="experience">
            <h1 className="heading-ep">{years}</h1>
            <p>
              year of <br /> EXPERIENCE
            </p>
          </div>
          <div className="papular">
            <h1 className="heading-ep">{chefs}</h1>
            <p>
              Popular <br /> MASTER CHEFS
            </p>
          </div>
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default SectionThree;
