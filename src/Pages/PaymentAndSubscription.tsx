import NavBar from "../Components/NavBar"
import PaymentAndSubscriptionMain from "../Components/PaymentAndSubscription/PaymentAndSubscriptionMain"
import Layout from "./LayoutPages"
import bgImage from "../assets/payment-bg.png"
import { Box, useMediaQuery } from "@mui/material"
import mountainRocks from "../assets/mountainRocks.png"
import tree from "../assets/tree.png"


const PaymentAndSubscription = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
    const mediumScreen = useMediaQuery("(min-width:901px) and (max-width:1501px)");
  return (
    <Layout>
      <NavBar background={bgImage}>
          <Box mb='20px' mt="20px" position="relative" sx={{overflowX:"hidden"}}>
            <Box sx={{zIndex: 2, position:"relative"}}>
              <PaymentAndSubscriptionMain />
            </Box>
            <Box component="img" src={tree} 
                sx={{
                  position:"absolute",
                  top: "0",
                  left:"-120px",
                  zIndex:1
                }}
            />
            <Box component="img" src={mountainRocks}
              sx={{
                position:"absolute",
                top: "50%",
                right:"-180px"
              }}
            />
          </Box>
      </NavBar>
    </Layout>
  )
}

export default PaymentAndSubscription