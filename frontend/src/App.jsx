import { Routes,Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Applications from "./pages/Applications"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App(){

return(

<Routes>

<Route path="/" element={<Register/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/applications" element={<Applications/>}/>

<Route path="/profile" element={<Profile/>}/>

</Routes>

)

}

export default App