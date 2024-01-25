import { Box, Typography } from "@mui/material";
import TypeWriter from "./type-writer";

function Greeting() {
    
    const introList = ['Software Developer', 'AI/ML Engineer', 'Fullstack Developer', 'Data Enthusiast'];

    return (
        <Box sx={{
            display: 'flex', 
            justifyContent:'center', 
            flexDirection: 'column', 
            alignItems:'center', 
            p: '50px',
            '@media (max-width: 600px)': {p: '150px 70px 150px 70px'}
        }}>
            <Typography variant='h5' color='secondary' sx={{pt: '100px'}}>Hello! </Typography>
            <Typography 
                variant='h5' 
                color='secondary' 
                sx={{'@media (max-width: 600px)': {textAlign: 'center', width: '100%'}}}
            > My name is Chaewon, and I am a</Typography>
            <TypeWriter textList={introList} delay={100}/>
        </Box>
    )
}

export default Greeting