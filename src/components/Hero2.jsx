import { useEffect, useRef } from "react";
import "./../styles/Hero2.css";

function Hero2() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 9}deg) scale(1.04)`;
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform =
          "perspective(1000px) rotateY(-5deg) rotateX(0deg) scale(1)";
      }
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
      section?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero2" ref={sectionRef}>
      <div className="hero2-glow"></div>
      <div className="hero2-ring"></div>

      <img src="/lefthand.png" alt="Left Hand" className="hand left-hand" />

      <div className="hero2-image" ref={imageRef}>
        <img src="/LIT.png" alt="Hero" className="main-img" />
        <button className="play-btn">
          <span className="play-icon">▶</span>
          <span>PLAY</span>
        </button>
      </div>

      <img src="/righthand.png" alt="Right Hand" className="hand right-hand" />
    </section>
  );
}

export default Hero2;
