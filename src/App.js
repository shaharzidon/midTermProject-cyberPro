
import './App.css';
import FirstSection from './components_firstSection/FirstSection'
import OurImpact from './component_ourImpact/OurImpact'
import JoinUs from './components_joinUs/JoinUs'
import Mapsection from './components_mapSection/Mapsection'
import EndSection from './components_endSection/EndSection'
import OurStory from './component_ourStory/OurStory'
import Faq from './component_faq/Faq'
import FlipCards from './components_flipCards/FlipCards';
import BookStep1 from './bookComponent/BookStep1';
import BookStep2 from './bookComponent/Book-step2';
import BookStep3 from './bookComponent/Book-step3';
import BookStep4 from './bookComponent/Book-step4';
import Contribute from './component_contribute/Contribute';
import Contact from './Contact/Contact';
import MainNav from './navbarComponents/Topnavbar';
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { ReactDOM } from 'react';
import Home from './Home';
import store from './store';
import { Provider } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'


function App() {



  return (
    <div className="App">   

<BrowserRouter>   
<Provider store={store}>
  {/* <MainNav></MainNav> */}

    
    <AnimatePresence>
  <Routes >
  <Route path="/contribute" element={<Contribute />} />
  <Route path="/BookStep1" element={<BookStep1/>} />
  <Route path="/BookStep2" element={<BookStep2 />} />
  <Route path="/BookStep3" element={<BookStep3 />} />
  <Route path="/BookStep4" element={<BookStep4 />} />
  <Route path="/Mapsection" element={<Mapsection />} />    
  <Route path="/OurStory" element={<OurStory />} />
  <Route path="/Home" element={<Home/>}/>
  <Route path="/contact" element={<Contact />} />
  <Route path="/Faq" element={<Faq/>} />
  </Routes>
  </AnimatePresence>
  
  </Provider>
  
 </BrowserRouter>
  
     </div>     
   
  );
}

export default App;





{/* home page  
      <FirstSection></FirstSection>
      <OurImpact></OurImpact>
      <JoinUs></JoinUs>
      <Mapsection></Mapsection>
      <EndSection></EndSection>
      about us
      <OurStory></OurStory>
      <Faq></Faq>
      <FlipCards></FlipCards>
      <Contact></Contact>
      <Contribute></Contribute>
      <BookStep1></BookStep1>
   */}
