import React from 'react'
import {Box, Button, Typography } from '@mui/material'

function Header() {
    return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: 'white',
        position: 'fixed',
        width:'100%',
        zIndex:'1',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }}>
        <Typography variant='h4' color='primary'> Chaewon's Portfolio. </Typography>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            '@media (max-width: 600px)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
            },
        }}> 
            <Button href='#about'>About</Button>
            <Button href='#ed'>Education</Button>
            <Button href='#exp'>Experience</Button>
            <Button href='#proj'>Projects</Button>
            <Button href='#contact'>Contacts</Button>
        </Box>
    </Box>)
}

export default Header