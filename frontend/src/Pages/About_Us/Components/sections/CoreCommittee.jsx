import React from 'react';
import './CoreCommittee.css'; 

function CoreCommittee() {
  const committeeMembers = [
    { id: 1, name: 'Dr. Satish Anamalamudi', title: 'Assistant Director – Directorate of Alumni Relations & Associate Professor - Department of Computer Science and Engineering', position: 'Chairperson' },
    { id: 2, name: 'Dr Ashok Kumar Pradhan', title: 'Associate Professor - Department of Computer Science Engineering', position: 'Member' },
    { id: 3, name: 'Dr K A Sunitha', title: 'Associate Professor -Department of Electronics and Communication Engineering', position: 'Member' },
    { id: 4, name: 'Dr Lalita Mohan Mohapatra', title: 'Assistant Professor – Department of Management Studies', position: 'Member' },
    { id: 5, name: 'Dr Sabyasachi Chakrabortty', title: 'Associate Professor - Department of Chemistry', position: 'Member' },
    { id: 6, name: 'Mr. Laxmanan Angu Raju', title: 'Assistant General Manager – Directorate of Corporate Relations & Career Services', position: 'Member' },
    { id: 7, name: 'Ms Bhavana Deepa Mani', title: 'Counsellor - International Relations & Higher Studies', position: 'Member' },
    { id: 8, name: 'Mr Vallabhaneni Preetam', title: 'AP20110010535', position: 'Member' },
    { id: 9, name: 'Mr Nagham Mahmoud Ismaeel', title: 'AP22135220002', position: 'Member' },
    { id: 10, name: 'Ms Srujana Yeruva', title: 'AP22211270008', position: 'Member' },
    { id: 11, name: 'Mr Rama Abhinav Ravuri', title: 'AP21311130014', position: 'Member' },
    { id: 12, name: 'Mr B Yoganand', title: 'AP17110020003', position: 'Alumni Member' },
    { id: 13, name: 'Ms K Sri Ritika', title: 'AP17110010011', position: 'Alumni Member' },
    { id: 14, name: 'Mr Abhay Rastogi', title: 'AP18110010567', position: 'Alumni Member' },
    { id: 15, name: 'Mr Thatikonda Lakshman', title: 'AP19211010052', position: 'Alumni Member' },
    { id: 16, name: 'Ms Purna Chandrika', title: 'AP19211080002', position: 'Alumni Member' },
    { id: 17, name: 'Dr. J Vineesh Prakash', title: 'Assistant Professor - Department of Economics', position: 'Member-Convenor' },
  ];

  return (
    <div className="core-committee-container">
      <h1 className="core-committee-heading">Alumni Relations Core Committee</h1>
      <div className="core-committee">
        <table className="committee-table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Name - Designation</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {committeeMembers.map(member => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td><span className="name-bold">{member.name}</span> - {member.title}</td>
                <td>{member.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="link-box">
        Documents: <a href="../../../public/Docs/Reconstitution of Alumni Relations Core Committee.pdf" target='_blank' className="committee-link">Reconstitution of Alumni Relations Core Committee</a>
      </div>
    </div>
  );
}

export default CoreCommittee;
