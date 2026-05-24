import "./../styles/Clients.css";

function Clients() {
  return (
     <section className="hero3">
      <div className="logos-grid">
        <div className="column">
          <img src="Triple.png" alt="Logo 1" />
          <img src="Mojo.png" alt="Logo 2" />
          <img src="Trove.png" alt="Logo 3" />
          <img src="Soclly.png" alt="Logo 4" />
        </div>
        <div className="column">
          <img src="Handcash.png" alt="Logo 5" />
          <img src="Vera.png" alt="Logo 6" />
          <img src="Foundry.png" alt="Logo 7" />
          <img src="Fly.png" alt="Logo 8" />
        </div>
        <div className="column">
          <img src="AscendEX.png" alt="Logo 9" />
          <img src="Finnet.png" alt="Logo 10" />
          <img src="Nycrypto.png" alt="Logo 11" />
          <img src="Dolphin.png" alt="Logo 12" />
        </div>
      </div>

      <div className="logos-buttons">
        <a href="#" className="btn">What we do <span>→</span></a>
        <a href="#" className="btn">Testimonials</a>
      </div>
    </section>
  );
}

export default Clients;
