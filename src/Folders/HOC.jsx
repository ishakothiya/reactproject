import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import { DiEnvato } from "react-icons/di"
import img1 from './image/PhotoRoom-20231207_092616.png'
import { MdSpaceDashboard } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai"
import { FaSearch } from "react-icons/fa";
import { LuActivitySquare } from "react-icons/lu";
import { IoMdMailUnread } from "react-icons/io";
import { IoSettings } from "react-icons/io5";


function HOC(Component1) {
    const Newcomponent = (props) => {
        console.log(props)
   
        const navigate = useNavigate()
        const logout = () => {
            localStorage.removeItem('islogin')
            props.setislogin(false)   
            navigate('/login')
        }

        const showdata = (props) => {
            // localStorage.getItem('id')
            navigate('/login_profile')
        }
        
        
        return <>
        <div className='d-flex container-scroller' id='maindiv'>

        <div className='sidebar'>
               <div>
                    <h1 className='text-center'><DiEnvato/>ADMIN</h1>
               </div>

               <div id='list_sidebar'>
               <ul className='px-2'>

                    <NavLink to='/dashboard' ><li>
                        <i>< MdSpaceDashboard/></i>Dashboard</li></NavLink>

                    {/* <NavLink to='/allprofiles'><li><i><RiProfileFill/></i>All Profiles</li></NavLink> */}

                    <NavLink to='/album'><li><i><AiFillProject/></i>Project</li></NavLink>

                    <NavLink to='/Recent_activity'><li><i><LuActivitySquare/></i>Recent_activity</li></NavLink>

                    {/* <NavLink to='/setting'><li><i><IoSettings/></i>Settings</li></NavLink> */}
               
                </ul>
               </div>
            </div>

        <div className='header'>
                <div className='d-flex p-2 justify-content-end headerdiv'>
                    <i><FaSearch/></i>
                    <input type="text" placeholder='Search Project' id='searchbar' />
                
                    <div className='img' onClick={showdata}>
                        <img src={img1} alt="" className='profile_img'/>
                    </div>


        <NavLink to='/Create_new_profile' className='profile'>Create Profile</NavLink>
                
                    <button className='btn ms-2' onClick={logout} type='button' id='btn2'>
                   X
                    </button>
                  
                </div>
            
                <div>
                <Component1/>

                
                </div>

            </div>
            

            
          
            
        </div>
        </>
    }
    return Newcomponent
}

export default HOC