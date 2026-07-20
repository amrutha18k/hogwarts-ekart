//Home page
import {Navbar} from '../navbar.jsx';
import {Hero} from '../hero.jsx';
import {About} from '../about.jsx';
import {Footer} from '../footer.jsx';
import '../App.css';

function Home(){
    return(
      <>
        <Navbar />
        <Hero />
        <About />  
        <div className="footer-transition"></div>
        <Footer />   
      </>
    ); 
    
}

export default Home;