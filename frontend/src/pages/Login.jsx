import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import API from "../services/api"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await API.post("/auth/login",{email,password})

// SAVE TOKEN
localStorage.setItem("token",res.data.token)

// SAVE USER
localStorage.setItem("user",JSON.stringify(res.data.user))

navigate("/dashboard")

}catch(error){

console.log(error)
alert("Login Failed")

}

}

return(

<div className="flex items-center justify-center min-h-screen bg-blue-100">

<div className="bg-white p-8 rounded-lg shadow-md w-96">

<h2 className="text-2xl font-bold mb-6 text-center">
Welcome Back
</h2>

<form onSubmit={handleSubmit}>

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
Login
</button>

</form>

<p className="text-sm text-center mt-4">

New user?  
<Link to="/" className="text-blue-600 ml-1">
Register
</Link>

</p>

</div>

</div>

)

}

export default Login