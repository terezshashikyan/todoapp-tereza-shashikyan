import { Link } from "react-router-dom";
import plant from './plant.png';
import './styles.css';

export const Home = () => {
  return (
  <>
  <section className="homepage-section">
    <div className="text">
       <h1>Todos App</h1>
       <h2>Become focused, organized, and calm with Todos App. The world’s #1 task manager and to-do list app.</h2>
       <button><Link to={"/todos"}><h2>Get started!</h2></Link></button>
    </div>
    <div className="image">
       <img src={plant} alt="homePage"/>
    </div>
  </section>
  </>
)};