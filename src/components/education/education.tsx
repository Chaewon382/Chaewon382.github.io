import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { Education } from '../../types';
import CourseList from './course-list';

interface EducationComponentProps {
    educations: Education[]
}

function EducationComponent(props: EducationComponentProps) {
    const eds = props.educations
    return(
        <Timeline position="alternate-reverse">
        {props.educations.map((ed) => (
            <TimelineItem >
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <CourseList courses={ed.coursework}/>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            
            <TimelineContent 
                sx={{ 
                    py: '12px', 
                    px: 2, 
                    width: '1000px',
                    mt: '10px'
                }}
            >
                <Typography variant="h6" component="span">
                {ed.degree}
                </Typography>
                <Typography>@ {ed.university}</Typography>
                <Typography variant='caption'>{ed.date}</Typography>
                <Typography variant='body2' sx={{mt: '10px'}}>Specialization: {ed.specialization}</Typography>
                <Typography variant='body2'>Overall GPA: {ed.gpa}/4.0</Typography>
            </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
    );
}

export default EducationComponent;