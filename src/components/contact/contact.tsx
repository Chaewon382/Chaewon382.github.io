import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import ContactInfo from './contact-info';

function Contact() {
    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems: 'center'
            }}
        >
            <Typography sx={{pb: '40px'}} color='primary' >
                Let's get in touch!
            </Typography>
            <Box sx={{ 
                display:'flex', 
                flexDirection:'row',
                justifyContent: 'space-evenly',
                alignItems: 'baseline',
                flexWrap: 'wrap'
            }}>
                <ContactInfo
                    icon={<PhoneIcon />}
                    text='Phone'
                    value='+1 (470)-601-4058'
                />
                <ContactInfo
                    icon={<EmailIcon />}
                    text='Email'
                    value='chaewon.park382@gmail.com'
                    link='mailto: chaewon.park382@gmail.com'
                />
                <ContactInfo
                    icon={<HomeIcon />}
                    text='Address'
                    value='1220 Mecaslin St NW, Atlanta, GA'
                />
                <ContactInfo
                    icon={<LinkedInIcon />}
                    text='LinkedIn'
                    value='https://www.linkedin.com/in/chaewon-park-432282195/'
                    link='https://www.linkedin.com/in/chaewon-park-432282195/'
                />
            </Box>
        </Box>
    )
}

export default Contact;