import { Link, useNavigate } from "react-router-dom"
import { FaChartBar, FaBriefcase, FaUser } from "react-icons/fa"

function Sidebar(){

const navigate = useNavigate()

const storedUser = localStorage.getItem("user")
const user = storedUser ? JSON.parse(storedUser) : null

const logout = ()=>{
localStorage.removeItem("token")
localStorage.removeItem("user")
navigate("/login")
}

return(

<div className="bg-blue-900 text-white w-64 min-h-screen p-6 flex flex-col">

<h2 className="text-2xl font-bold mb-8">
JobTrack
</h2>

<div className="mb-8">
<p className="font-semibold">{user?.name}</p>
<p className="text-sm opacity-70">{user?.email}</p>
</div>

<ul className="space-y-4 flex-1">

<li>
<Link to="/dashboard" className="flex items-center gap-2">
<FaChartBar/>
Dashboard
</Link>
</li>

<li>
<Link to="/applications" className="flex items-center gap-2">
<FaBriefcase/>
My Applications
</Link>
</li>

<li>
<Link to="/profile" className="flex items-center gap-2">
<FaUser/>
Profile
</Link>
</li>

</ul>

<button
onClick={logout}
className="bg-red-500 py-2 rounded hover:bg-red-600"
>
Logout
</button>

</div>

)

}

export default Sidebar