import React from 'react';
import './CoreCommittee.css';
import AdvisoryBoardImage from './AdvisoryBoard.png'; 

function AdvisoryBoard() {
  const advisoryMembers = [
    { id: 1, name: 'Dr. Srabani Basu', designation: 'Faculty Incharge – Alumni Affairs', position: 'Chairperson' },
    { id: 2, name: 'Mr. Rajarshi Mazumder', designation: 'IT Technical Engineer, PVP Inc., Japan', position: 'Member' },
    { id: 3, name: 'Ms. Yasaswy Veeranki', designation: 'Data Processing Specialist, Nielsen IQ, India', position: 'Member' },
    { id: 4, name: 'Ms. Mohammad Nilofer Sultana', designation: 'Business Analyst, Barclays, India', position: 'Member' },
    { id: 5, name: 'Mr. Pavan Krishna', designation: 'Sr. Tech Associate, Bank of America, India', position: 'Member' },
    { id: 6, name: 'Mr. Bismark Razak Haruna', designation: 'Master’s Program, Erasmus Mundus Scholar, University of Lorraine, France', position: 'Member' },
    { id: 7, name: 'Mr. Aaditya Jain', designation: 'Masters in Management at ESMT Berlin- Germany\'s no.1 Business school', position: 'Member' },
    { id: 8, name: 'Mr. Akash Yadav', designation: 'M. Tech. at Indian Institute of Technology, Indore (IIT-Indore)', position: 'Member' },
    { id: 9, name: 'Ms. Abirami Ravishankar', designation: 'Master’s Program at New York University, USA', position: 'Member' },
    { id: 10, name: 'Mr. Agniswar Paul', designation: 'Master’s Program at Georgia Tech, USA', position: 'Member' },
    { id: 11, name: 'Mr. Miran Tafazzul Hussain Junaidi', designation: 'Co-Founder, OurEye.ai', position: 'Member' },
  ];

  return (
    <>
      <div className="image-container">
        <img src={AdvisoryBoardImage} alt="Advisory Board" className="content-image" />
      </div>
      <div className="core-committee-container">
        <h1 className="core-committee-heading">Alumni Relations Advisory Board</h1>
        <div className="core-committee">
          <table className="committee-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name of the Alumni</th>
                <th>Present Designation</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {advisoryMembers.map(member => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td><span className="name-bold">{member.name}</span></td>
                  <td>{member.designation}</td>
                  <td>{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdvisoryBoard;
