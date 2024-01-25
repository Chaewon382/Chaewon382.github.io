import { Box, Typography } from "@mui/material";


function Note() {
    return (
        <Box sx={{
            display: 'flex', 
            justifyContent:'center', 
            flexDirection: 'column', 
            alignItems:'center', 
            p: '50px'
        }}>
            <Typography variant='h6'>Note: The website is under redesign phase (1/24/2024~), so some features currently may not work. </Typography>
            <Typography variant='h6'> Redesign will be completed by 1/30/2024, so please bare with me! </Typography>
            <Typography variant='h6'> For now, the website does not support mobile views. Please use PC for better experience. </Typography>
        </Box>
    );
}

export default Note