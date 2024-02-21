import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import PaymentCard from "./PaymentCard";
import freeImage from "../../assets/price-0.png"
import paidImage from "../../assets/price-12.png"
import cardBg from "../../assets/payment-card-bg.png"
import "../../utility/paymentStyles.css"

const cardData = [
    {
        id: 1,
        isPopular: false,
        type: "free",
        content:"Embark on magical storytelling adventures with our Free plan",
        price: freeImage,
        privileges:[
            "Limited image generation", 
            "Daily story creation limit.", 
            "Limited character access", 
            "Trial period of 90 days"],
        buttonText: "Try it out"
    },
    {
        id: 2,
        isPopular: true,
        type: "premium",
        content:"Break free from limitations and create as many enchanting stories as your heart desires.",
        price: paidImage,
        privileges:[
            "Unlimited story creation with no restrictions.", 
            "Save your favorite characters for future adventures.", 
            "Bring your characters to life with personal reference photos.", 
            "One-Time Payment"],
        buttonText: "get started"
    }
]


const PaymentAndSubscriptionMain = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const mediumScreen = useMediaQuery("(min-width:901px) and (max-width:1501px)");

  return (
    <Grid container className="payment-main" flexDirection="column" alignItems="center" justifyContent="space-between"  sx={{maxWidth: isMobile ? "90%" :mediumScreen ? "80%" : "65%", m:"0 auto"}}>
        <Grid item className="payment-heading-main" xs={12} m="30px 0px">
            <Box className="payment-heading" position="relative">
                <Typography
                    sx={{
                        fontSize: isMobile ? "20px" : mediumScreen ? "34px" : "40px",
                        color: "white"
                    }}
                >
                    
                    Choose your Plan
                </Typography>
            </Box>
        </Grid>
        <Grid item className="payment-main-cards" xs={12}>
            <Grid container justifyContent="space-between" rowGap={3}>
                {cardData.map((item)=>(
                    <Grid 
                        item 
                        xs={12} 
                        md={5.7} 
                        sx={{
                        background: `url(${cardBg})`,
                        backgroundSize:"cover",
                        backgroundRepeat:"no-repeat",
                        borderRadius:"34px"
                    }}>
                        {/* <Box sx={{backgroundColor:"rgba(210, 151, 62, 0.24)"}}> */}
                        <PaymentCard
                            isPopular={item.isPopular}
                            type={item.type}
                            content={item.content}
                            price={item.price}
                            privileges={item.privileges}
                            buttonText={item.buttonText}
                        />
                        {/* </Box> */}
                    </Grid>
                ))}
                {/* <Grid item xs={12} md={6}>
                    <PaymentCard />
                </Grid> */}
            </Grid>
        </Grid>
    </Grid>
  )
}

export default PaymentAndSubscriptionMain