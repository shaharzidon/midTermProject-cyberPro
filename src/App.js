
import './App.css';
import BookStep1 from './bookComponent/bookStep1.jsx';
import BookStep2 from './bookComponent/book-step2';
import BookStep3 from './bookComponent/book-step3';
import Example from './bookComponent/book-step3';
import BookStep4 from './bookComponent/book-step4';
import Contribute from './ContributeComponent/Contribute';
import Contact from './Contact/Contact';
import MainNav from './navbarComponents/Topnavbar';


function App() {
  return (
    <div className="App">
      {/* <BookStep1></BookStep1> */}
      {/* <BookStep2></BookStep2>
      <BookStep3></BookStep3> */}
      {/* <BookStep4></BookStep4> */}
      {/* <Contribute></Contribute> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
