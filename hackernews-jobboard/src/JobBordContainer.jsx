import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import JobCard from './components/JobCard';
import {get} from './utils/crud.js' 

const JobBoardContainer = () => {
  const [jobsId, setJobsId] = useState([]);
  const [page, setPage] = useState(1);
  const [displayJobsArray, setDisplayJobsArray] = useState([]);
  
  const handleDataFetch = async () => {
    console.log("function calld")
    let res = await get(`${process.env.REACT_APP_API_URL}/jobstories.json`)
    setJobsId(res)
    setDisplayJobsArray(res.slice(0, 6))
    return res
  }

  const {status, error, isLoading, isFetching, data: jobs} = useQuery({
      queryKey: "jobIds",
      queryFn: handleDataFetch,
      staleTime: 3000,
      cacheTime: 10000
  })
  
  const handleLoadMoreJobs = () => {
    setPage(prev => prev+1)
  }
console.log({isLoading, isFetching})
// console.log("🚀 ~ JobBoardContainer ~ jobs:", jobs)
// console.log("🚀 ~ JobBoardContainer ~ isLoading:", isLoading)
// console.log("🚀 ~ JobBoardContainer ~ error:", error)
// console.log("🚀 ~ JobBoardContainer ~ status:", status)

  useEffect(() => {
    let jobList = [...displayJobsArray, ...jobsId.slice(displayJobsArray.length, (page*6) )]
    setDisplayJobsArray(jobList)
  }, [page])
  
  // useEffect(() => {
  //   handleDataFetch()
  // }, [])

  return (
    <div className="bg-[#f6f7ef] h-[100%] m-0 p-8">
      <h1 className="text-[#ef6b37] font-bold text-2xl m-4">Hacker News Jobs Board</h1>
      {jobsId.length > 0 &&
      <>
       <div>
        {displayJobsArray.map((job, index) => <JobCard key={index} job={job}/>)}
      </div>
      <button 
      className="bg-[#ef6b37] text-white rounded-md px-4 py-1 m-4 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleLoadMoreJobs}
      disabled={displayJobsArray.length >= jobsId.length}
      >
        Load more jobs
      </button>
      </>}
    </div>
  )
}

export default JobBoardContainer