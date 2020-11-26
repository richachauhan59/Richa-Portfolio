import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import particles from '../data/particles.json';

// Use styled-components to ensure vendor prefixes are applied automatically

const IntroWrapper = styled.div`
 position: relative;
 background-color: rgb(35, 39, 65);
 background-image: linear-gradient(170deg, rgb(35, 39, 65), rgba(77, 238, 134, 0.58));
 min-height: 770px;

 #scroll-down {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  > h4 {
   color: white;
   letter-spacing: 1px;
   margin-bottom: 5px;
   font-weight: normal;
  }
  #chevron {
   height: 20px;
   width: 20px;
   margin: 0 auto;
   transform: rotate(45deg);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
   0% {
    transform: translate(0, 0) rotate(45deg);
   }
   50% {
    transform: translate(0, 10px) rotate(45deg);
   }
   100% {
    transform: translate(0, 0) rotate(45deg);
   }
  }
 }
`;

const IntroText = styled.div`
 position: absolute;
 top: 0px;
 left: 0px;
 width: 100%;
 padding: 30px 300px 0px 80px;
 color: white;
 > h1 {
  font-size: 150px;
  font-family: 'Righteous', cursive;
  text-align: left;
  margin-left: 200px;
  width: max-content;
 }

 .about-me-buttons {
  text-align: center;
  transition: all 0.3s ease-in-out;
  > button {
   padding: 10px 20px;
   margin: 20px;
   margin-top: 40px;
   background: transparent;
   /* color: #b61924; */
   color: white;
   font-weight: bold;
   font-size: larger;
   border: 2px solid white;
   letter-spacing: 1px;
   transition: all 0.3s ease-in-out;
  }
  > button:hover {
   cursor: pointer;
   background: white;
   color: #252934;
   letter-spacing: 2px;
   width: max-content;
   transform: scale(1.1);
   transition: all 0.3s ease-in-out;
  }
  > button:active {
   transform: scale(1.05);
   transition: none;
  }
 }

 #about-me {
  display: flex;
  flex-direction: row;
  width: max-content;
  align-items: center;
  margin-left: auto;

  > div:nth-child(1) {
   align-self: center;
  }

  > div:nth-child(2) {
   display: flex;
   flex-direction: column;
  }

  > div > h2 {
   font-size: 70px;
   font-weight: 600;
   font-family: 'Raleway', sans-serif;
   text-align: right;
   margin-bottom: 20px;
   > span {
    font-size: 50px;
    font-weight: normal;
   }
  }

  div > p {
   width: 600px;
   text-align: center;
   font-family: 'Raleway', sans-serif;
   line-height: 30px;
   font-weight: 500;
   font-size: 26px;
  }
 }

 @media (max-width: 1200px) {
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0px;
  width: max-content;
  > h1 {
   font-size: 120px;
   text-align: left;
   width: max-content;
   margin-left: 0;
  }
  #about-me {
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 100%;

   > div:nth-child(1) {
    div {
     margin: 0 auto;
    }
   }

   > div:nth-child(2) {
    display: flex;
    flex-direction: column;
   }

   > div > h2 {
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
    > span {
     font-size: 22px;
    }
   }

   div > p {
    width: 500px;
    padding: 0 30px;
    font-size: 20px;
    text-align: justify;
   }
  }
 }

 @media (max-width: 650px) {
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0px;
  width: max-content;
  > h1 {
   font-size: 100px;
   margin: 0 auto;
   width: max-content;
  }

  .about-me-buttons {
   > button {
    font-size: small;
    margin: 10px;
    margin-top: 40px;
   }
  }

  #about-me {
   flex-direction: column;
   justify-content: center;
   width: 100%;
   align-items: center;

   > div:nth-child(1) {
    align-self: center;
    div {
     margin: 0 auto;
    }
   }

   > div:nth-child(2) {
    display: flex;
    flex-direction: column;
   }

   > div > h2 {
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
    > span {
     font-size: 22px;
    }
   }

   div > p {
    width: 100vw;
    padding: 0 30px;
    font-size: 20px;
    text-align: center;
   }
  }
 }
`;

const ImageWrapper = styled.div`
 height: 150px;
 width: 150px;
 border-radius: 50%;
 border: 3px solid #252934;
 overflow: hidden;
 position: relative;
 margin-right: 40px;
 img {
  width: 155px;
  height: 155px;
  display: block;
  position: absolute;
  object-fit: cover;
  object-position: -3px;
 }
`;

class Intro extends React.Component {
 constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.handleButtonNav = this.handleButtonNav.bind(this);
 }

 handleClick() {
  document.getElementById('tech-stack').scrollIntoView();
 }

 handleButtonNav(e) {
  let name = e.target.name || 'projects';
  if (name !== 'resume') {
   document.getElementById(name).scrollIntoView();
  }
 }

 render() {
  return (
   <IntroWrapper>
    {/* Particles alternate style={{backgroundColor: '#24443f'}} */}
    <Particles height={'770px'} params={particles} />
    <IntroText>
     <h1
      data-aos="fade-up"
      data-aos-offset="-100"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
     >
      Hey,
     </h1>
     <div id="about-me">
      <div
       data-aos="fade-right"
       data-aos-offset="-100"
       data-aos-duration="1500"
       data-aos-easing="ease-out-back"
      >
       <ImageWrapper>
        <img src="dp2.jpg" alt="A geeky guy" />
       </ImageWrapper>
      </div>
      <div
       data-aos="fade-down"
       data-aos-offset="-100"
       data-aos-duration="1500"
       data-aos-easing="ease-out-back"
       data-aos-delay="200"
      >
       <h2>
        <span>I'm</span> Richa Chauhan.
       </h2>
       <p>
        An aspiring full stack developer proficient in MERN stack. If you are
        looking for a curious and adaptible team player. Then, I'm the one for
        the job.
       </p>
       <div className="about-me-buttons">
        <button name="projects" onClick={this.handleButtonNav}>
         Projects
        </button>
        <button name="contact" onClick={this.handleButtonNav}>
         Contact
        </button>
        <button name="resume" onClick={this.handleButtonNav}>
         Resume
        </button>
       </div>
      </div>
     </div>
    </IntroText>
    <div id="scroll-down" onClick={this.handleClick}>
     <h4>SCROLL DOWN</h4>
     <div id="chevron"></div>
    </div>
   </IntroWrapper>
  );
 }
}

export default Intro;
