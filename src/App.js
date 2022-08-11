import { About, Contact, Footer, Header, Marquee, Navbar, Projects, Skills } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Marquee />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
