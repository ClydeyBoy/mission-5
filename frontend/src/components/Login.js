import '../styles/Login.css'
import closeBtn from "../images/property_page/Close.png"
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import validator from 'validator'

function Login(props) {

    let user = localStorage.getItem("user");

    //creating states to store the entries of the signup form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    //importing and destructuring the custom useSignup hook
    const { login, error, isLoading } = useLogin()

    //validation upon submission of form.
    //if all validation is passed signup is processed
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);     
    }

    //stops the user from using the sign up or login function if already logged in
    if (user) {
        props.setTrigger2(false);
    }  

    //sign up form appears only if trigger is true. 
    //The trigger is activated when the user clicks on of the associated buttons

    return (props.trigger2) ? (
        <div className='loginFormGreyedArea'>
            <div className='loginBoxOuter'>
                <div className='loginBoxInner'>
                    <div className='loginFormHeader'>Login to MyMetro</div>

                    {/* Form tracks all changes in fields and sends them to the associated useState functions  */}

                    <form className='loginForm' onSubmit={handleSubmit}>
                        <div>
                            <label for='enterEmail'>Email Address</label>
                            <input type='email' id='enterEmail' name='enterEmail'
                                onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        </div>
                        <div>
                            <label for='enterPassword' id='enterPasswordLabel'>Password</label>
                            <input type='password' id='enterPassword' name='enterPassword'
                                onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        </div>
                        <div id='forgotPassword'><b>Forgot your password</b></div>
                        <button disabled={isLoading}>Login</button>
                        {error && <div className = 'error'>{error}</div>}
                    </form>

                    {/* Close button to close the form */}
                </div>
                <img className='closeBtn3' src={closeBtn} alt='' onClick={() => props.setTrigger2(false)}></img>
            </div>
        </div>
    ) : '';
}

export default Login