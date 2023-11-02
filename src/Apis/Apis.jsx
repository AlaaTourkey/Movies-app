import axios from "axios";


export let axiosPost = async (formData,endPoint) => {
  let  {data}  = await axios.post(`https://movies-api.routemisr.com/${endPoint}`,formData)
  return(data);
}
