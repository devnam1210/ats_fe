import React from "react";
import { useEffect } from "react";
import jobService from "../services/job.service";
import { useState } from "react";
import JobCard from "../components/JobCard";

export default function ViewJobListPosting() {
    // React hook
    const [jobs, setJobs] = useState([]); // [], null, undefined, {}, 0, false, "" 
    // Mounting --> Call API --> Set data to state --> Re-render UI

    // Param 1: callback function: function to be executed after component is mounted
    // Param 2:[] dependency array: array of dependencies that the effect depends on. If any of the dependencies change, the effect will be re-run. If the array is empty, the effect will only run once after the initial render.
    useEffect(() => {
         async function fetchJobs() {
        // Call API to get all jobs
            const jobs = await jobService.findAll();

            console.log(jobs);
            //change state
            setJobs(jobs);
        }
        fetchJobs();
    }, []); 



    return (
        <div className='container' style={{height: "100vh"}}>
            <h3 className='my-3'>Open Positions</h3>
                <div className='row d-flex justify-content-start align-items-start'>
                {jobs.map((job) => {
                    return (<div className='col-6 md-6 g-1 my-3' key = {job.id}>
                        <JobCard job={job} />   
                    </div>) // truyền job vào JobCard để hiển thị thông tin chi tiết của từng job
                })}
                </div>
        </div>
    );
}
