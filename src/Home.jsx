
// import './App.css';
import FirstSection from './components_firstSection/FirstSection'
import OurImpact from './component_ourImpact/OurImpact'
import JoinUs from './components_joinUs/JoinUs'
import Mapsection from './components_mapSection/Mapsection'
import EndSection from './components_endSection/EndSection'
import OurStory from './component_ourStory/OurStory'
import Faq from './component_faq/Faq'
import BookStep1 from './bookComponent/BookStep1.jsx';
import BookStep2 from './bookComponent/Book-step2';
import BookStep3 from './bookComponent/Book-step3';

import BookStep4 from './bookComponent/Book-step4';
import Contribute from './component_contribute/Contribute';

import Contact from './Contact/Contact';
import MainNav from './navbarComponents/Topnavbar';
import { Link,Outlet } from "react-router-dom";
import AnimetedPagesDown from './AnimatedPagesDown'


function Home() {
  return (
   < AnimetedPagesDown>
   <MainNav></MainNav>
    <div className="home">   

 

    <FirstSection></FirstSection>
    <OurImpact></OurImpact>
    <JoinUs>  </JoinUs>
    
    <Mapsection ></Mapsection>
    
    <EndSection></EndSection>
    
  
     </div>  
     </AnimetedPagesDown>   
   
  );
}

export default Home;





{/* home page  
      <FirstSection></FirstSection>
      <OurImpact></OurImpact>
      <JoinUs></JoinUs>
      <Mapsection></Mapsection>
      <EndSection></EndSection>
      about us
      <OurStory></OurStory>
      <Faq></Faq>
      <Contact></Contact>
   */}