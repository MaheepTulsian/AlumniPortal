import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import logo_white from '../../assets/logo_white.png';
import { Typography } from '@mui/material';
import './HomepageComponent.css'
import NewsRoom from './NewsRoom';
import Events from './Events';
import Jobs from './Jobs';
import { Link } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin:0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const welcomeMessage = (
    <>
        <Box padding={'10px'} color={'#8f7c2f'}>
            <Typography fontWeight={700} fontSize={"18px"} component={'h3'} textAlign={'left'}>A warm welcome to all our alumni !!</Typography>
            <Typography fontWeight={500} fontSize={"16px"} component={'h5'} textAlign={'left'}sx={{margin:'8px 0px'}}>Message for Alumni</Typography>
            <Typography  component={'h3'} fontSize={"16px"} textAlign={'left'}>I welcome the SRM University-AP Alumni fraternity to the Alumni Relations Portal and extend my heartiest greetings.</Typography>
            <Typography  component={'h3'} textAlign={'left'} sx={{margin:'6px 0px'}}>We are proud of your achievements and success. Many of you have seen the university being built brick by brick. I can say with conviction that the pioneering batches would have put their heart and soul in making SRM University-AP stand tall and distinct from others. Your contribution is therefore immense, and we truly acknowledge that.</Typography>
            <Typography  component={'h4'} textAlign={'right'} sx={{margin:'6px 0px'}}>Hon. Vice-Chancellor <br /> SRM University, AP</Typography>
        </Box>
    </>
)

export default function Grids() {
  return (
    <Box sx={{ flexGrow: 1,margin:"30px 10px 20px",maxWidth:"100%"}}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} sx={{maxWidth:"100%"
        }}>
          <Item>
            {welcomeMessage}
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item sx={{maxWidth:"100%"}}>
            <Box component='img'
                src='https://theacademicinsights.com/wp-content/uploads/2023/02/Manoj-Arora-VC-of-SRM-AP-University.jpeg'
                sx={{
                    width:'100%',
                    height:"100%"
                }}
            >
                {/* https://vaave.s3.amazonaws.com/block_images/_0eaa77f90134be92522fb1db81925575__.jpg */}
            </Box>
          </Item>
        </Grid>

        <Grid xs={12} md={4}>
          <Item>
            <div className='registerNow'>
              <Typography sx={{marginTop:'8px'}} fontSize={'20px'}>WELCOME TO ALUMNI PORTAL OF </Typography>
              <center><img src={logo_white} alt="" /></center>
              <center><button style={{marginBottom:'10px'}}>Register Now</button></center>
            </div>    
          </Item>
        </Grid>
        <Grid xs={12} md={8}>
          <Item><NewsRoom/></Item>
        </Grid>

        <Grid xs={12} md={5}>
          <Item>
            <Events/>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <Link to={`https://alumni.srmap.edu.in/careercenter.dz`}>
              <Box
                component='img'
                src='https://vaave.s3.amazonaws.com/block_images/_691719f1bde14ca44d144aca7e14f7dc__.jpg'
                sx={{
                  width:'100%',
                  height:'300px',
                  padding:0,
                  margin:0
                }}
              ></Box>
            </Link>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item>
            <Link to={`https://alumni.srmap.edu.in/page/Young-Achiever.dz`}>
              <Box
                component='img'
                src='https://vaave.s3.amazonaws.com/block_images/_97c452c11bd0f570c5429a0f75058d6b__.jpg'
                sx={{
                  width:'100%',
                  height:'300px',
                  padding:0,
                  margin:0
                }}
              ></Box>
            </Link>
          </Item>
        </Grid>

        <Grid xs={12} md={5}>
          <Item>
            <Link to={`https://alumni.srmap.edu.in/chapters.dzz`}>
              <Box
                component='img'
                src='https://vaave.s3.amazonaws.com/block_images/_28709a73ab89f51b99bd3517ecfdbdad__.jpg'
                sx={{
                  width:'100%',
                  height:'300px',
                  padding:0,
                  margin:0
                }}
              ></Box>
            </Link>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <Jobs/>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item>
            <Link to={`https://alumni.srmap.edu.in/albums.dz`}>
              <Box
                component='img'
                src='https://vaave.s3.amazonaws.com/block_images/_135c0b5c5b4a1eb13306b2eb59f50f19__.jpg'
                sx={{
                  width:'100%',
                  height:'300px',
                  padding:0,
                  margin:0
                }}
              ></Box>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
