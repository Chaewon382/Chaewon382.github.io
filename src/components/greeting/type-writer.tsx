import React, { useState, useEffect } from 'react';
import { Typography, Box } from "@mui/material";

interface TypeWriterProps {
    textList: string[];
    delay: number;
}

function TypeWriter(props: TypeWriterProps) {
    const [currentText, setCurrentText] = useState(' ');
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentListIndex, setCurrentListIndex] = useState(0);
  
    useEffect(() => {
        if (currentIndex < props.textList[currentListIndex].length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + props.textList[currentListIndex][currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, props.delay);
      
          return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setCurrentListIndex((currentListIndex + 1) % props.textList.length);
                setCurrentIndex(0);
                setCurrentText(' ');
            }, 3000); // Wait for 3 seconds
    
            return () => clearTimeout(resetTimeout);
        }
      }, [currentIndex, props.delay, props.textList]);

    

    return (
        <Box sx={{height: '50px'}}>
            <Typography 
                variant='h2' 
                color='primary'
                sx={{p: '20px', fontWeight: 'bold', '@media (max-width: 600px)': {textAlign: 'center', pb: '500px'}}}
            > {currentText} 
            </Typography>
        </Box>
    )
}

export default TypeWriter;