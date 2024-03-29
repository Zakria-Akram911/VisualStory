import NavBar from "../Components/NavBar"
import Layout from "./LayoutPages"
import bgImage from "../assets/story-output-bg.png"
import StoryOutputMain from "../Components/StoryOutput/StoryOutputMain"
import { Box } from "@mui/material"


const StoryOutput = () => {
  console.log("story-output-page")
  return (
    <Layout>
      <NavBar background={bgImage}>
        <Box
          sx={{
          }}
        >
          <StoryOutputMain />
        </Box>
      </NavBar>
    </Layout>
  )
}

export default StoryOutput