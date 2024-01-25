import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';
import { Header, Note, ExperienceComponent, ProjectComponent, SectionHeader, EducationComponent, About, Contact, ScrollButton, Greeting } from './components';
import { EXPERIENCES } from './data/experience';
import { PROJECTS } from './data/projects';
import { EDUCATIONS } from './data/education';

function App() {
  return (
    <Box sx={{mb: '200px', overflowX: 'hidden'}} >
      <Header />
      <Greeting />

      <SectionHeader id='about' title='ABOUT ME'>
        <About />
      </SectionHeader>

      <SectionHeader id='ed' title='EDUCATION'>
        <EducationComponent educations={EDUCATIONS} />
      </SectionHeader>

      <SectionHeader id='exp' title='EXPERIENCE'>
        {EXPERIENCES.map((exp) => (
          <ExperienceComponent exp={exp} />
        ))}
      </SectionHeader>

      <SectionHeader id='proj' title='PROJECTS'>
        {PROJECTS.map((proj) => (
          <ProjectComponent proj={proj}/>
        ))}
      </SectionHeader>

      <SectionHeader id='contact' title='CONTACT'>
        <Contact />
      </SectionHeader>

      {/* <Typography variant='caption'> copyright @ chaewon 2024</Typography> */}
      <ScrollButton />
    </Box>
  );
}

export default App;
