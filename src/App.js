
import './App.css';
import Banner from "./components/Banner.js"
import Navbar from "./components/Navbar.js"
import Services from "./components/Services"
import About from "./components/About.js"
import Portofolio from "./components/Portofolio.js"
import Copyright from "./components/Copyright.js"
function App() {
  return (
    <div >
     <Banner/>
     <Navbar/>
     {/* <Services/> */}
     <About/>
     <Portofolio/>
     <Copyright/>
    </div>
  );
}

export default App;
