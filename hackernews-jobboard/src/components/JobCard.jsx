import React, {useState, useEffect} from 'react'
import { useQuery } from 'react-query';
import { get } from '../utils/crud';

const JobCard = ({job}) => {
    const [jobDetails, setjobDetails] = useState({});
    
    const getJobDetails = async () => {
        
        try {
            let res = await get(`${process.env.REACT_APP_API_URL}/item/${job}.json`)
            setjobDetails(res)
        }catch(e) {
            console.error(e)
        }
    }
    
   
    // const {status, error, isLoading, isFetching, data: jobDetail} = useQuery({
    //     queryKey: "jobDetails",
    //     queryFn: getJobDetails,
    //     staleTime: 15000,
    //     cacheTime: 20000
    // })

    // console.log({isLoading, isFetching})
    // console.log("🚀 ~ JobCard ~ status:", status)
    // console.log("🚀 ~ JobCard ~ isFetching:", isFetching)
    // console.log("🚀 ~ JobCard ~ isLoading:", isLoading)
    // console.log("🚀 ~ JobCard ~ jobDetail:", jobDetail)

    useEffect(() => {
        getJobDetails()
    }, [])

  return (
    <>
        {(Object.keys(jobDetails).length > 0) && <div 
        className="bg-white text-black border border-[#f2f1f2] rounded m-4 p-4"
        >
            <h2 className="font-bold">
                {jobDetails.url ? <a 
                className="hover:underline"
                href={jobDetails.url} target="_blank" rel="noreferrer">

                {jobDetails.title}
                </a> : jobDetails.title}
            </h2>
            <span className="text-[#818181]">By {jobDetails.by}  {new Date(jobDetails.time).toLocaleDateString()} </span>

        </div>
        }
    </>
  )
}

export default JobCard