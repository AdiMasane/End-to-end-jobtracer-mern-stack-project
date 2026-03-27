import { useState } from "react"
import Sidebar from "../components/Sidebar"
import API from "../services/api"

function Profile(){

// GET USER FROM STORAGE
const storedUser = localStorage.getItem("user")
const user = storedUser ? JSON.parse(storedUser) : null

const [name,setName] = useState(user?.name || "")
const [email,setEmail] = useState(user?.email || "")
const [password,setPassword] = useState("")

const updateProfile = async()=>{

try{

const res = await API.put("/auth/update",{
name,
email,
password
})

// UPDATE USER IN LOCAL STORAGE
localStorage.setItem("user",JSON.stringify(res.data))

alert("Profile Updated")

}catch(error){

console.log(error)
alert("Update Failed")

}

}

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 p-8 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold mb-6">
Profile
</h1>

<div className="bg-white p-6 rounded shadow w-96">

<label className="block mb-2 font-semibold">
Name
</label>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 w-full mb-4 rounded"
/>

<label className="block mb-2 font-semibold">
Email
</label>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-2 w-full mb-4 rounded"
/>

<label className="block mb-2 font-semibold">
New Password
</label>

<input
type="password"
placeholder="Leave empty if not changing"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="border p-2 w-full mb-4 rounded"
/>

<button
onClick={updateProfile}
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
Update Profile
</button>

</div>

</div>

</div>

)

}

export default Profile