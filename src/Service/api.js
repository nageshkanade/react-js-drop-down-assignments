import axios from "axios";


const axioxGetData = async()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/users')
 console.log(response.data,'%%%%%%%%%%','This is api calling ')
    
 if(response){
    return response.data
 }
    }
    catch(error){
        console.log(error)
    }

}
export default axioxGetData;

export const axiosIdData= async(id)=>{
    console.log(id,'I get this id')
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(response,'#####################')
    if(response){
        return [response.data]
    }
}


export const axiosDelete= async(id)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    console.log(response,'#####################')
    if(response){
        return response
    }
}