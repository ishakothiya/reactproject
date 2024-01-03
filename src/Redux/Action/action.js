import axios from "axios"
import { GETAPI } from "../Type/type"

let auth ={
    headers :{
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getproject = () =>{
    return (dispatch) =>{
        axios.get("https://iris-api.mycodelibraries.com/api/Admin/GetAllProjects",auth).then((res) =>{
            dispatch({type: GETAPI , data : res.data.responseData})
        })
    }
}



export const getrecentactivity = () =>{
    return (dispatch) =>{
        axios.get("https://iris-api.mycodelibraries.com/api/Admin/GetAllRecentActivites",auth).then((res) =>{
            dispatch({type: GETAPI , data : res.data.responseData})
        })
    }
}

export const getprofileapi = ()=> {
    return (dispatch) => {
        axios.get("https://iris-api.mycodelibraries.com/api/Profile/GetAllProfile",auth).then((res)=>{
                dispatch({type : GETAPI , data :res.data.responseData});
            })    
        }
    }

    export const addprofileapi = (obj)=> {
        return (dispatch) => {
        axios.post("https://iris-api.mycodelibraries.com/api/Profile/CreateProfile",obj,auth).then((res)=>{
            dispatch(getprofileapi());
        })    
    }
}
export const editprofileapi = (obj)=> {
    return (dispatch) => {
        axios.post("https://iris-api.mycodelibraries.com/api/Profile/UpdateProfile",obj,auth).then((res)=>{
            dispatch(getprofileapi());
          })    
    }
}
export const deleteprofileapi = (id)=> {
    return (dispatch) => {
        axios.delete(`https://iris-api.mycodelibraries.com/api/Profile/DeleteProfile/${id}`,auth).then((res)=>{
            dispatch(getprofileapi());
          })    
    }
}   
   

