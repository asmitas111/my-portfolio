import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="row">
        <div className="description col-md-6 col-sm-4 col-xs-12">
          <h2 className="intro">Hey, I am Asmita</h2>
          <ul className="dynamic-txts">
            <li>
              <span>I am a Software Engineer</span>
            </li>
            <li>
              <span>I develop modern web applications</span>
            </li>
            <li>
              <span>I design dynamic user experiences</span>
            </li>
            <li>
              <span>I solve frontend problems</span>
            </li>
          </ul>
        </div>
        <h4 className="intro-msg">
          I am your fashionista, foodie and creative Software Engineer
        </h4>
        <p style= {{margin: '3%'}}>
          I am a Software Engineer at Cognizant Technology. I effortlessly
          switch between debugging code and curating the perfect travel
          itinerary. When I'm not optimizing algorithms or application performances, I'm scouting the latest
          fashion trends. My journey at Cognizant Technology Solutions evolved
          from crafting efficient web applications as a Programmer Analyst
          Trainee to engineering advanced, customer-centric projects as a
          Fullstack Software Engineer now. As a dynamic and innovative software
          engineer (ps:a little bragging didn't harm anyone), I have made
          significant contributions from reducing error-rates to enhancing user experiences for multiple 
          clients constantly delivering high-quality results.
        </p>

        <div></div>
      </div>
    </div>
  );
};

export default About;
