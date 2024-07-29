import React from 'react';
import './YearBook.css'; // Ensure to create and link this CSS file for styling

function YearBook() {
  return (
    <div className="yearbook-container">
      <h1>Alumni Year Book</h1>
      <p>A Million Feelings, A Thousand Thoughts, A Hundred Memories, One Yearbook!</p>
      <p>Take a peek into the incredible student life at SRM University-AP presented as an Alumni yearbook by the Class of 2021, 2022 & 2023!</p>
      
      <div className="yearbook-links">
        <p>
          <strong>Link for year book class of 2021:</strong>&nbsp;
          <a href="https://admissions.srmap.edu.in/Alumni-Yearbook-2021/" target="_blank" rel="noopener noreferrer">Year Book Class of 2021</a>
        </p>
        <p>
          <strong>Link for year book class of 2022:</strong>&nbsp;
          <a href="https://admissions.srmap.edu.in/Alumni-Yearbook-2022/" target="_blank" rel="noopener noreferrer">Year Book Class of 2022</a>
        </p>
        <p>
          <strong>Link for year book class of 2023:</strong>&nbsp;
          <a href="https://newsletter.srmap.edu.in/alumni-yearbook-2023/" target="_blank" rel="noopener noreferrer">Year Book Class of 2023</a>
        </p>
      </div>
    </div>
  );
}

export default YearBook;
