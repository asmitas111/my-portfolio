import React from "react";
// import { Link } from "react-router-dom";
// import fb from "../../Assets/images/facebook_icon.png";
import linkedin from "../../Assets/images/linkedin_icon.png";
import xlogo from "../../Assets/images/x_logo.png";
import github from "../../Assets/images/github_icon.png";
import medium from "../../Assets/images/medium_icon.png";
// import resume from '../../Assets/docs/resume.pdf'
// import PropTypes from "prop-types";

// import Page from 'react-pdf/src/Page.js';
// import resume from '../../Assets/docs/resume.pdf';
// import { pdfjs } from 'react-pdf';

// eslint-disable-next-line no-template-curly-in-string
// pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js'

const Contact = () => {
  return (
    <div className="contact">
      <h2> Connect with Me </h2>
      <div className="container">
        {/* <a href="/">
        <img src={linkedin} alt="" width={40}/>
        </a>  */}
        {/* <div className="logo">
          
          <Link to="/about">
            <img src={fb} alt="" width={40} />
          </Link>
        </div> */}
        <div className="logo">
          <a href="https://www.linkedin.com/in/asmita-srivastava-11o1">
            <img src={linkedin} alt="" width={40} />
          </a>
        </div>
        <div className="logo">
          <a href="/">
            <img src={xlogo} alt="" width={40} />
          </a>
        </div>
        <div className="logo">
          <a href="https://github.com/asmitas111">
            <img src={github} alt="" width={40} />
          </a>
        </div>
        <div className="logo">
          <a
            href="https://medium.com/@asmita.srivastava565"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="" width={40} />
          </a>
        </div>
      </div>

      <div>
        <p>Made with love and passion by </p>
      </div>
    </div>
  );
};

// Contact.propTypes = {
//   name: PropTypes.string,
// };

export default Contact;
