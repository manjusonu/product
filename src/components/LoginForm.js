import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>


            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" email="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />


                </div>


                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" email="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />


                </div>
                <input type="submit" value="Submit" />
                <input type="submit" value="Register" />
            </div>


        </form>

    )
}

export default LoginForm




