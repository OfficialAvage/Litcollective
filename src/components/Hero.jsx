import { useEffect, useRef } from "react";
import "./../styles/Hero.css";

const faces = ["front", "back", "left", "right", "top", "bottom"];

function Hero() {
  const heroRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sceneRef.current || !heroRef.current) return;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX / width - 0.5) * 18;
      const y = (e.clientY / height - 0.5) * 12;
      sceneRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-grid"></div>

      <div className="hero-3d-wrapper">
        <div className="hero-scene" ref={sceneRef}>
          <div className="cube cube-1">
            {faces.map((f) => <div key={f} className={`face ${f}`}></div>)}
          </div>
          <div className="cube cube-2">
            {faces.map((f) => <div key={f} className={`face ${f}`}></div>)}
          </div>
          <div className="cube cube-3">
            {faces.map((f) => <div key={f} className={`face ${f}`}></div>)}
          </div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="particles">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} className="particle" style={{ "--i": i }}></span>
        ))}
      </div>

      <div className="hero-content">
        <h1>
          <span className="h-line">We design</span>
          <span className="h-line">experiences that</span>
          <span className="h-line">move businesses to</span>
          <span className="h-line">the future.</span>
        </h1>
        <div className="hero-buttons">
          <a href="#" className="btn showreel">Play showreel <span>→</span></a>
          <a href="#" className="btn about">About us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
