function StatsCard({title,value,color}){

return(

<div className={`p-4 rounded shadow bg-white border-l-4 ${color}`}>

<h3 className="text-gray-500 text-sm">
{title}
</h3>

<p className="text-2xl font-bold">
{value}
</p>

</div>

)

}

export default StatsCard