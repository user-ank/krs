import React, { useState } from 'react';
import candidates from './Candidate.json'
import './Candidate.css'
import Header from '../Header/Header';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Footer from '../Contents/Footer';

const Candidate = () => {
  const [jobRole, setJobRole] = useState('');
  const [location, setLocation] = useState('');
  const [matchedCandidates, setMatchedCandidates] = useState([]);


  const handleJobRoleChange = (e) => {
    setJobRole(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (jobRole !== "" && location !== "") {
      const filteredCandidates = candidates.filter(
        (candidate) =>
          candidate.job_role.toLowerCase() === jobRole.toLowerCase() &&
          candidate.location.toLowerCase() === location.toLowerCase()
      );
      setMatchedCandidates(filteredCandidates);
    }
    else{
      const filteredCandidates = candidates.filter(
        (candidate) =>
          candidate.job_role.toLowerCase() === jobRole.toLowerCase() ||
          candidate.location.toLowerCase() === location.toLowerCase()
      );
      setMatchedCandidates(filteredCandidates);
    }
  };

  return (
    <>
      <Header />
      <div className='candidate'>
        <div className='candidateHeading'>Search for candidates here :</div> 
        <div className='upperPanel'>
          <div className='candidateDiv'>
            <label htmlFor="jobRole">Job Role:</label>
            <TextField
              type="text"
              id="jobRole"
              value={jobRole}
              helperText="frontend developer, ui/ux developer.."
              onChange={handleJobRoleChange}
              variant='outlined'
            />
          </div>
          <div className='candidateDiv'>
            <label htmlFor="location">Location:</label>
            <TextField
              type="text"
              id="location"
              value={location}
              helperText="delhi, mumbai, chennai.."
              onChange={handleLocationChange}
              variant='outlined'
            />
          </div>
          <button className='button' style={{ width: "150px", padding: "10px 20px", margin: "0 10px", marginBottom: "20px" }} onClick={handleSearch}>Search</button>

        </div>
        <div>
          <h3 style={{ margin: "20px", marginLeft: "0" }}>Matched Candidates:</h3>
          {matchedCandidates.length > 0 ?
            (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Job Role</TableCell>
                      <TableCell align="right">Work Experience</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">Gender</TableCell>
                      <TableCell align="right">Location</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {matchedCandidates.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.job_role}</TableCell>
                        <TableCell align="right">{row.work_experience}</TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.gender}</TableCell>
                        <TableCell align="right">{row.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <p>No candidates found.</p>
            )}


        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Candidate;
