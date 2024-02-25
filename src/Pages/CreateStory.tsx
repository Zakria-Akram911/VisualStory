import { Box, useMediaQuery} from "@mui/material"
// import CreateStoryWithStoryline from "../Components/CreateStory/CreateStoryWithStoryline"
import bgImage from "../assets/create-story-bg-main.png"
import NavBar from "../Components/NavBar"
import CreateStoryMain from "../Components/CreateStory/CreateStoryMain"
import Layout from "./LayoutPages"
// import CustomizeButton from "../Components/CustomizeButton"
// import React from "react"
import treebg from "../assets/tree.png"
import rock from "../assets/rock.png"
import mountainRock from "../assets/mountainRocks.png"
// import { useNavigate } from "react-router"


const CreateStory = () => {
    // const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false)
    // const navigate = useNavigate()
    const isMobile = useMediaQuery("(max-width: 900px)");
    // const isMedium = useMediaQuery("(min-width: 901px) and (max-width: 1501px)")
    // const handleClick = (e: any)=>{
    //     setFormSubmitted(true)
    //     console.log(formSubmitted)
    //     navigate('/my-stories')
    //     e.preventDefault()
    // }
  return (
    <Layout>
    <NavBar background={bgImage}>
        <Box sx={{display:"flex", justifyContent:"center", position: "relative"}}>
            <Box sx={{width: isMobile ? "90%" : "80%", zIndex:2}}>
                {/* Main Component for the Page Content */}
                {/* <CreateStoryMain  formSubmitted={formSubmitted} setFormSubmitted= {setFormSubmitted}/> */}
                <CreateStoryMain />

                {/* <Box sx={{textAlign:"center", mt:"50px"}}>
                    <Box onClick={handleClick}>
                        <CustomizeButton buttontext = "GENERATE"  />
                    </Box>
                </Box> */}
                <Box 
                    component="img" 
                    src={treebg}
                    sx={{
                        position: "absolute",
                        top: "0",
                        left: "-20px",
                        zIndex: "-1",
                        width: isMobile ? "200px": "604"
                    }}
                    />
                <Box 
                    component="img" 
                    src={rock} 
                    sx={{
                        position: "absolute",
                        bottom: "23%",
                        right:"0px",
                        zIndex: isMobile ? "-1" : "3 "  
                    }}
                    />
                <Box 
                    component="img" 
                    src={mountainRock}
                    sx={{
                        position: "absolute",
                        bottom: isMobile ? "-130px" : "-210px",
                        left: isMobile ? "-90px" : "-280px",
                        width: isMobile ? "280px" : "600px"
                    }}
                    />
            </Box>
        </Box>
    </NavBar>
    </Layout>
  )
}

export default CreateStory