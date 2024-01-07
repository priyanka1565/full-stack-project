import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== " " && email !== "" && password !== "" ) {
            axios.post("https://backend-9mrw.onrender.com/user/register", { name: name, password: password,email:email }).then((res) => {
                if (res) {
                    toast.success(`${res?.data?.message}`)
                }
                navigate("/login")
            }).catch((err) => {
                toast.error(`${err}`)
            })
        }
        else {
            toast("please enter Valid details")
        }

    }

    const goToSignIn = () => {
        navigate("/login")
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name' 
                            onChange={(e)=>setName(e.target.value)}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                    <p>Already Have an Account</p>
                    <button  className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}

export default SignUp