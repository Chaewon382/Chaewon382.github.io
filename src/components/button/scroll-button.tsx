import React, {useState} from 'react';
import {IconButton, Button, Typography} from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const ScrollButton = () =>{ 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  };
  
  return (
    <Button 
        sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            opacity: '80%'
        }}
        startIcon={<ExpandLessIcon />}
        onClick={scrollToTop}
    >
      <Typography variant='caption'>Move to Top</Typography>
    </Button>
  ); 
} 
  
export default ScrollButton;