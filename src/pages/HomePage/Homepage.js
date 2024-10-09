import React from 'react'
import video from '../../Assets/images/sculpturebackground.mp4'
import About from '../About/About';
import Skills from '../Skills/Skills';
// import Connect from '../Connect';
// eslint-disable-next-line no-unused-vars
// import fluid from '../Skills/fluid';
// import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Contact from '../Contact/Contact';
function Homepage() {
 const name = `Asmita ‪‪❤︎‬` ;
  return (
    <div>
      <div>
        <video loop autoPlay=" " muted>
        <source src={video} type="video/mp4" />
       </video>
      </div>
      
      <div>
      <About />
      </div>

      <Skills />

      <Footer />

      
{/* <Connect/>  */}

<Contact name={name}/>
    </div>

  )
}

export default Homepage;