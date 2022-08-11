import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState()

    const allErrors = () => {
        const errorsArray = [];
        if (!email || !password || !confirmPassword) errorsArray.push("All Fields Must Be Required..!");
        if ([...email].filter(check => check === '@').length !== 1) errorsArray.push(" '@' Must be in Your Email..!");
        if (password !== confirmPassword) errorsArray.push("Password Not Math..!");
        return errorsArray;
    }
    const userCreate = (event) => {
        event.preventDefault()
        const error = allErrors();
        // console.log(error)
        setMessage(error.length ? error : "User Created Successfully...!!!");
    }

    return (
        <div className='form-container'>

            <form onSubmit={userCreate}>
                <h1>CREATE USER</h1><br/>
                {message}<br/>
                <label htmlFor='email' /><br/>
                <input onChange={(e) => setEmail(e.target.value)}  placeholder='Enter Email' /><br/>
                <label htmlFor='password' /><br/>
                <input onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder='Enter Password' /><br/>
                <label htmlFor='password' /><br/>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type={'password'} placeholder='Enter confirm  Password' /><br/><br/>
                <input type={"submit"} value="Create" /><br/>

            </form>


        </div>
    )
}

export default Form