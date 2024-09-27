import Navbar from './components/Navbar';
import HomeMain from './components/HomeMain';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className=''>
        <Navbar/>
        <HomeMain/>
        <Projects/>
        <Technologies/>
        <ContactMe/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
