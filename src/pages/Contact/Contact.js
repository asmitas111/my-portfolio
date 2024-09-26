import React from 'react';
import fb from '../../Assets/images/facebook_icon.png';
import linkedin from '../../Assets/images/linkedin_icon.png';
import xlogo from '../../Assets/images/x_logo.png';
import github from '../../Assets/images/github_icon.png';
import medium from '../../Assets/images/medium_icon.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      Connect with Me
    <div className="container">
      <div className="logo">
        <img src ={fb} alt='' width={40}/>  
      </div>
      <div className="logo">
      <a href="https://www.linkedin.com/in/asmita-srivastava-11o1">
        <img src ={linkedin} alt='' width={40} />
        </a>
      </div>
      <div className="logo">
        <img src ={xlogo} alt='' width={40}/>
      </div>
      <div className="logo">
      <a href="https://github.com/asmitas111">
        <img src ={github} alt='' width={40}/>
        </a>
      </div>
      <div className="logo">
      <a href="https://medium.com/@asmita.srivastava565">
        <img src ={medium} alt='' width={40}/>
        </a>
      </div>
    </div>

    <div>
      <p>Thanks for reaching out</p>
    </div>
    <div><canvas></canvas></div>
    </div>

  )
}

export default Contact;