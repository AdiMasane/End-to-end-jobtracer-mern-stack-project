import { useEffect,useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatsCard from "../components/StatsCard"
import ApplicationsChart from "../components/ApplicationsChart"
import API from "../services/api"

function Dashboard(){

const [jobs,setJobs] = useState([])

const fetchJobs = async()=>{

try{

const res = await API.get("/jobs")
setJobs(res.data)

}catch(error){

console.log(error)

}

}

useEffect(()=>{
fetchJobs()
},[])


// COUNT JOB TYPES
const applied = jobs.filter(j=>j.status==="Applied").length
const interviews = jobs.filter(j=>j.status==="Interview").length
const offers = jobs.filter(j=>j.status==="Offer").length
const rejected = jobs.filter(j=>j.status==="Rejected").length


return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-gray-100 min-h-screen">

<Navbar/>

<div className="p-6">

{/* STATS CARDS */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

<StatsCard
title="Applied"
value={applied}
color="border-blue-500"
/>

<StatsCard
title="Interviews"
value={interviews}
color="border-yellow-500"
/>

<StatsCard
title="Offers"
value={offers}
color="border-green-500"
/>

<StatsCard
title="Rejected"
value={rejected}
color="border-red-500"
/>

</div>


{/* CHART */}

<ApplicationsChart jobs={jobs}/>

</div>

</div>

</div>

)

}

export default Dashboard