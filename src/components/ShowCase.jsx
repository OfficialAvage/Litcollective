import "./../styles/Showcase.css";

function Showcase() {
  return (
   <section className="showcase">
      <div className="showcase-left">
        <img src="lady.png" alt="Work Environment" className="showcase-img" />
        <div className="showcase-text">
          <p>It’s also about creating the best work environment.</p>
          <button>About us</button>
        </div>
      </div>
      <div className="showcase-right">
        <img src="Laptop.jpg" alt="Academy" className="showcase-img" />
        <div className="showcase-text">
          <h3><span className="pink">⚡</span>academy</h3>
          <p>Sharing knowledge and growing as a community.</p>
          <a href="#" className="careers">Careers ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
