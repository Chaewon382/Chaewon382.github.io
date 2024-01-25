import { Card, Typography, List, ListItem, Button, Box } from '@mui/material';
import { Project } from '../../types';
import DescriptionIcon from '@mui/icons-material/Description';

interface ProjectComponentProps {
    proj: Project
}


function ProjectComponent(props: ProjectComponentProps) {
    const proj: Project = props.proj

    // const handleClick = async () => {
    //     try {
    //         const module = await import(`${proj.link}`);
    //         window.open(require(module.default), '_blank');
    //     } catch (error) {
    //         console.error('Error loading module:', error);
    //     }
    // };

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
            </List>
            {
                proj.linkText ? 
                <Button 
                    variant="outlined" 
                    size='small' 
                    startIcon={<DescriptionIcon />}
                    sx={{ mt: '20px' }}
                    color='secondary'
                    onClick={() => window.open(`/static/documents/${proj.link}`, '_blank')}
                >
                    {proj.linkText}
                </Button> : <></>
            }       
        </Card>
    )
}

export default ProjectComponent