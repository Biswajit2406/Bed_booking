import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className='container'>
            <div className="wrapper">
                <div className="title">SIGN UP</div>
                <form className='form'>
                    <input type="text" name="fname" placeholder='Name'/>
                    <input type="text" placeholder='Email' name="email"/>
                    <input type="text" placeholder='PassWord' name="password"/>
                    <input type="text" placeholder='Confirm Password' name="confirm"/>
                </form>
                <button className='btn'>Submit</button>
            </div>
        </div>
    )
}

export default Register