import { Box, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import cardBg from "../../assets/payment-card-bg.png"
import priceImage from "../../assets/price-0.png"
import listIcon from "../../assets/list-icon.png"
import CustomizeButton from '../CustomizeButton';

interface PaymentCardData {
    isPopular : boolean;
    type: string;
    content: string;
    price: any;
    privileges: Array<string>;
    buttonText: string;
}

const PaymentCard: React.FC<PaymentCardData> = (
    {
    isPopular, 
    type, 
    content, 
    price, 
    privileges,
    buttonText}
    ) => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const mediumScreen = useMediaQuery("(min-width:901px)and(max-width:1501px)");
  return (
    <Box>
        <Box sx={{p:isMobile ? "80px 30px 50px" : "100px 40px 60px", position:"relative",}}>
            <Box className="popular-or-not" sx={{position:"absolute", top:"30px", right: "30px"}}>
                {isPopular && (
                    <Box className="popular-card"
                        sx={{
                            backgroundColor: "rgba(227, 187, 111, 0.88)",
                            p:"5px 50px",
                            borderRadius:"24px",
                        }}
                    >
                        <Typography sx={{color:"#452C0E", fontSize: isMobile ?"16px": "24px"}}>Popular</Typography>
                    </Box>
                )}
            </Box>
            <Box className="type-of-payment">
                <Typography 
                    sx={{
                        color:"#4F3310",
                        fontSize: isMobile ? "18px" : mediumScreen ? "28px" : "32px",
                        textTransform:"uppercase",
                        WebkitTextStroke: "0.5px #4F3310",
                        mb:"20px",
                        textAlign:"center"
                    }}
                >
                    {type}
                </Typography>
            </Box>
            <Box className="payment-content">
                <Typography sx={{
                    color: "#80521A", 
                    fontSize:isMobile?"16px": mediumScreen ? "20px": "24px",
                    mb:"20px"
                }}>
                    {content}
                </Typography>
            </Box>
            <Box className="payment-price" m="40px 0px" sx={{textAlign:"center"}}>
                <Box component="img" src={price} />
            </Box>
            <Box className="payment-privileges" mb={isPopular ? "50px": isMobile ? "50px" : "195px"}>
                {privileges.map((item: string)=>(
                    <ListItem>
                        <ListItemIcon sx={{minWidth:"32px"}}>
                            <Box component="img" src={listIcon} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography 
                                sx={{
                                    fontSize:isMobile ? "16px" : mediumScreen ? "20px" : "24px"
                            }}>
                                {item}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </Box>
            <Box className="card-btn" sx={{textAlign:"center"}}>
                <CustomizeButton buttontext={buttonText} textStyle="uppercase" btnPadding={isMobile? "0 50px": mediumScreen ? "0 50px": "0 70px"} />
            </Box>
        </Box>
    </Box>
  )
}

export default PaymentCard