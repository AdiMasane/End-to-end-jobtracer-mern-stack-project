function Navbar(){

const storedUser = localStorage.getItem("user")
const user = storedUser ? JSON.parse(storedUser) : null

return(

<div className="bg-white shadow p-4 flex justify-between">

<h1 className="text-xl font-bold">
Dashboard
</h1>

<div>

<span className="mr-2">
Welcome
</span>

<span className="font-semibold">
{user?.name}
</span>

</div>

</div>

)

}

export default Navbar