import { Box, Typography, Button, useMediaQuery } from "@mui/material"
import React from "react"

interface ButtonText {
    buttontext: string;
    disabled?: boolean
}

const StoryOutputButton : React.FC<ButtonText> = ({buttontext, disabled}) => {
    const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1512px)');
    const isMobile = useMediaQuery('(max-width:900px)');
  return (
    <Button
      sx={{
        borderRadius: "9px",
        border: "3px solid #A67334",
        background: "#CB9A64",
        p: "2px 2px",
        '&:hover':{
          bgcolor:"#5C4033"
        }
      }}
      disabled={disabled? true: false}
    >
      <Box
        sx={{
        //   p: mediumScreen ? "0px 20px": isMobile?  "0px 10px":"0px 25px",
          width: isMobile ? "100px" : mediumScreen ? "200px" : "270px",
          borderRadius: "9px",
          border: "3px solid #A67334",
          background:
            disabled ? "transparent" : "var(--button-gold, linear-gradient(179deg, #E0B65D 25.23%, #F0D191 95.58%, rgba(255, 255, 255, 0.00) 183.3%))",
        }}
      >
        <Typography
          sx={{
            whiteSpace:"nowrap",
            color: "#47371F",
            fontSize: isMobile? "16px" : mediumScreen ? "18px" :"25px",
            fontWeight: 400,
            lineHeight: isMobile? "45px":mediumScreen ?"40px":"58px",
            textTransform: 'uppercase',
          }}
        >
          {buttontext}
        </Typography>
      </Box>
    
    </Button>
  )
}

export default StoryOutputButton