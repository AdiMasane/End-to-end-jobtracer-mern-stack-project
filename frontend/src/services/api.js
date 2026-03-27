import axios from "axios"

const API = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VITE_API_URL
})

API.interceptors.request.use((req)=>{

const token = localStorage.getItem("token")

if(token){
req.headers.Authorization = `Bearer ${token}`
}

return req

})

export default API