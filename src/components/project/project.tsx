import { Card, Typography, List, ListItem, Button, Box } from '@mui/material';
import { Project } from '../../types';
import DescriptionIcon from '@mui/icons-material/Description';

interface ProjectComponentProps {
    proj: Project
}


function ProjectComponent(props: ProjectComponentProps) {
    const proj: Project = props.proj

    const handleClick = () => {
        // TODO: Fix hardcoded value
        if (proj.title == 'Portfolio Webpage (this!)') {
            window.open('https://github.com/Chaewon382/Chaewon382.github.io/tree/main', '_blank');
        } else if (proj.title == 'Unveiling Typicality Effects in Vision Models') {
            window.open(require('../../documents/TypEffectReport.pdf'), '_blank');
        } else if (proj.title == 'Neural Network Complexity and Generalizability') {
            window.open(require('../../documents/MLTheoryReport.pdf'), '_blank');
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
                    {proj.title}
                </Typography>
            </Box>
            <Typography variant='caption'>
                {proj.duration}
            </Typography>
            <List sx={{listStyleType: 'disc', pl: 4}}>
                {proj.explanation.map((detail, index) => (
                <ListItem key={index} sx={{ display: 'list-item' }}>
                    {detail}
                </ListItem>
                ))}
                {proj.techstack ? 
                <ListItem sx={{ display: 'list-item' }}> Relevant Skills: {proj.techstack} </ListItem> : <></>}
            </List>
            {
                proj.linkText ? 
                <Button 
                    variant="outlined" 
                    size='small' 
                    startIcon={<DescriptionIcon />}
                    sx={{ mt: '20px' }}
                    color='secondary'
                    onClick={handleClick}
                >
                    {proj.linkText}
                </Button> : <></>
            }       
        </Card>
    )
}

export default ProjectComponent