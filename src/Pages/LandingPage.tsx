import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Layout from "../Pages/LayoutPages";
import CustomizeButton from "../Components/CustomizeButton";
import creativityOneImage from "../assets/creativity.png";
import creativityTwoImage from "../assets/creativity2.png";
import creativityThreeImage from "../assets/creativity3.png";
import CreateTaleSection from "../Components/LandingPage Components/CreateTaleSection";
import bgImage from "../assets/bgImage.png";
import headerbg from "../assets/headerbg.png";
import mountainRocks from "../assets/mountainRocks.png";
import ExperienceSection from "../Components/LandingPage Components/ExperienceSection";
import section4bg from "../assets/section4.png";
import FrequentlyQuestions from "../Components/LandingPage Components/FrequentlyQuestions";
import NavBar from "../Components/NavBar";
import linedecor1 from '../assets/lineDecor1.svg';
import linedecor2 from '../assets/lineDecor2.svg';
import rock from '../assets/rock.png';

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:1200px)");
  const mediumScreen = useMediaQuery(
    "(min-width:1201px) and (max-width:1512px)"
  );

  const gridsItemsContents = [
    {
      title: "Revolutionize Storytime",
      description:
        "Transform bedtime with AI-crafted tales, bringing your child's fantasies to life for a groundbreaking storytelling experience.",
      image: creativityOneImage,
    },
    {
      title: "Personalized Engagement",
      description:
        "Engage your child like never before by making them the hero in captivating, tailor-made stories, designed to spark their interest in storytime.",
      image: creativityTwoImage,
    },
    {
      title: "Quality One-on-One Time",
      description:
        "Elevate your quality time effortlessly (Ai does the heavy lifting!). Create stories together that your child adores, turning Storytime into an experience of joy and bonding they'll treasure.",
      image: creativityThreeImage,
    },
  ];
  return (
    <>
      <NavBar>
        <Box
          sx={{
            p: isMobile ? "2px 5%" : mediumScreen ? "2px 5%" : "2px 5%",
          }}
        >
          {/* <Typography
            sx={{
              color: "#FFF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: isMobile ? "40px" : mediumScreen ? "68px" : "88px",
              fontWeight: 400,
              lineHeight: isMobile ? "50px" : "94px",
            }}
          >
            EnchantedPages.Ai
          </Typography> */}
          <Typography
            sx={{
              pt: isMobile ? 1 : mediumScreen ? 2 : 7,
              color: "#FFF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: isMobile ? "25px" : mediumScreen ? "28px" : "28px",
              fontWeight: 400,
              lineHeight: isMobile ? "40px" : mediumScreen ? "40px" : "40px",
              width:isMobile ?  "100%": mediumScreen ? "43%" :"43%",
            }}
          >
            Create Heroic, Beautifully Illustrated Stories of Your Child,
            Powered by AI.
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              "-webkit-text-stroke-width": "0.25",
              "-webkit-text-stroke-color": "#FFF",
              fontSize: isMobile ? "12px" : mediumScreen ? "16px" : "16px",
              fontWeight: 400,
              lineHeight: mediumScreen ? "30px" : "30px",
              width: isMobile ? "100%" : mediumScreen ? "43%" : "43%",
              mt: 3,
              mb: 5,
            }}
          >
            EnchantedPages.AI effortlessly brings your child into the heart of
            their own stories. With just a few clicks, create captivating,
            beautifully illustrated tales where they're the hero. Elevate your
            one-on-one time through delightful storytelling they can’t get
            enough of.
          </Typography>

          <CustomizeButton buttontext="Create Now!" />
        </Box>
        <Box
          sx={{
            m: isMobile ? "10px 5%" : mediumScreen ? "50px 5%" : "50px 5%",
            p:'15px 0px',
           //border: "1px solid #000",
           boxShadow:"2px 2px 5px 0px rgba(0, 0, 0, 0.5)",
            background:
              "linear-gradient(180deg, rgba(249, 217, 153, 0.96) 0%, rgba(238, 200, 126, 0.96) 49%, rgba(239, 200, 122, 0.96) 52%, rgba(232, 195, 120, 0.96) 96%, rgba(237, 215, 171, 0.96) 99.99%, rgba(234, 184, 85, 0.00) 100%)",
          }}
        >
          <Box
            sx={{
              border: "1px solid #A8834D",
              m: "0px 15px",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: isMobile ? "center" : "flex-start",
                gap: isMobile ? "0px" : "20px",
                p: isMobile ? "0" : "30px 10px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {gridsItemsContents.map((item, index) => (
                <>
                  <Grid
                    key={index}
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      width: isMobile ? "100%" : "50%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#78573F",
                        textAlign: "center",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: isMobile ? "30px" : "32px",
                        fontWeight: 400,
                        lineHeight: "45px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#78573F",
                        textAlign: "center",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "30px",
                        width: isMobile ? "90%" : "75%",
                        mt: 2,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <img src={item.image} width="80%" />
                  </Grid>
                  {isMobile
                    ? null
                    : index < gridsItemsContents.length - 1 && (
                        <Grid>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="238"
                            viewBox="0 0 2 238"
                            fill="none"
                          >
                            <path
                              d="M1 0V237.328"
                              stroke="#80521A"
                              strokeWidth="0.5"
                            />
                          </svg>
                        </Grid>
                      )}
                </>
              ))}
            </Grid>
          </Box>
        </Box>
      </NavBar>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // width: "100%",
            // mt: "-21.5%",
          }}
        >
          <hr style={{width:'95%', border:"2px solid #ECBC95",margin:0}}/>
          <Box sx={{display:"flex",
        alignItems:"flex-end",mt:'-3%'}}>
          <img src={linedecor1} width='3%' style={{marginLeft:"5%", marginBottom:"-2.4%"}}/>
          <img src={linedecor1}  width='3%' style={{marginLeft:"10%", marginBottom:"-1.5%"}}/>
          <img src={linedecor2}  width='6%' style={{marginLeft:"20%", marginBottom:"-1.2%"}}/>
          <img src={linedecor2}  width='8%' style={{marginLeft:"-0.9%", marginBottom:"-2.5%"}}/>
          <img src={linedecor2}  width='6%' style={{marginLeft:"-0.9%", marginBottom:"-1.2%"}}/>
          <img src={linedecor1}  width='3%' style={{marginLeft:"22%", marginBottom:"-1.5%"}}/>
          </Box>
          <img src={rock}  width='10%' style={{marginLeft:"90%",marginTop:"-12.6%"}}/>
          {/* <img src={designLine} width="100%" /> */}
        </Box>
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            mt: "-1.3%",
            pt: "10vh",
            pb: isMobile ? 5 : 12,
          }}
        >
          <CreateTaleSection />
        </Box>

        <Box
          sx={{
            background: `linear-gradient(0deg, rgba(48, 48, 48, 0.20) 0%, rgba(48, 48, 48, 0.20) 100%), url(${headerbg})`,
            height: isMobile ? "350px" : "909px",
            backgroundSize: "cover", 
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            pt:isMobile?"7vh" :"11vh",
            
         
          }}
        >
           <Typography
            sx={{
              textAlign: "center",
              display: "flex",
              width: "100%",
              mb:4,
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "20px" : mediumScreen ? "30px" : "48px",
              lineHeight: isMobile ? "30px" : "45px",
              color: `var(--Text, #F8F1E4)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="325"
              height="3"
              viewBox="0 0 203 3"
              fill="none"
              style={{ margin: isMobile ? "0px 10px" : "0px 42px" }}
            >
              <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
            </svg>
            Make Bedtime Stories Unforgettable 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="325"
              height="3"
              viewBox="0 0 203 3"
              fill="none"
              style={{ margin: isMobile ? "0px 10px" : "0px 42px" }}
            >
              <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
            </svg>
          </Typography>
          {/* <Box sx={{
            height:"800px",
            alignItems:"center",
            display:"flex",
            justifyContent:"center"
          }}> */}
           
              <CustomizeButton buttontext="Try Now!" />
              {/* </Box> */}
           
        </Box>
        <img
          src={mountainRocks}
          width={isMobile ? "300px" : "500px"}
          style={{ marginTop: isMobile ? "-80px" : "-130px" ,zIndex:1}}
        />
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            mt: isMobile ? "-65px" : "-104.5px",
            pt: "6vh",
            pb: 10,
          }}
        >
          <ExperienceSection />
        </Box>
        <Box
          sx={{
            background: `url(${section4bg})`,
            backgroundRepeat: "no-repeat",
            // display:"flex",
            // alignItems:"center",
            // flexDirection:"column",
            backgroundPosition:"50% 50%",
            backgroundSize: "cover",
            Opacity: "83%",
            p: isMobile ? "6vh" : mediumScreen ? "7vh" : "5vh",
            height: isMobile ? "380px" : mediumScreen ? "800px" : "1086px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "20px" : mediumScreen ? "30px" : "48px",
              lineHeight: isMobile ? "30px" : "45px",
              color: `var(--Text, #F8F1E4)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="325"
              height="3"
              viewBox="0 0 203 3"
              fill="none"
              style={{ margin: isMobile ? "0px 10px" : "0px 42px" }}
            >
              <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
            </svg>
            Turn Imagination into Stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="325"
              height="3"
              viewBox="0 0 203 3"
              fill="none"
              style={{ margin: isMobile ? "0px 10px" : "0px 42px" }}
            >
              <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
            </svg>
          </Typography>
          {/* <Box
            sx={{
              background: `url(${section4bgUp})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: isMobile ? "80%" : "100%",
              mt: isMobile ? 2 : 8,
              position: "relative",
            }}
          > */}
            <Box
              sx={{
                position: "absolute",
                bottom: "50%", // Adjust the position as needed
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Center horizontally
              }}
            >
              <CustomizeButton buttontext="Get Started!" />
            </Box>
          {/* </Box> */}
        </Box>
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            pt: "10vh",
            pb: 6,
          }}
        >
          <FrequentlyQuestions />
        </Box>
      </Layout>
    </>
  );
};

export default LandingPage;
