
import './App.css';
import FirstSection from './components_firstSection/FirstSection'
import OurImpact from './component_ourImpact/OurImpact'
import JoinUs from './components_joinUs/JoinUs'
import Mapsection from './components_mapSection/Mapsection'
import EndSection from './components_endSection/EndSection'
import OurStory from './component_ourStory/OurStory'
import Faq from './component_faq/Faq'
import FlipCards from './components_flipCards/FlipCards';
import BookStep1 from './bookComponent/bookStep1.jsx';
import BookStep2 from './bookComponent/book-step2';
import BookStep3 from './bookComponent/book-step3';
import Example from './bookComponent/book-step3';
import BookStep4 from './bookComponent/book-step4';
import Contact from './Contact/Contact';
import MainNav from './navbarComponents/Topnavbar';
import Contribute from './component_contribute/Contribute';


function App() {
  return (
    <div className="App">       
      {/* home page  */}
      <MainNav></MainNav>
      <FirstSection></FirstSection>
      <OurImpact></OurImpact>
      <FlipCards></FlipCards>
      <JoinUs></JoinUs>
      <Mapsection></Mapsection>
      <EndSection></EndSection>
      {/* about us */}
      <OurStory></OurStory>
      <Faq></Faq>
      <Contribute></Contribute>
      <Contact></Contact>
      <BookStep1></BookStep1>
    </div>
  );
}

export default App;
