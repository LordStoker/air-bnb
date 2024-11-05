import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import "./styles.css";


export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Card 
        imgSrc="/images/Katie-Zaferes.jpeg" 
        rating="5.0" 
        reviews="(6)·" 
        location="USA"
        starIcon="/images/star.png" 
        title="Life Lessons with Katie Zaferes" 
        price="From $136"      
      >
      </Card>
    </>
  );
}


