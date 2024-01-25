import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface ContactInfoProps {
    icon: React.ReactNode,
    text: string,
    value: string,
    link?: string
}

function ContactInfo(props: ContactInfoProps) {
    return (
        <Box sx={{ 
            display:'flex', 
            flexDirection:'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center', // Center the text horizontally
            width: '20%',
            margin: '20px'
        }}>
            <a href={props.link}>
            <Avatar 
                color='primary' 
                sx={{width: '5rem', height: '5rem', m:'20px'}}>
                {props.icon}
            </Avatar>
            </a>
            <Typography color='primary' fontWeight='bold' sx={{m:'15px'}} >{props.text}</Typography>
            <Typography color='primary' sx={{m:'15px'}}>{props.value}</Typography>
            
        </Box>
    )
}

export default ContactInfo