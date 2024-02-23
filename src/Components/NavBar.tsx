import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import headerlogo from '../assets/headerbg.png'
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import {
    IconButton,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const pages = 
  [
    {
      title: "EnchantedPages.Ai",
      link: "/"
    },
     {
      title: "Visualizer",
      link: '/visualizer'
    }, 
     {
      title:"My Stories",
      link: "/my-stories"
    }, 
     {
      title:"Contact",
      link: "/contact"
    }
    ];


function NavBar({children, background}:any) {
    const isMobile = useMediaQuery('(max-width:900px)');
    const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1512px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate()
    
    const handleMenuOpen = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box className="abc"
 sx={{
    // background: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${headerlogo})`,
    background: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    pb:mediumScreen ? "10vh" :"10vh"
  }}>
<Box
sx={{display:"flex",justifyContent:"center" , alignItems:"center",p:"45px"}}>
    <Box
      sx={{
        display: "inline-flex",
        padding: isMobile ? "5px 10px" :"8px 10px 8px 40px",
        justifyContent: isMobile? "space-between":"center",
        alignItems: "center",
        borderRadius: "30px",
        backgroundColor: "#ede1c7",
        width: isMobile ? "100%" : "70%",
        boxShadow:"2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
        
      }}
    >
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className="navLinks">
        {pages.map((page, index) => (
          <>
          <NavLink 
            to={page.link}
            style={{
                color:"#A9895D",
                cursor: "pointer",
                textDecoration:"none"
              }}
            
          >
              <Typography
                key={page.title}
                sx={{
                  // color: "#A9895D",
                  fontSize: index=== 0 ? "16px" : mediumScreen ? "12px" : "14px",
                  fontWeight: index=== 0 ?  900 :400,
                  lineHeight:"20px",
                  marginRight: index === pages.length - 1 ? "0" : mediumScreen ? "10px" :"20px",
                  marginLeft: index === 0 ? "0" : mediumScreen ? "10px" : "20px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5C4033",
                  },
                }}
              >
                {page.title}
              </Typography>
            </NavLink>
            <span style={{ color: "#A9895D" }}>
              {index !== pages.length - 1 && "|"}
            </span>
          </>
        ))}
      </Box>
      <IconButton
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>

      {/* Responsive Menu Items */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {pages.map((page) => (
          <MenuItem key={page.title} onClick={handleMenuClose}>
            <NavLink 
              to={page.link}
              style={({isActive})=>{
                return{
                  color:isActive ?"red" : "#A9895D",
                  fontSize: "16px",
                  fontWeight: isActive ? 900 : 400,
                  cursor: "pointer",
                  textDecoration:"none"
                }
              }}
            >
              <Typography
                sx={{
                  // color: "#A9895D",
                  fontSize: "16px",
                  fontWeight: 400,
                  cursor: "pointer",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                {page.title}
              </Typography>
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
      <Button
        sx={{
          display: "flex",
          padding: "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          //gap: '16px',
          borderRadius: "24px",
          border: "1px solid #CF9D54",
          background:
            "var(--Button, linear-gradient(178deg, #E0B65D 20.38%, #F0D191 73.21%, rgba(255, 255, 255, 0.00) 139.09%))",
            '&:hover':{
              bgcolor:"#CF9D54"
            }
          }}
          onClick={()=> navigate('/create-new-story')}
      >
        <Typography
          sx={{
            color: "#6E4500",
            fontFamily: "IM FELL English",
            fontSize: isMobile ? "10px":"12px",
            textTransform: 'none',
            fontWeight: 400,
           
          }}
        >
          Start Crafting Magical Stories Today!
        </Typography>
      </Button>
    </Box>
    </Box>
    <Box>
      {children}
    </Box>
    </Box>
  );
}
export default NavBar;
