import React from "react";
import "./App.css";
import fetchJobs from "./fetchJobs";
// import {Container} from 'react-bootstrap'

function App() {
  const { jobs, load, err } = fetchJobs();
  return (
    <div className="App">
      <h1>GITHUB Jobs</h1>
      {load && <h1>Loading...</h1>}
      {err && <h1>Error :/ May be you should refresh</h1>}
      <h1>{jobs.length}</h1>
    </div>
  );
}

export default App;
