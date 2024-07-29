import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, Checkbox, FormControlLabel, Button, Divider, Slider, Typography, FormGroup, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Branches } from '../../Constants/Branches'; // Import Branches data

const Filters = ({ open, onClose, onApply, filters: initialFilters }) => {
    const [filters, setFilters] = useState(initialFilters);

    useEffect(() => {
        setFilters(initialFilters); // Sync with parent state
    }, [initialFilters]);

    const handleFilterChange = (category, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: prevFilters[category].includes(value)
                ? prevFilters[category].filter(item => item !== value)
                : [...prevFilters[category], value]
        }));
    };

    const handleBatchChange = (event) => {
        const { value, checked } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            batch: checked
                ? [...prevFilters.batch, value]
                : prevFilters.batch.filter(item => item !== value)
        }));
    };

    const handleSchoolChange = (event) => {
        const { value, checked } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            school: checked
                ? [...prevFilters.school, value]
                : prevFilters.school.filter(item => item !== value)
        }));
    };

    const handleBranchChange = (event) => {
        const { value, checked } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            branch: checked
                ? [...prevFilters.branch, value]
                : prevFilters.branch.filter(item => item !== value)
        }));
    };

    const handleApplyFilters = () => {
        onApply(filters);
        onClose();
    };

    const handleResetFilters = () => {
        setFilters({
            batch: [],
            school: [],
            branch: [],
            pathChosen: [],
            cgpaRange: [1, 10],
            alumniPortalRegistered: '',
        });
    };

    return (
        <Drawer anchor='right' open={open} onClose={onClose}>
            <div className="drawer-content">
                <List>
                    <ListItem>
                        <ListItemText primary="Filters" />
                    </ListItem>
                    <Divider />
                    
                    {/* Batch Filter */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="batch-content" id="batch-header">
                            <Typography>Batch</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                {[2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                                    <FormControlLabel
                                        key={year}
                                        control={<Checkbox onChange={handleBatchChange} checked={filters.batch.includes(year.toString())} value={year.toString()} />}
                                        label={year}
                                    />
                                ))}
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* School and Branch Filters */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="school-content" id="school-header">
                            <Typography>School and Branch</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {Branches.map((branchGroup, index) => (
                                <div key={index}>
                                    <Typography variant="subtitle1">{branchGroup.name}</Typography>
                                    <FormGroup>
                                        {branchGroup.branches.map(branch => (
                                            <FormControlLabel
                                                key={branch}
                                                control={<Checkbox onChange={handleBranchChange} checked={filters.branch.includes(branch)} value={branch} />}
                                                label={branch}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* Career Option Filter */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="career-content" id="career-header">
                            <Typography>Career Option</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                {['Job', 'Masters', 'StartUp', ''].map(option => (
                                    <FormControlLabel
                                        key={option}
                                        control={<Checkbox onChange={() => handleFilterChange('pathChosen', option)} checked={filters.pathChosen.includes(option)} />}
                                        label={option || 'Not Specified'}
                                    />
                                ))}
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* CGPA Range Filter */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cgpa-content" id="cgpa-header">
                            <Typography>CGPA Range</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ width: '100%' }}>
                                <Slider
                                    value={filters.cgpaRange}
                                    onChange={(event, newValue) => setFilters(prevFilters => ({
                                        ...prevFilters,
                                        cgpaRange: newValue
                                    }))}
                                    min={1}
                                    max={10}
                                    valueLabelDisplay="auto"
                                    step={0.1}
                                />
                                <Typography>Range: {filters.cgpaRange[0]} - {filters.cgpaRange[1]}</Typography>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* Alumni Portal Registration Status Filter */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="alumni-content" id="alumni-header">
                            <Typography>Alumni Portal Registered</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={() => setFilters(prevFilters => ({
                                        ...prevFilters,
                                        alumniPortalRegistered: prevFilters.alumniPortalRegistered === 'Yes' ? '' : 'Yes'
                                    }))} checked={filters.alumniPortalRegistered === 'Yes'} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={() => setFilters(prevFilters => ({
                                        ...prevFilters,
                                        alumniPortalRegistered: prevFilters.alumniPortalRegistered === 'No' ? '' : 'No'
                                    }))} checked={filters.alumniPortalRegistered === 'No'} />}
                                    label="No"
                                />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>

                    <Divider />
                    <ListItem>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleApplyFilters}
                            fullWidth
                        >
                            Apply
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleResetFilters}
                            fullWidth
                        >
                            Reset
                        </Button>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Filters;
