import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

const ExperienceSection = () => {
    const experiences = [
        {
          content:
            "As a working mom, bedtime stories became more of a routine than an adventure. That changed when I discovered the EnchantedPages.Ai Platform. Crafting characters and weaving stories became a magical bonding experience with my kids. Now, every night is a journey into fantastical worlds, making bedtime the highlight of our day!",
          author: "Sarah M.",
        },
        {
          content:
            "EnchantedPages.Ai brought a new dimension to our family time. My wife and I, both working professionals, struggled to find quality moments with our kids. The Virtual Storybook platform turned storytelling into an interactive adventure. The ease of using voice input made it accessible for our young ones, and the generated stories never cease to amaze us.",
          author: "Mark H.",
        },
        {
          content:
            "As a tech-savvy mom, I was skeptical about yet another platform for storytelling. EnchantedPages.Ai, however, exceeded all expectations. The fusion of advanced technology and classic storytelling is pure genius. The subscription model is worth every penny, unlocking features that deepen the storytelling experience. Now, screen time isn't just passive; it's an active engagement in creating magical stories with my kids.",
          author: "Sarah M.",
        },
      ];
  const isMobile = useMediaQuery("(max-width:900px)");
  const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1512px)');
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? "20px" :(mediumScreen ? "32px":"48px"),
          lineHeight:isMobile?"30px":"45px",
          color: `var(--Text, #F8F1E4)`,
          mt:mediumScreen ? 7:6
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile? "0px 10px" :"0px 42px" }}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
        Enchanted Experiences Shared by Our Community
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile? "0px 10px" :"0px 42px" }}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#F8F1E4",
            width: isMobile ? "98%":"45%",
            textAlign: "center",
            fontSize: isMobile ? "16px":mediumScreen ? "20px" :"24px",
            fontWeight: 400,
            lineHeight: mediumScreen ? "30px":"36px",
            mt:6
          }}
        >
          Read firsthand accounts of parents who found joy, creativity, and
          bonding through the magical journey of crafting and sharing stories on
          our platform.
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="space-evenly"
        spacing={isMobile ? 1:6}
        sx={{
          p: isMobile ?"0px 20px":mediumScreen ?"0px 60px":"0px 120px",
          mt: mediumScreen? 2:7,
          width:"100%"
        }}
      >
        
        {experiences.map((experience, index) => (
          <Grid 
          item
          xs={12}
          sm={6}
          md={5}
          lg={3.5}
          key={index}>
            <Typography
              sx={{
                color: "#F8F1E4",
                textAlign: "center",
                fontSize: mediumScreen ?"18px":"20px",
                fontWeight: 400,
                lineHeight: "29.5px",
              }}
            >
              {experience.content}
              <Typography sx={{ mt: 5, mb: mediumScreen ? 0:2,fontSize:mediumScreen ?"20px":"24px",lineHeight:"30.45px" }}>{experience.author}</Typography>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
