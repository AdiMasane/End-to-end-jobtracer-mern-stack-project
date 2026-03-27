import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import API from "../services/api"

function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{
await API.post("/auth/register",{name,email,password})
navigate("/login")
}catch(error){
alert("Registration Failed")
}
}

return(

<div className="flex items-center justify-center min-h-screen bg-blue-100">

<div className="bg-white p-8 rounded-lg shadow-md w-96">

<h2 className="text-2xl font-bold mb-6 text-center">
Create Account
</h2>

<form onSubmit={handleSubmit}>

<input
className="w-full border p-2 mb-3 rounded"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="w-full border p-2 mb-3 rounded"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="w-full border p-2 mb-4 rounded"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
Register
</button>

</form>

<p className="text-sm text-center mt-4">

Already registered?  
<Link to="/login" className="text-blue-600 ml-1">
Login
</Link>

</p>

</div>

</div>

)

}

export default Register