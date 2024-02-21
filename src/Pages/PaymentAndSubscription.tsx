import NavBar from "../Components/NavBar"
import PaymentAndSubscriptionMain from "../Components/PaymentAndSubscription/PaymentAndSubscriptionMain"
import Layout from "./LayoutPages"
import bgImage from "../assets/payment-bg.png"
import { Box } from "@mui/material"


const PaymentAndSubscription = () => {
  return (
    <Layout>
      <NavBar background={bgImage}>
          <Box mb='20px' mt="20px">
            <PaymentAndSubscriptionMain />
          </Box>
      </NavBar>
    </Layout>
  )
}

export default PaymentAndSubscription