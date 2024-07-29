import React from 'react';
import { Avatar, Paper, Tooltip, Typography } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import profile_default from '../../assets/profile_default.png';
import { NavLink } from 'react-router-dom';
import './profileCard.css';

export default function ProfileCard({ profileObj }) {
  return (
    <NavLink to={`/profile/${profileObj.id}`} style={{ textDecoration: 'none' }}>
      <Paper elevation={10} className='paper_root' component={"div"} loading="lazy">
        <Tooltip title={profileObj.AlumniPortalRegistered === "Yes" ? "Registered" : ""} arrow>
          <span>
            {profileObj.AlumniPortalRegistered === "Yes" && (
              <VerifiedRoundedIcon className='checkCircleIcon' />
            )}
          </span>
        </Tooltip>
        <Avatar
          src={profileObj.imageURL ? profileObj.imageURL : profile_default}
          sx={{ width: "120px", height: "120px" }}
        />
        <Typography component={"h1"} fontWeight={600} fontSize={"13px"}>
          {profileObj.name}
        </Typography>
        <Typography component={"p"} fontSize={"small"} fontWeight={500}>
          {`${profileObj.Program} ${profileObj.PassedOut} (${profileObj.School})`}
        </Typography>
        <Typography component={"p"} fontSize={"small"} fontWeight={500}>
          {`CGPA: ${profileObj.CGPA} `}
        </Typography>
      </Paper>
    </NavLink>
  );
}
