import "./../styles/Footer.css";

function Footer() {
  return (
  <footer className="Showcase">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Your business will<br />never be the same</h2>
          <p className="copyright">LitCollective © 2022</p>
        </div>

        <div className="footer-right">
          <div className="footer-buttons">
            <a href="#" className="talk">Talk to a specialist ↗</a>
            <button className="get-in-touch">Get in touch</button>
          </div>

          <div className="footer-socials">
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Medium</a>
          </div>
        </div>
      </div>

      <img src="uphand.png" alt="Hand 1" className="hand hand1" />
      <img src="downhand.png" alt="Hand 2" className="hand hand2" />
    </footer>
  );
}

export default Footer;
