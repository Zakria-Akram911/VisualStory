import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import footerImg from "../assets/footerImage.png";
import bgImage from "../assets/bgImage.png";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:1200px)");
  const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1512px)');


  const listItems = [
    "FAQs",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <Box
      sx={{
        background: "#EDD4A8",
        display: "flex",
        p: isMobile ? "2vh" : "6vh",
        backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
      }}
    >
      <Grid
      container
      justifyContent={isMobile? "":"space-around"}
      spacing={isMobile ? 2:10}
        sx={{
          // display: "inline-flex",
          // justifyContent: "center",
          // flexDirection: isMobile ? "column" : "row",
          // width: isMobile ?"60%" :"100%",
        }}
      >
        <Grid
        item
       md={4}
        lg={4}
        sx={{
          mt:isMobile ? 3:14
        }}
        
        >
          <Typography
            sx={{
              color: "#754B17",
              textAlign: "center",
              fontFamily: "Times New Roman",
              fontSize: isMobile ? "24px":mediumScreen? "28px":"36px",
              fontweight: 700,
              lineHeight: "24px",
            }}
          >
           EnchantedPages.Ai
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display:"flex",
            alignItems:"center"
          }}
          lg={4}
        >
          <List>
            {listItems.map((item) => (
              <ListItem
                sx={{
                  color: "#754B17",
                  textAlign: "center",
                  fontFamily: "Times New Roman",
                  fontSize: isMobile ? "16px":"32px",
                  fontWeight: 400,
                  lineHeight: "45px",
                  p:isMobile ? "0px" :"1.5vh 0"
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
        {isMobile ? null : (
          <Grid
          item
          lg={4}>
            {isMobile ? <></> : <img src={footerImg} width="100%" />}
          </Grid>
        )}
      </Grid>

      {isMobile ? <img src={footerImg} width="50%"  style={{marginLeft:"-10px"}}/> : <></>}
    </Box>
  );
};

export default Footer;
