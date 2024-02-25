import { Box, Typography, useMediaQuery } from "@mui/material";
import CreateStoryWithStorylineForm from "./CreateStoryWithStorylineForm";
import bgImage from "../../assets/create-story-bg.png";
import storylineImage from "../../assets/create-story-storyline.png";
import mainCharacterImage from "../../assets/create-story-main-character.png";
import CreateNewCharacterForm from "./CreateNewCharacterForm";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomizeButton from "../CustomizeButton";

const CreateStoryMain = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isMedium = useMediaQuery("(min-width: 901px) and (max-width: 1501px)");
  const [isStorylineActive, setIsStorylineActive] =
    React.useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const onStorylineClickHandler = () => {
    if (!isStorylineActive) {
      setIsStorylineActive(true);
      // setFormSubmitted(false)
    }
  };
  const onMainCharacterClickHandler = () => {
    if (isStorylineActive) {
      setIsStorylineActive(false);
      // setFormSubmitted(false)
      // console.log(isStorylineActive)
    }
  };

  const handleClick = (e: any) => {
    setFormSubmitted(true);
    console.log(formSubmitted);
    if(isStorylineActive){
        navigate("/your-story/1");
    }
    e.preventDefault();
  };
  return (
    <>
      <Box
        sx={{
          background: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "24px",
          padding: isMobile ? "40px 20px" : "60px 150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Page Headings */}
        <Box className="main-Heading" sx={{ textAlign: "center" }}>
          <Typography
            color="#6E4500"
            sx={{
              // lineHeight: isMobile ? "50px" : isMedium ? "70px" : "80px",
              fontSize: isMobile ? "20px" : isMedium ? "34px" : "40px",
            }}
          >
            The next step?
          </Typography>
          <Typography
            color="#6E4500"
            sx={{
              // lineHeight: isMobile ? "50px" : isMedium ? "70px" : "80px",
              fontSize: isMobile ? "18px" : isMedium ? "34px" : "40px",
              WebkitTextStroke: "0.25px #6E4500",
            }}
          >
            Choose what you would like to focus on
          </Typography>
          <Typography
            color="#6E4500"
            sx={{
              // lineHeight: isMobile ? "50px" : isMedium ? "70px" : "80px",
              fontSize: isMobile ? "14px" : isMedium ? "18px" : "20px",
            }}
          >
            Fill the following according to your preference
          </Typography>
        </Box>

        {/* Options Buttons to fill form for Create New Story or Create New Character */}
        <Box
          className="Option-to-proceed-btn"
          sx={{
            display: "flex",
            gap: "20px",
            m: "40px 0px",
          }}
        >
          <Box
            className="storyline-option"
            sx={{
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: isStorylineActive
                ? "rgba(40, 40, 40, 0.29)"
                : "",
              p: isMobile ? "10px" : "30px 60px",
              borderRadius: "24px",
            }}
            onClick={onStorylineClickHandler}
          >
            <Box
              component="img"
              src={storylineImage}
              sx={{
                width: isMobile ? "100px" : "auto",
              }}
            />
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: isMobile ? "20px" : isMedium ? "28px" : "32px",
                color: isStorylineActive ? "white" : "#80521A",
                WebkitTextStroke: isStorylineActive ? "0.5px white" : "",
              }}
            >
              Storyline
            </Typography>
          </Box>
          <Box
            className="main-character-option"
            sx={{
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: !isStorylineActive
                ? "rgba(40, 40, 40, 0.29)"
                : "",
              p: isMobile ? "10px" : "30px 60px",
              borderRadius: "24px",
            }}
            onClick={onMainCharacterClickHandler}
          >
            <Box
              component="img"
              src={mainCharacterImage}
              sx={{
                width: isMobile ? "100px" : "auto",
              }}
            />
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: isMobile ? "20px" : isMedium ? "28px" : "32px",
                color: !isStorylineActive ? "white" : "#80521A",
                WebkitTextStroke: !isStorylineActive ? "0.5px white" : "",
              }}
            >
              Main Character
            </Typography>
          </Box>
        </Box>

        {isStorylineActive ? (
          //Create a Story with Storyline
          <Box className="storyline-form" sx={{ width: "100%" }}>
            {/* <CreateStoryWithStorylineForm formSubmitted={isStorylineActive ? formSubmitted : false} setFormSubmitted={setFormSubmitted} /> */}
            <CreateStoryWithStorylineForm
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
          </Box>
        ) : (
          // Create a new Character
          <Box className="main-character-form" sx={{ width: "100%" }}>
            <CreateNewCharacterForm
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
            {/* <CreateNewCharacterForm formSubmitted={isStorylineActive ? false : formSubmitted} 
                setFormSubmitted={setFormSubmitted}
                /> */}
          </Box>
        )}
      </Box>
      <Box sx={{ textAlign: "center", mt: "50px" }}>
        <Box onClick={handleClick}>
          <CustomizeButton buttontext="GENERATE" />
        </Box>
      </Box>
    </>
  );
};

export default CreateStoryMain;
