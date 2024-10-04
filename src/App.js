
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/HomePage/Homepage';
import AnimatedCursor from "react-animated-cursor"
// import About from './pages/About/About';
// import Skills from './pages/Skills/Skills';
// import Contact from './pages/Contact/Contact';

function App() {

  return (
    // <BrowserRouter>
   <div className="App">
   <AnimatedCursor />
{/* <Routes>
<Route path='/about' element={<About />} />
<Route path='/skills' element={<Skills />} />
<Route path='/contact' element={<Contact />} />
      </Routes>  */}
       <Header></Header>
       
      <Homepage /> 
    </div>
    // </BrowserRouter>
  );
}

export default App;
