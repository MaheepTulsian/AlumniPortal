import React from 'react'
import {Box} from '@mui/material'
import SwipeableTextMobileStepper from '../../components/HomePage/SwipeableTextMobileStepper'
import Grids from '../../components/HomePage/Grids'
import Footer from '../About_Us/Components/Footer'
export default function Home() {
  return (
    <div style={{height:"100vh",maxWidth:"100%"}}>
     <Box display={'flex'} justifyContent={'center'} bgcolor={"#404020"} overflow={'visible'}>
        <div style={{border:"8px solid #fff",margin:"40px 0px 20px 0px"}}>
          <SwipeableTextMobileStepper/>
        </div>
     </Box>
        <Grids/>
        <br/>
        <br/> 
        <Footer/>
    </div>
  )
}
