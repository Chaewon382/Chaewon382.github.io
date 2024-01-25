import React from 'react';
import { Box, Typography } from '@mui/material';

interface CourseListProps {
    courses?: string[]
}
function CourseList(props: CourseListProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection:'column', pt: '20px', pb: '20px'}}>
            <Typography variant='caption' fontWeight='bold'>
                Completed Relevant Coursework
            </Typography>
            {props.courses?.map((course) => (
                <Typography variant='caption'>
                {course} </Typography>
            ))}
        </Box>
    )
}

export default CourseList