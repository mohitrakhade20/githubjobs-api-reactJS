import React from "react";
import "./App.css";
import fetchJobs from "./fetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";

function App() {
  const { jobs, loading, error } = fetchJobs();
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>


    
      
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
