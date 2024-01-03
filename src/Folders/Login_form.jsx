// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import { RiAccountCircleFill } from "react-icons/ri"
import { FaLock } from "react-icons/fa";
import '../Folders/Css/Login.css'
import axios from 'axios';


function Login_form (props){

    const [obj , setobj] = useState({})
    const navigate = useNavigate()
    let [blankobj, setblankobj] = useState({});

    const login = ()=>{

        axios.post("https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate",obj).then((res) => {
            if(res.data.isSuccess){

                localStorage.setItem('islogin' , true)
                localStorage.setItem('token', res.data.responseData.token)
                localStorage.setItem('getobj', JSON.stringify(res.data.responseData))
                props.setislogin(true);
                // props.setgetdata(JSON.stringify(res.data.responseData))
                navigate('/dashbord');
            }
            else{
                alert(res.data.errorMessage)
            }
        })

    }

    const getdata = (e)=>{
        obj[e.target.name] = e.target.value;
        blankobj[e.target.name] = "";
        setobj({ ...obj });
        setblankobj({ ...blankobj });
    }

    
    return (
        <>
         <div id='login_body'>
         <div className='main'>
            <div id='login_div'>
                <h1>LOGIN</h1>
                <form>
                    <div className='input-box'>
                        <span class='icon'><RiAccountCircleFill/></span>
                        <input type='text' name='email'  
                        placeholder='Email'
                        onChange={getdata} value={obj.email ?? ''}/>
                    
                    </div>
                    <div className='input-box'>
                        <span class='icon'><FaLock /></span>
                        <input 
                        placeholder='Password'
                        type='password' name='password'  onChange={getdata} value={obj.password ?? ''}/>
                            
                    </div>

                    <div className='check'>
                    <NavLink to='/Registration'><p>Forget Password??</p></NavLink>    
                    </div>

                    <button id='btn' onClick={login} type='button'>Login</button>

                    <div className='register'>
                    Don't have an account ??
                    <NavLink to='/Registration'><p>Sign Up</p></NavLink>    
                    </div>


                </form>
            </div>
         </div>
         </div>

        </>
    )
}

export default Login_form