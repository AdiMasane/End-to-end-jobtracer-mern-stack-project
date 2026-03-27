import { useState } from "react"
import API from "../services/api"

function JobForm({refreshJobs}){

const [company,setCompany] = useState("")
const [position,setPosition] = useState("")
const [status,setStatus] = useState("Applied")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

await API.post("/jobs",{
company,
position,
status
})

setCompany("")
setPosition("")
setStatus("Applied")

refreshJobs()

}catch(error){

console.log(error)

}

}

return(

<div>

<h3>Add Job</h3>

<form onSubmit={handleSubmit}>

<input
placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
/>

<br/>

<input
placeholder="Position"
value={position}
onChange={(e)=>setPosition(e.target.value)}
/>

<br/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>

</select>

<br/>

<button type="submit">Add Job</button>

</form>

</div>

)

}

export default JobForm