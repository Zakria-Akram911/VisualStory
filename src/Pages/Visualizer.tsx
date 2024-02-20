import NavBar from "../Components/NavBar"
import Layout from "./LayoutPages"
import {Box, useMediaQuery} from "@mui/material"
import headerbg from "../assets/visualizer-bg.png"
import VisualizerMain from "../Components/Visualizer/VisualizerMain"
import mountainRocks from "../assets/mountainRocks.png"


const Visualizer = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const isMedium = useMediaQuery("(min-width: 901px) and (max-width: 1501px)")
  return (
    <Layout>
        <NavBar background={headerbg}>
            <Box sx={{position:"relative"}}>
                <VisualizerMain />
                <Box component="img" src={mountainRocks} 
                sx={{position: "absolute",
                    bottom: isMobile ? "-200px" : isMedium ? "-220px" :"-215px",
                    left: isMobile ? "-270px" :isMedium ? "-240px" :  "-230px",
                    height: "236px"
                }}
                />
            </Box>
        </NavBar>
    </Layout>
  )
}

export default Visualizer