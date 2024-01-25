import React from 'react';
import { Card, Typography, List, ListItem, Button, Box } from '@mui/material';
import { Experience } from '../../types';
import { Details } from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';

interface ExperienceComponentProps {
    exp: Experience
}


function ExperienceComponent(props: ExperienceComponentProps) {
    const exp: Experience = props.exp
    const handleClick = () => {
        // TODO: Fix hardcoded value
        if (exp.company = 'Samsung Electronics') {
            window.open(require('../../documents/samsung-certificate.pdf'));
        }
    }

    return (
        <Card 
            sx={{
                p: '25px', 
                m:'15px 30px 0px 30px', 
                backgroundColor: '#D3D3D3',
                maxWidth: '800px'
            }}> 
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <Typography 
                variant='h6'
                sx={{ fontWeight: 'bold' }}
            >
                    {exp.position}
                </Typography>
                <Typography variant='caption'>
                    {exp.duration}
                </Typography>
            </Box>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
                { exp.team ? ` @ ${exp.company}, ${exp.team}` : ` @${exp.company}` }
            </Typography>
            <List sx={{listStyleType: 'disc', pl: 4}}>
                {exp.explanation.map((detail, index) => (
                <ListItem key={index} sx={{ display: 'list-item' }}>
                    {detail}
                </ListItem>
                ))}
                {exp.techstack ? 
                <ListItem sx={{ display: 'list-item' }}> Relevant Skills: {exp.techstack} </ListItem> : <></>}
            </List>
            {
                exp.link ? 
                <Button 
                    variant="outlined" 
                    size='small' 
                    startIcon={<DescriptionIcon />}
                    sx={{ mt: '20px' }}
                    color='secondary'
                    onClick={handleClick}
                >
                    {exp.linkText }
                </Button> : <></>
            }          
        </Card>
    )
}

export default ExperienceComponent