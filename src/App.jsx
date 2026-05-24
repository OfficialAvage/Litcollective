import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Clients from "./components/Clients";
import Showcase from "./components/ShowCase";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Hero2 />
      <Clients />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
