import {Box } from '@mui/material'
import Footer from '../Components/Footer'


const Layout = ({children}: any) => {
  return (
 <Box>

 <Box>
    {children}
 </Box>
 <Box>
  <Footer/>
 </Box>

 </Box>
  )
}

export default Layout
