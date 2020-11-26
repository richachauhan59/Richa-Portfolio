import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
 box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
 /* border: 1px solid #ccc; */
 height: 100%;
 transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
 background: white;
 :hover {
  transform: scale(1.06) !important;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  h4 {
   /* background: #1976D2; */
   background-position: left bottom;
   color: white;
   padding: 3px 15px;
   transition: all 0.3s ease-in-out;
  }
 }

 img {
  width: 100%;
  height: 220px;
  display: block;
 }

 h4 {
  background: linear-gradient(to right, #1976d2 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  margin: 12px 0;
  padding: 3px 0px;
  border-radius: 3px;
  width: max-content;
  transition: all 0.3s ease-in-out;
 }

 .card-body {
  padding: 0 20px;
 }
`;

const NavButtonsWrapper = styled.div`
 margin: 30px 0 20px 0;
 text-align: center;
 a {
  border: 1px solid #24292e;
  background: white;
  color: #24292e;
  font-size: large;
  border-radius: 2px;
  padding: 4px 15px;
  text-decoration-line: none;
  transition: all 0.3s ease-in-out;
 }

 a:nth-child(1) {
  > i {
   font-size: 15px;
  }
 }

 a:nth-child(1):hover {
  border: 1px solid #e31b6d;
  background: #e31b6d;
  color: white;
  > i {
   color: white;
  }
 }

 a:nth-child(2):hover {
  background: #24292e;
  color: white;
  transition: all 0.3s ease-in-out;
 }

 a > i {
  margin-right: 5px;
 }

 a:nth-child(1) {
  margin-right: 20px;
 }
`;

function ProjectItem(props) {
 const { img, alt, heading, description, demo, github } = props;
 return (
  <Card data-aos="zoom-in-down" style={{height:"450px"}}>
   <a target="_blank" rel="noopener noreferrer" href={demo}>
    <img src={img} alt={alt} />
   </a>
   <div className="card-body">
    <h4>{heading}</h4>
    <p style={{height:"100px"}}>{description}</p>
    <NavButtonsWrapper>
     <a target="_blank" rel="noopener noreferrer" href={demo}>
      <i class="fas fa-external-link-alt"></i>
      Demo
     </a>
     <a target="_blank" rel="noopener noreferrer" href={github}>
      <i class="fab fa-github"></i>
      Github
     </a>
    </NavButtonsWrapper>
   </div>
  </Card>
 );
}

export default ProjectItem;
