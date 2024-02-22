import NavBar from "../Components/NavBar"
import Layout from "./LayoutPages"
import bgImage from "../assets/saved-option-bg.png"
import sectionBgImage from "../assets/saved-section-bg.png"
import { Box, Button, Divider, Grid, InputBase, useMediaQuery } from "@mui/material"
import MyStories from "../Components/SavedStoriesPage/MyStories"
import React from "react"
import MyCharacters from "../Components/SavedStoriesPage/MyCharacters"
import imgUrl1 from "../assets/my-stories-img1.png"
import imgUrl2 from "../assets/my-stories-img2.png"
import imgUrl3 from "../assets/my-stories-img3.png"
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import "../utility/savedStory.css"
import greenLeaf from "../assets/leaf-green.png"
import brownLeaf from "../assets/leaf-brown.png"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "24px",
  backgroundColor: "#F9ECD2",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  // p:"20px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  color:"#B89056",
  padding:"20px 10px",
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    // padding: theme.spacing(1, 1, 1, 0),
    padding:"15px",
    color:"#B89056",
    fontSize:"18px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      fontSize:"14px",
      '&:focus': {
        width: '100ch',
      },
    },
  },
}));

interface Story {
  id: any;
  title: string;
  thumbnailImage: any;
  shortDesc: string;
};

interface Character{
  id: any;
  title: string;
  thumbnailImage: any;
}

const myStoriesData : Story[] = [
  {
    id: "1",
    title:"A Pirate's Promise",
    thumbnailImage:imgUrl1 ,
    shortDesc: "James takes us on a swashbuckling adventure on the high seas. Follow the journey of a young pirate making a promise to protect his crew. The images evoke the salty breeze and the thrill of the open ocean."
  },
  {
    id: "2",
    title:"The Moonlit Quest",
    thumbnailImage:imgUrl2 ,
    shortDesc: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life."
  },
  {
    id:"3",
    title:"The Moonlit Quest",
    thumbnailImage:imgUrl3 ,
    shortDesc: "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life."
  },
  {
    id:"4",
    title:"A Pirate's Promise ",
    thumbnailImage:imgUrl1 ,
    shortDesc: " James takes us on a swashbuckling adventure on the high seas. Follow the journey of a young pirate making a promise to protect his crew. The images evoke the salty breeze and the thrill of the open ocean."
  },
]

const myCharacterData : Character[] =[
  {
    id:"1",
    title:"A Pirate's Promise",
    thumbnailImage:imgUrl1 ,
  },
  {
    id:"2",
    title:"The Moonlit Quest",
    thumbnailImage:imgUrl2 ,
  },
  {
    id:"3",
    title:"The Moonlit Quest",
    thumbnailImage:imgUrl3 ,
  },
  {
    id:"4",
    title:"A Pirate's Promise",
    thumbnailImage:imgUrl1 ,
  },
]


const SavedStoriesPage = () => {
  const [isStoriesActive, setIsStoriesActive] = React.useState<boolean>(true)
  const [myStories, setMyStories] = React.useState<any>(myStoriesData);
  const [myCharacters, setMyCharacters] = React.useState<any>(myCharacterData);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const isMobile = useMediaQuery("(max-width:900px)");
  // const [myFilteredStories, setMyFilteredStories] = React.useState<any>(myStories)

  const searchChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    // if(searchQuery.length > 1){
    //   const filteredStories = myStories.filter((item: any)=>
    //     item.title.includes(searchQuery.toLocaleLowerCase)
    //   );
    //   setMyFilteredStories(filteredStories);
    // }
  }


  const myStoriesClickHandler = () =>{
    setIsStoriesActive(true);
  };
  const myCharacterClickHandler = () => {
    setIsStoriesActive(false)
  };

  // Fetch all stories and characters and update the "myStories" and "myCharacters" 
  return (
    <Layout>
      <NavBar background={bgImage}>
        <Box 
          sx={{
            display:"flex",
            justifyContent:"center"
        }}
        >
          <Box sx={{minWidth: isMobile ? "90%":"80%", maxWidth:"80%", position:"relative", m:"70px 0px"}}>
            <Box component="img" src={greenLeaf} sx={{
              position:"absolute",
              top:"-110px",
              left:"-140px",
              zIndex:"1"
            }} />
            <Box 
              sx={{
                background: `url(${sectionBgImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                p:"70px 0px", 
                borderRadius:"34px",
                position: "relative"
              }}
            >
              <Box className="search-bar" sx={{
                maxWidth:isMobile?"90%" :"60%",
                m: "0 auto",
                position:"relative"
              }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder={isMobile ? "Search" : "What would you like to search?"}
                    // inputProps={{ 'aria-label': 'search' }}
                    onChange={searchChangeHandle}
                    value={searchQuery}
                    // name= "search"
                  />
                </Search>
                <Button
                  sx={{
                    background:"var(--button-gold, linear-gradient(179deg, #E0B65D 25.23%, #F0D191 95.58%, rgba(255, 255, 255, 0.00) 183.3%))",
                    border:"3px solid #A67334",
                    color:"#47371F",
                    padding:isMobile? "8px 30px" :"6px 40px",
                    position:"absolute",
                    right:"0",
                    top:"0",
                    borderRadius:"9px",
                    fontSize:"20px"
                  }}
                >
                  search
                </Button>
              </Box>
              <Box className="saved-stories-btns" sx={{maxWidth:isMobile ? "90%" :"60%", margin:isMobile ? "40px auto 0px" :"60px auto 0px"}}>
                <Grid container justifyContent="center" columnGap={isMobile ? 1 : 3} m="30px 0px" >
                  <Grid item>
                    <Button
                      sx={{
                        textTransform:"capitalize",
                        p: isMobile ? "3px 20px" : "3px 50px",
                        fontSize:isMobile ? "16px" : "24px",
                        borderRadius:"34px",
                        boxShadow: "none",
                        background: isStoriesActive ?  "#EFCE8D" : "",
                        color: "#452C0E",
                        "&:hover":{
                          backgroundColor:"#F5C870"
                        }
                      }}
                      variant={isStoriesActive ? "contained" : "text" }
                      onClick={myStoriesClickHandler}
                    >My stories</Button>
                  </Grid>
                  <Grid item>
                  <Button
                      sx={{
                        textTransform:"capitalize",
                        p: isMobile ? "3px 20px" : "3px 50px",
                        fontSize:isMobile ? "16px" : "24px",
                        borderRadius:"34px",
                        boxShadow: "none",
                        background: !isStoriesActive ? "#EFCE8D" : "",
                        color: "#452C0E",
                        "&:hover":{
                          backgroundColor:"#F5C870"
                        }
                      }}
                      variant={isStoriesActive ? "text" : "contained" }
                      onClick={myCharacterClickHandler}
                    >My Characters</Button>
                  </Grid>
                </Grid>
                <Divider />
              </Box>
              <Box sx={{maxWidth:"80%", m:"50px auto 0px"}}>
                {isStoriesActive ? (
                  <MyStories myStories={myStories} />
                ) : (
                  <MyCharacters myCharacters={myCharacters} />
                )}
              </Box>
            </Box>
              <Box component="img" src={brownLeaf} 
                sx={{
                  position:"absolute",
                  bottom:"-190px",
                  right: isMobile ? "-20px" :"-40px"
                }}
              />
          </Box>
        </Box>
      </NavBar>
    </Layout>
  )
}

export default SavedStoriesPage