import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import './profileCard.css';
import { StudentData } from '../../Constants/StudentData';
import useWindowSize from './useWindowSize';
import { Pagination } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function CardsContainer({ filters }) {
  const [studentsData, setStudentsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(28);
  const [windowWidth] = useWindowSize();
  const containerRef = useRef(null);

  useEffect(() => {
    setStudentsData(StudentData);
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      let containerWidth = containerRef.current ? containerRef.current.offsetWidth : windowWidth;
      let itemsPerRow = Math.floor(containerWidth / 350); // Assuming each item has a width of 350px
      let rows;
      if (windowWidth >= 1024) {
        rows = 8; // Desktop
      } else if (windowWidth >= 600) {
        rows = 15; // Tablet
      } else {
        rows = 10; // Mobile
      }
      setItemsPerPage(rows * itemsPerRow);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, [windowWidth]);

  const applyFilters = (data, filters) => {
    return data.filter(student => {
      const { passedYears, selectedBranches, path, cgpa, searchField, AlumniRegistered } = filters;

      // Apply year filter
      if (passedYears.length > 0 && !passedYears.includes(student.yearOfPassing)) {
        return false;
      }

      // Apply branch filter
      if (selectedBranches.length > 0 && !selectedBranches.includes(student.branch)) {
        return false;
      }

      // Apply path filter
      if (path.length > 0 && !path.includes(student.path)) {
        return false;
      }

      // Apply CGPA filter
      if (student.cgpa < cgpa.min || student.cgpa > cgpa.max) {
        return false;
      }

      // Apply search filter
      if (
        searchField &&
        !(
          student.rollNo.toLowerCase().includes(searchField.toLowerCase()) ||
          student.name.toLowerCase().includes(searchField.toLowerCase()) ||
          student.email.toLowerCase().includes(searchField.toLowerCase())
        )
      ) {
        return false;
      }

      // Apply alumni registered filter
      if (AlumniRegistered && student.alumniRegistered !== AlumniRegistered) {
        return false;
      }

      return true;
    });
  };

  const filteredData = applyFilters(studentsData, filters);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="Students_Cards_Container" ref={containerRef}>
        {currentItems.map((obj, index) => (
          <ProfileCard key={index} profileObj={obj} />
        ))}
      </div>
      <div className='pagination'>
        <Pagination 
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          siblingCount={1} // Number of sibling pages to show on each side of the current page
          boundaryCount={1} // Number of first and last pages to show
          variant="outlined"
          sx={{
            '& .Mui-selected': {
              backgroundColor: '#404020', // Active color
              color: '#fff',
            },
            '& .MuiPaginationItem-root': {
              // margin: '0 2px', // Gap between pagination items
            }
            ,
            '& .MuiPaginationItem-page': {
              '&:hover': {
                backgroundColor: '#e0e0e0',
                color:"#000"
              },
            },
          }}
          className='page_component'
        />
      </div>
    </>
  );
}
