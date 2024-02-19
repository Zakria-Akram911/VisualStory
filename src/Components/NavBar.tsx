import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import headerlogo from '../assets/headerbg.png'
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import {
    IconButton,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = ["EnchantedPages.Ai", "Visualizer", "My Stories", "Contact"];


function NavBar({children}:any) {
    const isMobile = useMediaQuery('(max-width:900px)');
    const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1512px)');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box
 sx={{
    background: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${headerlogo})`,
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
        width: isMobile ? "100%" :"70%",
        boxShadow:"2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
        
      }}
    >
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page, index) => (
          <>
            <Typography
              key={page}
              sx={{
                color: "#A9895D",
                fontSize: index=== 0 ? "18px" : "16px",
                fontWeight: index=== 0 ?  900 :400,
                lineHeight:"20px",
                marginRight: index === pages.length - 1 ? "0" : "20px",
                marginLeft: index === 0 ? "0" : "20px",
                cursor: "pointer",
                "&:hover": {
                  color: "#5C4033",
                },
              }}
            >
              {page}
            </Typography>
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
          <MenuItem key={page} onClick={handleMenuClose}>
            <Typography
              sx={{
                color: "#A9895D",
                fontSize: "16px",
                fontWeight: 400,
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {page}
            </Typography>
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
      >
        <Typography
          sx={{
            color: "#6E4500",
            fontFamily: "IM FELL English",
            fontSize: isMobile ? "12px":"16px",
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
