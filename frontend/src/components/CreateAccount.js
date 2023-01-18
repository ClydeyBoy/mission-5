import '../styles/CreateAccount.css'
import closeBtn from "../images/property_page/Close.png"
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import validator from 'validator'

function CreateAccount(props) {

    //creating states to store the entries of the signup form
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //importing and destructuring the custom useSignup hook
    const { signup, error, isLoading } = useSignup()

    //validation upon submission of form.
    //if all validation is passed signup is processed
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validator.equals(email, confirmEmail)) {
            window.alert("Emails do not match");
            throw Error('Emails do not match')
        }
        if (!validator.equals(password, confirmPassword)) {
            window.alert("Passwords do not match");
            throw Error('Passwords do not match')
        }
        if (!email || !password) {
            window.alert("All fields must be filled");
            throw Error('All fields must be filled')
        }
        if (!validator.isEmail(email)) {
            window.alert("Email is not valid");
            throw Error('Email is not valid')
        }
        if (!validator.isStrongPassword(password)) {
            window.alert("Password not strong enough");
            throw Error('Password not strong enough')
        }
        await signup(email, password)

        if (error) {
            window.alert(error);
        }
    }

    //sign up form appears only if trigger is true. 
    //The trigger is activated when the user clicks on of the associated buttons

    return (props.trigger2) ? (
        <div className='signUpFormGreyedArea'>
            <div className='createAccountBoxOuter'>
                <div className='createAccountBoxInner'>
                    <div className='signUpFormHeader'>Register for MyMetro</div>

                    {/* Form tracks all changes in fields and sends them to the associated useState functions  */}

                    <form className='createAccount' onSubmit={handleSubmit}>
                        <div>
                            <label for='emailRegistraition'>Email Address</label>
                            <input type='email' id='emailRegistraition' name='emailRegistraition'
                                onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        </div>
                        <div>
                            <label for='confirmEmail'>Confirm Email Address</label>
                            <input type='email' id='confirmEmail' name='confirmEmail'
                                onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail}></input>
                        </div>
                        <div>
                            <label for='password' id='passwordLabel'>Password</label>
                            <input type='password' id='passwordRegistration' name='passwordRegistration'
                                onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        </div>
                        <div>
                            <label for='confirmPassword'>Confirmation of Password</label>
                            <input type='password' id='confirmPassword' name='confirmPassword'
                                onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                        </div>
                        <div id='passwordGuide'><b>1 upper case, 1 number, 1 special character</b></div>
                        <button disabled={isLoading}>Create & Submit</button>
                    </form>

                    {/* Close button to close the form */}
                </div>
                <img className='closeBtn2' src={closeBtn} alt='' onClick={() => props.setTrigger2(false)}></img>
            </div>
        </div>
    ) : '';
}

export default CreateAccount


