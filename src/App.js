import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import "./styles.css";
import data from "./data/data.js";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
      {data.map(item => (
        <div key={item.id}>
          <Card            
            item={item}
          />
          </div>
      ))}
      </section>
    </>
  );
  
}


