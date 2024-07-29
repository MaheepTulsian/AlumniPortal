import { Divider, Typography } from '@mui/material';
import React from 'react';
import './HomepageComponent.css'
export default function Events() {
    const events = [
        {
            date: '06',
            month: "Jul",
            eventName: 'event 1'
        }, {
            date: '07',
            month: "Jul",
            eventName: 'event 2'
        }, {
            date: '08',
            month: "Jul",
            eventName: 'event 3'
        }, {
            date: '09',
            month: "Jul",
            eventName: 'event 4'
        }, {
            date: '06',
            month: "Jul",
            eventName: 'event 5'
        }
    ];

    return (
        <div style={{ backgroundColor: '#8f7c2f', height: '300px', color: "#fff", padding: '16px',overflow:'hidden',overflowY:'hidden' }}>
            <Typography textAlign={'left'} fontSize={28}>Events</Typography>
            <Divider sx={{ backgroundColor: '#fff', marginBottom: '16px' }} />
            {
                events.map((eventObj, index) => (
                    <>
                        <div key={index} style={{ display: 'flex', flexDirection: 'row', marginBottom: '8px',paddingTop:'12px',paddingBottom:'10px' }} className='news-row'>
                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '16px' }}>
                                <Typography variant="body2" fontSize={18}>{eventObj.month}</Typography>
                                <Typography variant="body2" fontSize={25}>{eventObj.date}</Typography>
                            </div>
                            <Typography display={'flex'} flexDirection={'column'} justifyContent={'center'} variant="body1" fontSize={18}>{eventObj.eventName}</Typography>
                            
                        </div>
                        <Divider sx={{ backgroundColor: '#fff', marginBottom: '16px' }} />
                    </>
                ))
            }
        </div>
    );
}
