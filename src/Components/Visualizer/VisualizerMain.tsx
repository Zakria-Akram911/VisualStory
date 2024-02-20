import { Box, Typography, useMediaQuery } from "@mui/material"
import VisualizerCard from "./VisualizerCard"
import newCardImage from "../../assets/visualizer-new.png"
import savedCardImage from "../../assets/visualizer-saved.png"
import { useNavigate } from "react-router"


const VisualizerMain = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const isMediumScreen = useMediaQuery("(min-width:901px) and (max-width:1501px)")
    const navigate = useNavigate()
    const newClicked = () => {
        navigate("/create-new-story")
    }   
    const savedClicked = () => {
        navigate("/saved-stories")
    }
  return (
    <Box className="visualizerMain" sx={{mt:"20px"}}>
        <Typography  
        variant='h4' 
        align='center' 
        sx={{
            color:"#fff", 
            fontStyle:"italic", 
            fontSize: isMobile ? "25px" : isMediumScreen ? "30px" : "40px", 
            fontWeight:"500"}}
            >
            Do you want to continue by?
        </Typography>
        <Box className="visualizerCards" 
        sx={{
            display:"flex", 
            alignItems:"center", 
            gap:"30px", 
            justifyContent:"center",
            m:"30px 0px",
            flexWrap: isMobile ? "wrap" : "no-wrap"
        }}
        >
            <Box sx={{
                maxWidth:isMobile ? "90%" : isMediumScreen ? "40%" : "28%",
                cursor:"pointer"
            }} 
                onClick={newClicked}
                >
                <VisualizerCard cardImage={newCardImage} text="Create a brand new character,fueled from your very own imagination" />
            </Box>
            <Box sx={{
                maxWidth:isMobile ? "90%" : isMediumScreen ? "40%" : "28%",
                cursor:"pointer"
            }} 
                onClick={savedClicked}
                >
                <VisualizerCard cardImage={savedCardImage} text="Browse through existing characters you have created in your old stories" />
            </Box>
        </Box>
    </Box>
  )
}

export default VisualizerMain