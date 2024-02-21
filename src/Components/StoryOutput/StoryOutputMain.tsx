import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material"
import StoryOutputButton from "./StoryOutputButton"
import bookImage from "../../assets/story-output-book.png"
import imageUrl1 from "../../assets/story-output-image1.png"
import imageUrl2 from "../../assets/story-output-image2.png"
import React from "react"

let apiData = {
        id: 1,
        title: "Jacob's Pirate Quest for the Golden Anchor",
        imageUrl1:  imageUrl1,
        imageUrl2: imageUrl2,
        pageText1: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
        pageText2: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life."
}

const StoryOutputMain = () => {
    const [data, setData] = React.useState(apiData);
    const isMobile = useMediaQuery("(max-width: 900px)");
    const mediumScreen = useMediaQuery("(min-width:901px) and (max-width:1501px)");

    const prevPageClickHandle = () => {
        // Write logic for handling click on previous button
        apiData = {
            id: 2,
            title: "Jacob Pirate Quest for the Golden Anchor",
            imageUrl1:  imageUrl1,
            imageUrl2: imageUrl2,
            pageText1: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
            pageText2: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life."
        }
        setData(apiData)
    };
    const nextPageClickHandle = () =>{
        // Write logic for handling click on next button
        apiData = {
            id: 3,
            title: "Jacob's Pirat Quest for the Golden Anchor",
            imageUrl1:  imageUrl1,
            imageUrl2: imageUrl2,
            pageText1: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
            pageText2: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life."
        }
        setData(apiData)
    };
  return (
    <Box className="story-output-main">
        <Box className="story-output-btns">
            <Grid container columnGap={5} justifyContent="center">
                <Grid item>
                    <Button onClick={prevPageClickHandle}>
                        <StoryOutputButton buttontext="Previous" />
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={nextPageClickHandle}>
                        <StoryOutputButton buttontext="Next" />
                    </Button>
                </Grid>
            </Grid>
        </Box>
        <Box className="story-output-content"
            sx={{
                maxWidth:mediumScreen ? "1100px" : "1300px", 
                m:"40px auto"

            }}
        >
            <Box 
                className="story-output-bg" 
                sx={{
                    background:`url(${bookImage})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:isMobile ? "cover" : "contain",
                    width:"100%"
                }}
            >
                <Box 
                    className="story-all-content"
                    sx={{
                        padding:isMobile ? "20px 20px 20px 80px" : "100px 130px"
                    }}
                >
                    <Box className="story-title">
                        <Typography
                            sx={{
                                color:"#936037",
                                fontSize: isMobile ? "24px" : mediumScreen ? "34px" : "40px",
                                maxWidth: isMobile ? "90%" : "40%"
                            }}
                        >
                            {data.title}
                        </Typography>
                    </Box>
                    <Grid 
                        container
                        justifyContent="space-between" 
                        sx={{
                            // maxWidth:"60%",
                            // m: "0 auto"
                        }}
                    >
                        <Grid item xs={12} md={5.3} lg={5.3} mt="50px">
                            <Box className="page1-content" mb={isMobile ? "20px" :"40px" }>
                                <Typography
                                    sx={{
                                        fontSize: isMobile ? "14px" : mediumScreen ? "18px" : "20px",
                                        color: "#936037",
                                        maxWidth:"90%"
                                    }}
                                >
                                    {data.pageText1}
                                </Typography>
                            </Box>
                            <Box className="page1-image">
                                <Box 
                                    component="img" 
                                    src={data.imageUrl1}
                                    sx={{
                                        objectFit:"cover",
                                        width:"100%"
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5.3} lg={5.3}>
                            <Box className="page2-image" mb="40px">
                                <Box 
                                    component="img" 
                                    src={data.imageUrl2}
                                    sx={{
                                        objectFit:"cover",
                                        width:"100%"
                                    }}
                                    />
                            </Box>
                            <Box className="page2-content">
                                <Typography
                                    sx={{
                                        fontSize: isMobile ? "14px" : mediumScreen ? "18px" : "20px",
                                        color: "#936037",
                                        maxWidth:"90%"
                                    }}
                                >
                                    {data.pageText2}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default StoryOutputMain