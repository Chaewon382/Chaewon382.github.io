import { Box, Typography } from "@mui/material";
import TypeWriter from "./type-writer";

function Greeting() {
    
    const introList = ['Software Developer', 'AI/ML Engineer', 'Fullstack Developer', 'Data enthusiast'];

    return (
        <Box sx={{
            display: 'flex', 
            justifyContent:'center', 
            flexDirection: 'column', 
            alignItems:'center', 
            p: '50px'
        }}>
            <Typography variant='h5' color='secondary' sx={{pt: '100px'}}>Hello! </Typography>
            <Typography variant='h5' color='secondary'> My name is Chaewon, and I am a</Typography>
            <TypeWriter textList={introList} delay={100}/>
        </Box>
    )
}

export default Greeting