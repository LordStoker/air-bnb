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
            //{...item} Si lo hacemos con shadow copy, no hace falta poner cada propiedad, y accedes a las propiedades de item, igual que si pusiéramos title={item.title}, src={item.coverImg}, etc. en los props. Solo que habrá que usar el nombre de la propiedad del JSON. 
            //Si lo hacemos con el objeto, habrá que acceder al prop, al objeto item y luego a la propiedad que queramos del objeto.
            item ={item}
            
          />
          </div>
      ))}
      </section>
    </>
  );
  
}


