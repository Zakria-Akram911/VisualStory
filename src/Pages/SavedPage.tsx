import NavBar from "../Components/NavBar"
import Layout from "./LayoutPages"
import bgImage from "../assets/saved-option-bg.png"
import sectionBgImage from "../assets/saved-section-bg.png"
import { Box } from "@mui/material"


const SavedPage = () => {
  return (
    <Layout>
      <NavBar background={bgImage}>
        <Box 
          sx={{
            display:"flex",
            justifyContent:"center"
        }}
        >
          <Box sx={{minWidth:"80%", maxWidth:"80%"}}>
            <Box 
              sx={{
                background: `url(${sectionBgImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
              }}
            >
              okay
            </Box>
          </Box>
        </Box>
      </NavBar>
    </Layout>
  )
}

export default SavedPage