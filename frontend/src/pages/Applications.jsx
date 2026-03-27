import { useEffect,useState } from "react"
import Sidebar from "../components/Sidebar"
import API from "../services/api"

function Applications(){

const [jobs,setJobs] = useState([])

const [company,setCompany] = useState("")
const [position,setPosition] = useState("")
const [status,setStatus] = useState("Applied")

const fetchJobs = async()=>{

const res = await API.get("/jobs")

setJobs(res.data)

}

useEffect(()=>{
fetchJobs()
},[])


const addJob = async()=>{

await API.post("/jobs",{company,position,status})

setCompany("")
setPosition("")
setStatus("Applied")

fetchJobs()

}

const deleteJob = async(id)=>{

await API.delete(`/jobs/${id}`)

fetchJobs()

}

const updateStatus = async(id,newStatus)=>{

await API.put(`/jobs/${id}`,{status:newStatus})

fetchJobs()

}

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 p-8 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold mb-6">
My Applications
</h1>


<div className="bg-white p-6 rounded shadow mb-8 flex gap-4">

<input
placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
className="border p-2 rounded"
/>

<input
placeholder="Position"
value={position}
onChange={(e)=>setPosition(e.target.value)}
className="border p-2 rounded"
/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
className="border p-2 rounded"
>

<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>

</select>

<button
onClick={addJob}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Add
</button>

</div>


<div className="bg-white rounded shadow">

<table className="w-full">

<thead className="bg-gray-200">

<tr>

<th className="p-3 text-left">Company</th>
<th className="p-3 text-left">Role</th>
<th className="p-3 text-left">Status</th>
<th className="p-3 text-left">Actions</th>

</tr>

</thead>

<tbody>

{jobs.map(job=>(

<tr key={job._id} className="border-t">

<td className="p-3">{job.company}</td>

<td className="p-3">{job.position}</td>

<td className="p-3">

<select
value={job.status}
onChange={(e)=>updateStatus(job._id,e.target.value)}
className="border p-1 rounded"
>

<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>

</select>

</td>

<td className="p-3">

<button
onClick={()=>deleteJob(job._id)}
className="text-red-500"
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

)

}

export default Applications