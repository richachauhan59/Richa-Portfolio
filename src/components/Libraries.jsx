import React from 'react';
import styled from 'styled-components';

const Icons = styled.div`
 display: grid;
 align-items: center;
 justify-items: center;
 width: max-content;
 margin: auto;
 grid-row-gap: 30px;
 grid-template-columns: repeat(4, 60px);
 grid-template-rows: 92px 92px;

 figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

 figure img {
  width: 60px;
  height: 60px;
  margin: auto;
 }
 figcaption {
  line-height: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: small;
  font-family: 'Alata', sans-serif;
 }

 @media (max-width: 575px) {
  grid-column-gap: 30px;
  figcaption {
   font-size: x-small;
  }
 }

 @media (min-width: 576px) {
  grid-column-gap: 35px;
 }

 @media (min-width: 700px) {
  grid-column-gap: 60px;
 }

 @media (min-width: 1000px) {
  grid-template-columns: repeat(6, 70px);
  grid-template-rows: 82px 82px;
  grid-column-gap: 90px;
  grid-row-gap: 50px;

  figure img {
   width: 70px;
   height: 70px;
   margin: auto;
  }
 }
`;

const Heading = styled.h1`
 text-align: center;
 padding: 60px 0;
 font-family: 'Ubuntu', sans-serif;
 font-size: 40px;
 color: #444649;
`;

const Line = styled.div`
 height: 4px;
 width: 125px;
 margin: 10px auto;
 background: #444649;
`;

function Libraries() {
 return (
  <React.Fragment>
   <Heading id="tech-stack">
    <div
     data-aos="fade-right"
     data-aos-duration="1500"
     data-aos-easing="ease-out-back"
    >
     Tech Stack
    </div>
    <Line
     data-aos="fade-left"
     data-aos-duration="1500"
     data-aos-easing="ease-out-back"
    />
   </Heading>
   <Icons>
    <figure
     data-aos="fade-down-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="html5.svg" alt="" />
     <figcaption>HTML5</figcaption>
    </figure>
    <figure
     data-aos="fade-down-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img style={{ transform: 'scale(1.25)' }} src="css3.svg" alt="" />
     <figcaption>CSS3</figcaption>
    </figure>
    <figure
     data-aos="fade-down-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="js.svg" alt="" />
     <figcaption>JAVASCRIPT</figcaption>
    </figure>
    <figure
     data-aos="fade-down-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="bootstrap.svg" alt="" />
     <figcaption>BOOTSTRAP</figcaption>
    </figure>
    <figure
     data-aos="fade-up-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="mongodb.svg" alt="" />
     <figcaption>MONGODB</figcaption>
    </figure>
    <figure
     data-aos="fade-up-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="expressjs.svg" alt="" />
     <figcaption>EXPRESS</figcaption>
    </figure>
    <figure
     data-aos="fade-up-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img style={{ transform: 'scale(1.15)' }} src="react.svg" alt="" />
     <figcaption>REACT</figcaption>
    </figure>
    <figure
     data-aos="fade-up-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="nodejs.svg" alt="" />
     <figcaption>NODE.JS</figcaption>
    </figure>
    <figure
     data-aos="fade-up-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="redux.svg" alt="" />
     <figcaption>Redux</figcaption>
    </figure>
    <figure
     data-aos="fade-up-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="reactRouter.svg" alt="" />
     <figcaption>Router</figcaption>
    </figure>
    <figure
     data-aos="fade-up-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img style={{ transform: 'scale(1.15)' }} src="materialUI.svg" alt="" />
     <figcaption>Material UI</figcaption>
    </figure>
    <figure
     data-aos="fade-up-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
    >
     <img src="git.svg" alt="" />
     <figcaption>GIT</figcaption>
    </figure>
   </Icons>
  </React.Fragment>
 );
}

export default Libraries;
