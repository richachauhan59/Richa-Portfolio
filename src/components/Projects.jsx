import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import projects from '../data/projects.json';

const ProjectsGrid = styled.div`
 display: grid;
 align-items: center;
 justify-items: center;
 width: max-content;
 margin: 0 auto 50px auto;
 grid-column-gap: 50px;
 grid-auto-rows: 380px;

 @media (max-width: 733px) {
  grid-template-columns: repeat(1, 320px);
  grid-row-gap: 35px;
 }
 @media (min-width: 734px) {
  grid-template-columns: repeat(2, 320px);
  grid-row-gap: 120px;
 }
 @media (min-width: 1200px) {
  grid-template-columns: repeat(3, 320px);
  grid-column-gap: 80px;
  grid-row-gap: 120px;
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
 width: 100px;
 margin: 10px auto;
 background: #444649;
`;

const Wrapper = styled.div`
 background: #f5f5f5;
 margin-top: 80px;
 padding-bottom: 40px;
`;

function Projects() {
 return (
  <Wrapper>
   <Heading id="projects">
    <div
     data-aos="fade-right"
     data-aos-duration="1500"
     data-aos-easing="ease-out-back"
    >
     Projects
    </div>
    <Line
     data-aos="fade-left"
     data-aos-duration="1500"
     data-aos-easing="ease-out-back"
    />
   </Heading>
   <ProjectsGrid>
    {projects.map((project) => (
     <ProjectItem
      key={project.heading}
      img={project.img}
      alt={project.alt}
      heading={project.heading}
      description={project.description}
      demo={project.demo}
      github={project.github}
     />
    ))}
   </ProjectsGrid>
  </Wrapper>
 );
}

export default Projects;
