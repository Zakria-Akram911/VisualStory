import { Box, Typography, useMediaQuery } from "@mui/material"
import cardBottomImage from "../../assets/card-design.png"


const VisualizerCard = ({cardImage, text}: any) => {
    const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box className="cardBackground" 
    sx={{
        background: "rgba(40,40,40,0.56)", 
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center",
        borderRadius:"24px",
        p:"40px 0px",
        
        }}>
        <Box className="cardImage">
            <Box component="img" src={cardImage} />
        </Box>
        <Box className="cardText" sx={{display:"flex", justifyContent:"center", m:"25px 0px",maxWidth:"60%",}}>
            <Typography sx={{color: "#fff", textAlign:"center", fontSize: isMobile ? "20px":"24px"}}>{text}</Typography>
        </Box>
        <Box>
            <Box component="img" src={cardBottomImage} />
        </Box>
    </Box>
  )
}

export default VisualizerCard