import { Bar } from "react-chartjs-2"
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement
} from "chart.js"

ChartJS.register(CategoryScale,LinearScale,BarElement)

function ApplicationsChart({jobs}){

const data = {

labels:["Applied","Interview","Offer","Rejected"],

datasets:[{

label:"Applications",

data:[

jobs.filter(j=>j.status==="Applied").length,
jobs.filter(j=>j.status==="Interview").length,
jobs.filter(j=>j.status==="Offer").length,
jobs.filter(j=>j.status==="Rejected").length

],

backgroundColor:["blue","orange","green","red"]

}]

}

return(

<div className="bg-white p-4 rounded shadow">
<Bar data={data}/>
</div>

)

}

export default ApplicationsChart