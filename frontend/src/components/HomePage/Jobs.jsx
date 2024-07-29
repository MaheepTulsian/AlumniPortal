import { Divider, Typography } from '@mui/material';
import React from 'react';
import './HomepageComponent.css';

export default function Jobs() {
    const jobs = [
        {
            jobName: 'Job 1',
            time: '1 week ago'
        }, {
            jobName: 'Job 2',
            time: '2 week ago'
        }, {
            jobName: 'Job 3',
            time: '3 week ago'
        }, {
            jobName: 'Job 4',
            time: '1 week ago'
        }, {
            jobName: 'Job 5',
            time: '1 week ago'
        }
    ];

    return (
        <div style={{ backgroundColor: '#c4892b', height: '300px', color: "#fff", padding: '16px', overflow: 'hidden', overflowY: 'hidden' }}>
            <Typography textAlign={'left'} fontSize={28}>Jobs</Typography>
            <Divider sx={{ backgroundColor: '#fff', marginBottom: '16px' }} />
            {
                jobs.map((jobObj, index) => (
                    <React.Fragment key={index}>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '8px', paddingTop: '12px', paddingBottom: '10px' }}>
                            <Typography variant="body1" fontSize={18}>{jobObj.jobName}</Typography>
                            <Typography variant="body2" fontSize={14} style={{ marginLeft: 'auto' }}>{jobObj.time}</Typography>
                        </div>
                        <Divider sx={{ backgroundColor: '#fff', marginBottom: '16px' }} />
                    </React.Fragment>
                ))
            }
        </div>
    );
}
