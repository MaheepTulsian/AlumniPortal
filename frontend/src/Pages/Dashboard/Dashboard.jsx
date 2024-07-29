import React from 'react'
import { useParams } from 'react-router'
import { Breadcrumbs , Link , Typography } from '@mui/material'
import StudentData from '../../Constants/StudentData'
import './Dashboard.css'
import PageNotFound from '../PageNotFound/PageNotFound'

import { Avatar, Box, Divider, Paper, Tooltip,Chip } from '@mui/material'

import profile_default from '../../assets/profile_default.png'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export default function Dashboard() {
    const {id} = useParams();
    const student = StudentData.find((student) => student.id === id)
    console.log(student)
    if (!student) {
        return <PageNotFound/>
    }
  return (
    <div className='main_Container'>
      <Box className='container' sx={{background:'linear-gradient(to bottom, grey,#404020)'}}>
      <Paper className='paper_1' elevation={10}  sx={{borderRadius:'16px'}}> 
        {
            student.AlumniPortalRegistered === 'Yes' ?
            <>
                <Tooltip title={'Verified'}><VerifiedRoundedIcon sx={{float:"right",color:'green'}}/></Tooltip>
            </>:<></>
        }
        <Avatar src={student.imageURL?student.imageURL:profile_default} className='avatar_profile'/>
          <Typography fontWeight={800} marginTop={'20px'} marginBottom={'20px'} textAlign={'center'} width={270} textOverflow={'ellipsis'} >
            {student.name.toUpperCase()}
          </Typography>
          <Divider/>
          <Typography component={'h2'} textAlign={'left'} fontWeight={400}  fontSize={'16px'} margin={'14px 0px 12px 14px'}>
            <b>Student ID :</b> <span >{student.id.toUpperCase()}</span>
          </Typography>
          <Typography component={'h2'} textAlign={'left'} fontWeight={400} fontSize={'16px'} margin={'0px 0px 12px 14px'}>
            <b>School :</b> {`${student.School}`} 
          </Typography>
          <Typography component={'h2'} textAlign={'left'} fontWeight={400} fontSize={'16px'} margin={'0px 0px 12px 14px'}>
            <b>Section :</b> {`${student.Section}`} 
          </Typography>

          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} marginTop={'15px'}>
            <a href="#" style={{color:"#000"}}><LanguageIcon/></a>
            <a href="#" style={{color:"#50abf1"}}><TwitterIcon/></a>
            <a href={`${student.LinkedIn}`} style={{color:"#0a66c2"}}><LinkedInIcon/></a>
          </Box>
      </Paper>

      <Paper className='paper_2' elevation={9} sx={{borderRadius:'16px'}}>
        <Box> 
          <Typography fontSize={'23px'}fontWeight={400} color={'#aaaaaa'} className='headings'>
            <AccountCircleIcon sx={{color:'blue',fontSize:"32px"}}/> 
            <span style={{marginLeft:'15px'}}>Personal Information </span>
          </Typography>
          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>Born On</Typography>
            <Typography fontWeight={300} className='typo_2'>{student.dob}</Typography>
          </Box>

          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>Gender</Typography>
            <Typography fontWeight={300} className='typo_2'>{student.gender}</Typography>
          </Box>

          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>Personel E-Mail</Typography>
            <Typography fontWeight={300} className='typo_2' sx={{overflow:'hidden',textOverflow:'ellipsis'}} >{student.personelEmail}</Typography>
          </Box>
          
          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>College E-Mail</Typography>
            <Typography fontWeight={300} className='typo_2' sx={{overflow:'hidden',textOverflow:'ellipsis'}} >{student.email}</Typography>
          </Box>
        </Box>

        <Divider sx={{margin:'10px 0px'}}/>


        <Box>
          <Typography fontSize={'23px'}fontWeight={400} color={'#aaaaaa'} className='headings'>
            <SchoolRoundedIcon sx={{color:'red',fontSize:"32px"}}/> 
            <span style={{marginLeft:'15px'}}>Education Details</span>
          </Typography>
          <Typography component={'h1'} fontWeight={500} sx={{margin:'20px 0px 0px 30px'}}>
            SRM UNIVERSITY, Andhra Pradesh
          </Typography>
          <Typography component={'h1'} fontWeight={300} sx={{margin:'10px 0px 0px 30px'}}>
            {`${student.Program} - ${student.Branch}  ${student.PassedOut}`}
          </Typography>
          <Typography component={'h1'} fontWeight={300} sx={{margin:'10px 0px 0px 30px'}}>
            <span style={{fontWeight:500}}>Roll No : </span> {student.id}
          </Typography>
        </Box>

        <Divider sx={{margin:'10px 0px'}}/>

        <Box> 
          <Typography fontSize={'23px'}fontWeight={400} color={'#aaaaaa'} className='headings'>
            <ContactPhoneIcon sx={{color:'green',fontSize:"32px"}}/> 
            <span style={{marginLeft:'15px'}}>Contact Details </span>
          </Typography>
          
          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>Mobile</Typography>
            <Typography fontWeight={300} className='typo_2'>{student.mobile.slice(0,11)}</Typography>
          </Box>

          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>Home Town</Typography>
            <Typography fontWeight={300} className='typo_2'>Reclukme</Typography>
          </Box>

          <Box className='box'>
            <Typography fontWeight={500} className='typo_1'>Residential Address</Typography>
            <Typography fontWeight={300} className='typo_2'>1646 Edce Loop 1646 Edce Loop 1646 Edce Loop</Typography>
          </Box>

        </Box>

        <Divider sx={{margin:'10px 0px'}}/>

        <Box> 
          <Typography fontSize={'23px'}fontWeight={400} color={'#aaaaaa'} className='headings'>
            <WorkIcon sx={{color:'crimson',fontSize:"32px"}}/> 
            <span style={{marginLeft:'15px'}}>Profession Details </span>
          </Typography>
          
          <Box className="work_box">
            <div className='experience_Obj'>
              <Typography fontWeight={400} sx={{fontSize:"17px"}}>{`Company Name - ${student.job} `}</Typography>
              <Typography fontWeight={300} >Position - ETL developer</Typography>
              <Typography fontWeight={500} >October 2023 - Present</Typography>
              <Typography fontWeight={500} >Location : Ohapegrup</Typography>
            </div>
            
          </Box>
        </Box>
      </Paper>
    </Box>
    </div>
  )
}