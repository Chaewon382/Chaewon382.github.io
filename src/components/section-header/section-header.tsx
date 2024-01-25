import {Box, Typography} from '@mui/material';
import React from 'react';

interface SectionHeaderProps {
    id: string,
    title: string,
    children: React.ReactNode
}

function SectionHeader(props: SectionHeaderProps) {
    return (
        <div id={props.id}>
            <Box
                sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    p:'10px',
                    mt: '100px'
                }}>
                    <Typography variant='h4' fontWeight='bold' sx={{mb: '20px'}}>{props.title}</Typography>
                    {props.children}
            </Box>
        </div>
        
    )
}

export default SectionHeader