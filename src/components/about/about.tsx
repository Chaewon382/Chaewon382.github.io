import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

function About() {
    return (
        <Box sx={{ 
                display:'flex', 
                flexDirection: 'row', 
                p:'10px',
                flexWrap:'wrap',
                justifyContent: 'center'
            }}
        >
            <img 
                style={{ height: '400px', paddingBottom: '10px' }}
                src={require('../../documents/profile-pic.PNG')} 
            />
            <Box
                sx={{width: '500px', pl:'40px', '@media (max-width: 600px)': {width: '100%', p:'0px'}}}
            >
                <Typography sx={{pb:'10px'}}>
                    My name is Chaewon Park. 
                    I recently graduated from Georgia Institute of Technology with a Master's degree in Computer Science, 
                    specializing in Machine Learning. 
                    I achieved a Bacheler's degree in the same field in May 2023, 
                    with Information/Internetworks and Intelligence specializations. 
                    I am currently looking for a full-time Software Engineer position starting in early 2024. 
                    Positions I am interested in include, but not limited to, AI/DL architects, Back-end web/app developer and Front-end web/app developer.
                </Typography>
                <Typography sx={{pb:'10px'}}>
                    Through my education, I gained well-rounded knowledge and skills in utilizing various programming languages(Java, Python, C, C++, Typescript, etc) 
                    as well as libraries/frameworks (PyTorch, Tensorflow, scikit-learn, ReactJS, Node.js, etc). 
                    I value challenging new problems with a keen attention to details and I can assimilate new information quickly and flawlessly. 
                    Additionally, I am confident that my proven communication skills and team-based work ethics could make me an ideal team member.
                </Typography>
                <Typography sx={{pb:'10px'}}>
                    I am an international student holding a F-1 visa. I don't need any immediate visa sponsorships as I am authorized to work in the U.S using a valid OPT for up to 3 years, 
                    but I may need a sponsorship in the future. 
                    I am willing to relocate, and open to both on-site and remote positions.    
                </Typography>
                <Button
                    startIcon={<DescriptionIcon/>}
                    variant='outlined'
                    onClick={() => window.open(require('../../documents/Resume_Jan24.pdf'), "_blank")}
                > DOWNLOAD RESUME </Button>
            </Box>
        </Box>
        
    )
}

export default About;