import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface ContactInfoProps {
    icon: React.ReactNode,
    text: string,
    value: string
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
            <Avatar 
                color='primary' 
                sx={{width: '5rem', height: '5rem', m:'20px'}}>
                {props.icon}
            </Avatar>
            <Typography color='primary' fontWeight='bold' sx={{m:'15px'}} >{props.text}</Typography>
            <Typography color='primary'>{props.value}</Typography>
        </Box>
    )
}

export default ContactInfo