import { Box, Typography } from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';
import './HomepageComponent.css'
export default function NewsRoom() {
    const newsRoom = [
        {
            news: "News 1",
            date: "24 JUN 2024"
        }, {
            news: "News 2",
            date: "18 JUN 2024"
        }, {
            news: "News 3",
            date: "12 JUN 2024"
        }, {
            news: "News 4",
            date: "11 JUN 2024"
        }
    ];

    return (
        <div style={{backgroundColor:'#404020',color:'#fff',height:'300px',padding:'15px'}}>
            <Typography textAlign={'left'} fontSize={'28px'} fontWeight={500}>Newsroom</Typography>
                        <Divider sx={{backgroundColor:'#fff'}}/>
            {
                    newsRoom.map((newsObj, index) => (
                        <>
                        <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',paddingTop:"14px",paddingBottom:'14px' }} className='news-row'>
                            <Typography sx={{marginLeft:'8px'}}>{newsObj.news}</Typography>
                            <Typography fontSize={16} sx={{marginRight:'8px'}}>{newsObj.date}</Typography>
                        </div>
                        <Divider sx={{backgroundColor:'#fff'}}/>
                        </>
                    ))
                }
        </div>
    );
}
