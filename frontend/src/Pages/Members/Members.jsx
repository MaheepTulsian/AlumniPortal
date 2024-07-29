import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent, Grid, Typography, Pagination, CardHeader, TextField, IconButton, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from 'react-router-dom';
import StudentData from '../../Constants/StudentData';
import Filters from './Filters'; // Import Filters component
import './Members.css'; // Import CSS file

const Members = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [filters, setFilters] = useState({
        batch: [],
        school: [],
        branch: [],
        pathChosen: [],
        cgpaRange: [1, 10],
        alumniPortalRegistered: '',
        sortBy: '',
    });
    const [jumpPage, setJumpPage] = useState('');
    // const [studentData, setStudentData] = useState([]); // State to store fetched data

    const itemsPerPage = 6;

    useEffect(() => {
        setPage(1); // Reset to page 1 whenever filters change
    }, [filters]);

    // useEffect(() => {
    //     // Fetch data from API
    //     const fetchStudentData = async () => {
    //         try {
    //             const response = await fetch('https://testbackend-i608.onrender.com/api/get-details'); // Replace 'API_ENDPOINT' with the actual API endpoint
    //             const data = await response.json();
    //             setStudentData(data);
    //         } catch (error) {
    //             console.error('Error fetching student data:', error);
    //         }
    //     };

    //     fetchStudentData();
    // }, []);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleJumpPageChange = (event) => {
        setJumpPage(event.target.value);
    };

    const handleJumpPage = () => {
        const pageNumber = Number(jumpPage);
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setPage(pageNumber);
            setJumpPage('');
        }
    };

    const handleFilterApply = (appliedFilters) => {
        setFilters(appliedFilters);
    };

    const handleSortChange = (event) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            sortBy: event.target.value
        }));
    };

    // Define the filter function
    const doesStudentMatchFilters = (student, filters) => {
        const passedOut = Number(student.PassedOut);

        const matchBatch = filters.batch.length > 0 ? filters.batch.map(Number).includes(passedOut) : true;
        const matchSchool = filters.school.length > 0 ? filters.school.includes(student.School) : true;
        const matchBranch = filters.branch.length > 0 ? filters.branch.includes(student.Branch) : true;
        const matchPathChosen = filters.pathChosen.length > 0 ? filters.pathChosen.includes(student.PathChosen) : true;
        const matchCGPA = student.CGPA >= filters.cgpaRange[0] && student.CGPA <= filters.cgpaRange[1];
        const matchAlumniPortalRegistered = filters.alumniPortalRegistered
            ? student.AlumniPortalRegistered === filters.alumniPortalRegistered
            : true;

        return matchBatch && matchSchool && matchBranch && matchPathChosen && matchCGPA && matchAlumniPortalRegistered;
    };

    // Apply the filter function
    const filteredStudents = StudentData.filter(student => {
        const matchesFilters = doesStudentMatchFilters(student, filters);
        const matchesSearchTerm = student.name.toLowerCase().includes(searchTerm) || student.id.toString().includes(searchTerm);
        return matchesFilters && matchesSearchTerm;
    });

    // Sorting logic
    const sortedStudents = filteredStudents.sort((a, b) => {
        if (filters.sortBy === 'cgpa') {
            return b.CGPA - a.CGPA;
        } else if (filters.sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    const totalPages = Math.ceil(sortedStudents.length / itemsPerPage);
    const displayedStudents = sortedStudents.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="members-container">
            <div className="search-filter-container">
                <TextField
                    variant="outlined"
                    placeholder="Search by name or ID"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                <FormControl variant="outlined" className="sort-select">
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        value={filters.sortBy}
                        onChange={handleSortChange}
                        label="Sort By"
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="cgpa">CGPA</MenuItem>
                    </Select>
                </FormControl>
                <IconButton onClick={handleDrawerToggle}>
                    <FilterListIcon />
                </IconButton>
            </div>

            <Grid container spacing={2}>
                {displayedStudents.length > 0 ? (
                    displayedStudents.map((student) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={student.id} className="card-container">
                            <Link to={`/members/${student.id}`} style={{ textDecoration: 'none' }}>
                                <Card className="card">
                                    <CardHeader
                                        className="card-header"
                                        avatar={<Avatar src={student.imageURL} />}
                                        action={student.AlumniPortalRegistered === 'Yes' && <CheckCircleIcon color="success" />}
                                        title={student.name}
                                        subheader={`ID: ${student.id}`}
                                    />
                                    <CardContent className="card-content">
                                        <Typography variant="body2">Batch: {student.PassedOut}</Typography>
                                        <Typography variant="body2">School: {student.School}</Typography>
                                        <Typography variant="body2">CGPA: {student.CGPA}</Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" color="textSecondary" align="center" style={{ width: '100%' }}>
                        No students match the selected filters.
                    </Typography>
                )}
            </Grid>

            <div className="pagination-container">
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
                <TextField
                    type="number"
                    variant="outlined"
                    placeholder="Jump to page"
                    value={jumpPage}
                    onChange={handleJumpPageChange}
                    className="jump-to-page"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleJumpPage}
                    className="button-go"
                >
                    Go
                </Button>
            </div>

            <Filters open={drawerOpen} onClose={handleDrawerToggle} onApply={handleFilterApply} filters={filters} />
        </div>
    );
};

export default Members;
